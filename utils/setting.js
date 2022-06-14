/**
 *  Global Settings Utility
 */

const storage = require("electron-localstorage");
var remote = require("@electron/remote");
storage.setStoragePath(remote.getGlobal("storagePath").jsonPath);

var currentVer = 0.4;

function getSettings() {
    var settings =  storage.getItem("sysmocap-global-settings");
    // load default settings when cannot read from localStroage
    if (!settings || !settings.valued || settings.ver < currentVer )
        settings = {
            ui: {
                themeColor: "indigo",
                isDark: false,
                useGlass: true,
                language: "zh",
                useNewModelUI: true,
            },
            preview: {
                showSketelonOnInput: true,
                mirroringWhenCamera: true,
                mirroringWhenVideoFile: true,
            },
            output: {
                antialias: true,
                showFPS: true,
                usePicInsteadOfColor: false,
                bgColor: "#ffffff",
                bgPicPath: "",
            },
            forward: {
                enableForwarding: false,
                port: "8080",
                useSSL: true,
                supportForWebXR:'false'
            },
            mediapipe: {
                modelComplexity: "2",
                smoothLandmarks: true,
                minDetectionConfidence: "0.7",
                minTrackingConfidence: "0.7",
                refineFaceLandmarks: true,
            },
            dev: {
                allowDevTools: false,
                openDevToolsWhenMocap: false,
            },
            performance: {
                useDgpu: false,
                GPUs:0
            },
            valued: true,
            ver: currentVer,
        };
    return settings;
}

var globalSettings = getSettings();

function getUserModels() {
    var models = storage.getItem("sysmocap-user-models");
    if (!models) models = [];
    return models;
}

var models = getUserModels();

function saveSettings(settings) {
    if (!settings) settings = globalSettings;
    storage.setItem("sysmocap-global-settings", settings);
    if (settings.performance.useDgpu) storage.setItem("useDgpu", true);
    else storage.setItem("useDgpu", false);
}

function addUserModels(model) {
    if (!model) return;
    models.push(model);
    storage.setItem("sysmocap-user-models", models);
}

// remove from models name is same as the one to be removed
function removeUserModels(name) {
    var index = models.findIndex(function (element) {
        return element.name === name;
    }
    );
    if (index > -1) models.splice(index, 1);
    storage.setItem("sysmocap-user-models", models);
}

module.exports = {
    getSettings: getSettings,
    globalSettings: globalSettings,
    saveSettings: saveSettings,
    getUserModels: getUserModels,
    userModels: models,
    addUserModels: addUserModels,
    removeUserModels: removeUserModels,
};
