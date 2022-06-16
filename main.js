// output art text to console
var figlet = require("figlet")

console.log(
    "\x1b[95m%s\x1b[0m",
    "Start Successfully!"
);


const sections = [
    {
        header: "Monica",
        content:
            "A real-time video-based motion capture system for virtual character animating and rendering.",
    },
    {
        header: "Options",
        optionList: [
            {
                name: "help",
                type: Boolean,
                description: "Print this usage guide.",
            },
            {
                name: "bsmode",
                type: Boolean,
                description: "Run SysMocap on B/S mode. (experimental)",
            },
            {
                name: "port",
                typeLabel: "{underline number}",
                description: "The HTTP port when running on B/S mode.",
            },
            {
                name: "reset",
                type: Boolean,
                description: "Reset preferences and run sysmocap",
            },
            {
                name: "disable-acrylic",
                type: Boolean,
                description: "(Windows Only) disable acrylic effects",
            },
        ],
    },
];

// 命令行参数
const parser = require("./utils/argv-parser.js");
var argv = parser(process.argv);

if (argv.help) {
    var commandLineUsage = require("command-line-usage");
    console.log(commandLineUsage(sections));
    process.exit(0);
}

if (argv.bsmode) {
    console.log("\nRunning SysMocap on B/S mode.\nBooting Server...");

    const express = require("express");
    const app = express();

    app.use(express.static(__dirname));

    var port = argv.port ? argv.port : 8080;

    app.listen(port, "0.0.0.0", function () {
        console.log(
            "\x1b[92m%s%d\x1b[0m",
            "\nHTTP server listening on port ",
            port
        );
    });

    app.get("/", (req, res) => {
        res.redirect("/mainview/framework.html");
    });
} else {
    // 启动客户端electron应用程序
    const { app, BrowserWindow, ipcMain, nativeTheme } = require("electron");
    const os = require("os");
    const platform = os.platform();
    const { Worker } = require("worker_threads");

    // Make profile file on user home dir
    const path = require("path");
    const storage = require("electron-localstorage");
    const fs = require("fs");
    const _path = path.join(
        app.getPath("home"),
        app.getName() + "/",
        "profile.json"
    );
    const _path_dir = path.dirname(_path);
    if (!fs.existsSync(_path_dir)) {
        try {
            fs.mkdirSync(_path_dir);
        } catch (e) { }
    }
    storage.setStoragePath(_path);

    // Restart with force using the dedicated GPU
    const { spawn } = require("child_process");
    if (
        platform === "win32" &&
        // process.env.GPUSET !== "true" &&
        storage.getItem("useDgpu")
    ) {
        // Force using discrete GPU when there are multiple GPUs available.
        // Improve performance when your PC has discrete GPU
        app.commandLine.appendSwitch("force_high_performance_gpu", true);
    }

    // Modules to control application life and create native browser window

    var blurBrowserWindow;
    require("@electron/remote/main").initialize();

    // Enable Acrylic Effect on Windows by default
    if (platform === "win32")
        try {
            blurBrowserWindow =
                require("electron-acrylic-window").BrowserWindow;
        } catch (e) {
            blurBrowserWindow = BrowserWindow;
        }
    // if not on Windows, use electron window
    else blurBrowserWindow = BrowserWindow;

    global.storagePath = { jsonPath: storage.getStoragePath() };
    global.appInfo = { appVersion: app.getVersion(), appName: app.getName() };

    // Prevents Chromium from lowering the priority of invisible pages' renderer processes.
    // Improve performance when Mocap is running and forward motion data in background
    app.commandLine.appendSwitch("disable-renderer-backgrounding", true);

    // Keep a global reference of the window object, if you don't, the window will
    // be closed automatically when the JavaScript object is garbage collected.
    let mainWindow;

    // 将index.html加载进一个新的BrowserWindow实例
    function createWindow() {
        // Create the browser window.
        mainWindow = new BrowserWindow({
            width: 1180,
            height: 750,
            titleBarStyle: "hidden",
            trafficLightPosition: { x: 15, y: 15 },
            webPreferences: {
                nodeIntegration: true,
                webviewTag: true,
                contextIsolation: false,
                enableRemoteModule: true,
                backgroundThrottling: false,
                nodeIntegrationInSubFrames: true,
            },
        });

        // 将framework.html加载进一个新的BrowserWindow实例
        mainWindow.loadFile("mainview/framework.html");
        nativeTheme.themeSource = "light";

        // Open the DevTools.
        // mainWindow.webContents.openDevTools()
        require("@electron/remote/main").enable(mainWindow.webContents);

        // Emitted when the window is closed.
        mainWindow.on("closed", function () {
            // Dereference the window object, usually you would store windows
            // in an array if your app supports multi windows, this is the time
            // when you should delete the corresponding element.
            mainWindow = null;
        });
    }

    // 将/modelview.html加载到BrowserWindow实例中
    function createModelViewerWindow(args) {
        // Create the browser window.
        var myBrowserWindow = BrowserWindow;
        var addtionalArgs = { backgroundColor: "#eee" };
        if (args.useGlass) {
            myBrowserWindow = blurBrowserWindow;
            addtionalArgs = {
                vibrancy: "light",
                backgroundColor: "#00000000",
            };
        }
        var viewer = new myBrowserWindow({
            width: 820,
            height: 540,
            titleBarStyle: platform === "darwin" ? "hiddenInset" : "hidden",
            autoHideMenuBar: true,
            ...addtionalArgs,
            titleBarOverlay: {
                color: args.backgroundColor,
                symbolColor: args.color,
            },
            webPreferences: {
                nodeIntegration: true,
                webviewTag: true,
                contextIsolation: false,
                enableRemoteModule: true,
                additionalArguments: ["argsData", JSON.stringify(args)],
            },
        });

        // and load the index.html of the app.
        viewer.loadFile("modelview/modelview.html");
        require("@electron/remote/main").enable(viewer.webContents);

        // Emitted when the window is closed.
        viewer.on("closed", function () {
            viewer = null;
        });
    }

    // 打开模型的详细介绍
    ipcMain.on("openModelViewer", function (event, arg) {
        createModelViewerWindow(arg);
    });


    // This method will be called when Electron has finished
    // initialization and is ready to create browser windows.
    // Some APIs can only be used after this event occurs.
    app.on("ready", createWindow);

    // Quit when all windows are closed.
    app.on("window-all-closed", function () {
        app.quit();
    });

    app.on("activate", function () {
        if (mainWindow === null) createWindow();
    });
}
