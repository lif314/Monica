# Monica: an amazing virtual anchor

## Introduction
Monica, named after a character in my favorite show "Friends", is a stunning virtual anchor system. She is another self in the online world, please embrace her! If you are afraid to show your face, you can use it anywhere, such as live streaming, lecturing, various video conferences, etc. I have a nice idea. For online classes, opening the video would be an invasion of privacy, but with Monica, the teacher can indirectly see what each student is listening to, or at least make sure the students are looking at the screen.

![img9](./docs/img/9.jpg)

## Technologies
- [MediaPipe](https://google.github.io/mediapipe/): Face Detection, Face Mesh, Iris Detection, Hand Detection, Pose Detection, Holistic Detection
- [Electron](https://www.electronjs.org/): Build cross-platform desktop apps with JavaScript, HTML, and CSS
- [kalidokit](https://github.com/yeemachine/kalidokit): Kalidokit is a blendshape and kinematics solver for Mediapipe/Tensorflow.js face, eyes, pose, and hand tracking models, compatible with Facemesh, Blazepose, Handpose, and Holistic. It takes predicted 3D landmarks and calculates simple euler rotations and blendshape face values.
- Reference: [vtuber](https://github.com/YunYouJun/vtuber),  [Amazing_MediaPipe_Tools](https://github.com/lif314/Amazing_MediaPipe_Tools),  [Material Design](https://m3.material.io/)

## How to run 
- clone
```shell
git clone https://github.com/lif314/Monica.git
```

- install
```shell
npm i
```

- install electron(If you run `npm i` and the installation fails)
```shell
 cd .\node_modules\electron\

 node install install.js
```

- run

```shell
npm start
```

## What you can see
- AI Anchor(Half mode)

![img1](./docs/img/1.png)

- AI Anchor(Face mode)

![img2](./docs/img/2.png)

- AI Anchor(change background)

![img3](./docs/img/3.png)

- AI Anchor(change model)

![img4](./docs/img/4.png)


- Model library
![img7](./docs/img/7.png)

- Model Details

![img8](./docs/img/8.png)


## Use in Tencent meetings
- Download  Plugin: You need the virtual camera plug-in to access the Tencent meeting, I use OBS Studio, you can download it from the link below.
    - Link：https://pan.baidu.com/s/1eEaKGa43v2zEt97EjLLi2A 
    - Extraction Code：akt7

- Install: Run the exe file and plugin to install
- Setting up OBS Studio

![img5](./docs/img/5.png)

- Set up in Tencent Meeting
> If the `OBS Virtual Camera` option does not appear, please re-run the OBS plugin and restart Tencent Meeting.

![img6](./docs/img/6.png)
