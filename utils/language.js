module.exports = {
    languages: {
        zh: {
            app: {
                name: "Embrace another self in the network",
            },
            titlebar: {
                modelLib: "Model",
                mocap: "AI Vtuber",
                settings: "monica",
            },
            tabModelLib: {
                userModel: "用户模型",
                buildinModel: "内建模型",
                optAdd: "导入",
                optHide: "隐藏",
                dragModel: "把模型拖到这儿来~",
                suppotFormat: "支持VRM/GLB/GLTF/FBX，详细说明参见",
                here: "这里",
                dragImage: "把图片拖到这儿来~",
                open: "打开",
                setAsDefault: "设为默认",
                showInFinder: "在 Finder 中显示",
                remove: "移除",
            },
            tabMocap: {
                chooseModel: "选择模型：",
                dataSource: "数据源：",
                camera: "摄像头",
                videoFile: "视频文件",
                start: "开始",
                stop: "停止",
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
                performance: {
                    name: "性能",
                    gl: "当前图形计算设备：",
                    forcedDGPU:
                        "在双显卡设备优先使用独立显卡进行图形计算（重启软件生效）",
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
                dev: {
                    name: "开发者",
                    allowDevTools: "显示DevTools入口",
                    openDevToolsWhenMocap: "在启动动作捕捉时打开DevTools窗口",
                    showGpuInfo: "打开GPU信息页面",
                },
            },
            modelVierer: {
                fullSupport: "完整动作支持",
                partialSupport: "部分动作支持",
                noSupport: "不支持",
                showSketelon: "显示骨骼控制器",
                hideSketelon: "隐藏骨骼控制器",
                modifyDecoration: "编辑装饰物",
                back: "返回",
            },
        }
    },
};
