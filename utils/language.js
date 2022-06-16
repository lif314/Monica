module.exports = {
    languages: {
        zh: {
            app: {
                name: "Embrace another self in the network",
            },
            titlebar: {
                modelLib: "Model",
                mocap: "AI Anchor",
                settings: "monica",
            },
            tabModelLib: {
                userModel: "User Models",
                buildinModel: "Built-in Model",
                allModel:"Available Models",
                optAdd: "Import",
                optHide: "Hidden",
                dragModel: "Drag the model here~",
                suppotFormat: "Only supports VRM/GLB/GLTF/FBX",
                here: "!",
                dragImage: "Drag the image here~",
                open: "Open",
                setAsDefault: "Set as Default",
                showInFinder: "Show in Finder",
                remove: "Remove",
            },
            tabMocap: {
                chooseModel: "Select:  ",
                dataSource: "Source:",
                camera: "Camera",
                videoFile: "Video",
                start: "Start",
                stop: "Stop",
            },
            tabSettings: {
                ui: {
                    name: "外观",
                    themeColor: "主题颜色",
                    isDark: "使用深色模式",
                    useGlass: "使用毛玻璃效果",
                    language: "语言",
                },
                preview: {
                    name: "实时预览",
                    showSketelonOnInput: "对输入源进行骨骼可视化标记",
                    mirroringWhenCamera: "当输入源为摄像头时，进行水平镜像翻转",
                    mirroringWhenVideoFile:
                        "当输入源为视频文件时，进行水平镜像翻转",
                },
                output: {
                    name: "虚拟形象输出",
                    antialias: "启用抗锯齿",
                    usePicInsteadOfColor: "使用图片作为背景而不是纯色",
                    bgColor: "背景颜色",
                    bgPicPath: "背景图片（点击更换）",
                },
                forward: {
                    name: "动作/虚拟形象转发",
                    enableForwarding:
                        "启用通过 HTTP / WebSocket 的动作/虚拟形象转发",
                    port: "HTTP / WebSocket 端口号",
                    useSSL: "启用安全协议（HTTPS/WSS）",
                    supportForWebXR: "启用WebXR（AR、VR）支持",
                    webXRtips:"WebXR需要HTTPS协议，该系统会在同一端口同时监听HTTPS和HTTP请求",
                },
                mediapipe: {
                    name: "动作捕捉",
                },
            },
            modelVierer: {
                fullSupport: "完整动作支持",
                partialSupport: "部分动作支持",
                noSupport: "不支持",
                showSketelon: "Show Bone Controller",
                hideSketelon: "Hide Bone Controller",
                modifyDecoration: "Edit Decorations",
                back: "Back",
            },
        }
    },
};
