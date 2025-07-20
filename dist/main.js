/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/app.ts":
/*!********************!*\
  !*** ./src/app.ts ***!
  \********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var three__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! three */ "./node_modules/three/build/three.module.js");
/* harmony import */ var three_examples_jsm_controls_OrbitControls__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! three/examples/jsm/controls/OrbitControls */ "./node_modules/three/examples/jsm/controls/OrbitControls.js");
/* harmony import */ var lil_gui__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! lil-gui */ "./node_modules/lil-gui/dist/lil-gui.esm.js");
//23FI045 坂本匠
//SF作品や魔法を扱った作品でみられる「球体を中心にリングが回転している」アニメーション



class ThreeJSContainer {
    scene;
    light;
    cloud;
    cloudR; //赤
    cloudW; //白
    cloudG; //緑
    cloudY; //黄
    cloudB; //青
    cloudV; //紫
    constructor() {
    }
    // 画面部分の作成(表示する枠ごとに)*
    createRendererDOM = (width, height, cameraPos) => {
        const renderer = new three__WEBPACK_IMPORTED_MODULE_1__.WebGLRenderer();
        renderer.setSize(width, height);
        renderer.setClearColor(new three__WEBPACK_IMPORTED_MODULE_1__.Color(0x000000)); //背景を黒に
        renderer.shadowMap.enabled = true; //シャドウマップを有効にする
        //カメラの設定
        const camera = new three__WEBPACK_IMPORTED_MODULE_1__.PerspectiveCamera(75, width / height, 0.1, 1000);
        camera.position.copy(cameraPos);
        camera.lookAt(new three__WEBPACK_IMPORTED_MODULE_1__.Vector3(0, 0, 0));
        const orbitControls = new three_examples_jsm_controls_OrbitControls__WEBPACK_IMPORTED_MODULE_0__.OrbitControls(camera, renderer.domElement);
        this.createScene();
        // 毎フレームのupdateを呼んで，render
        // reqestAnimationFrame により次フレームを呼ぶ
        const render = (time) => {
            orbitControls.update();
            renderer.render(this.scene, camera);
            requestAnimationFrame(render);
        };
        requestAnimationFrame(render);
        renderer.domElement.style.cssFloat = "left";
        renderer.domElement.style.margin = "10px";
        return renderer.domElement;
    };
    // シーンの作成(全体で1回)
    createScene = () => {
        this.scene = new three__WEBPACK_IMPORTED_MODULE_1__.Scene();
        let gui = new lil_gui__WEBPACK_IMPORTED_MODULE_2__["default"](); // GUI用のインスタンスの生成
        //  let guiObj = { rotationSpeedX: 0.05} // GUIのパラメータ
        //  gui.add(guiObj, "rotationSpeedX", 0.0, 0.2); //GUIの設定
        let guiObj = {
            sphereRadius: 3,
            sphereRotationSpeedX: 0.7, sphereRotationSpeedY: 0.0, sphereRotationSpeedZ: 0.0,
            sphereRotateX: 0, sphereRotateY: 0, sphereRotateZ: 0,
            spherePointsNum: 40,
            // sphereColor: '#404040', //球の色
            sphereColor: { r: 64, g: 64, b: 64 },
            sphereVisible: true,
            //リング１
            ring1Radius: 5.4,
            ring1RotationSpeedX: 0.6, ring1RotationSpeedY: 0.6, ring1RotationSpeedZ: 0.6,
            ring1RotateX: 45, ring1RotateY: 45, ring1RotateZ: 45,
            ring1PointsNum: 80,
            // ring1Color: '#ff0000', //球の色
            ring1Color: { r: 255, g: 0, b: 0 },
            ring1visible: true,
            //リング２
            ring2Radius: 5.7,
            ring2RotationSpeedX: 1.0, ring2RotationSpeedY: 1.0, ring2RotationSpeedZ: 1.0,
            ring2RotateX: 90, ring2RotateY: 90, ring2RotateZ: 90,
            ring2PointsNum: 80,
            // ring2Color: '#ffffff', //球の色
            ring2Color: { r: 255, g: 255, b: 255 },
            ring2visible: true,
            //リング３
            ring3Radius: 6.0,
            ring3RotationSpeedX: 0.8, ring3RotationSpeedY: 0.8, ring3RotationSpeedZ: 0.8,
            ring3RotateX: 135, ring3RotateY: 135, ring3RotateZ: 135,
            ring3PointsNum: 80,
            // ring3Color: '#00ff00', //球の色
            ring3Color: { r: 0, g: 255, b: 0 },
            ring3visible: true,
            //リング４
            ring4Radius: 6.3,
            ring4RotationSpeedX: 1.0, ring4RotationSpeedY: 1.0, ring4RotationSpeedZ: 1.0,
            ring4RotateX: 180, ring4RotateY: 180, ring4RotateZ: 180,
            ring4PointsNum: 80,
            // ring4Color: '#ffff00', //球の色
            ring4Color: { r: 255, g: 255, b: 0 },
            ring4visible: true,
            //リング５
            ring5Radius: 6.6,
            ring5RotationSpeedX: 0.8, ring5RotationSpeedY: 0.8, ring5RotationSpeedZ: 0.8,
            ring5RotateX: 225, ring5RotateY: 225, ring5RotateZ: 225,
            ring5PointsNum: 80,
            // ring5Color: '#7f00ff', //球の色
            ring5Color: { r: 127, g: 0, b: 255 },
            ring5visible: true,
            //リング６
            ring6Radius: 6.9,
            ring6RotationSpeedX: 0.6, ring6RotationSpeedY: 0.6, ring6RotationSpeedZ: 0.6,
            ring6RotateX: 270, ring6RotateY: 270, ring6RotateZ: 270,
            ring6PointsNum: 80,
            // ring6Color: '#0000ff', //球の色
            ring6Color: { r: 0, g: 0, b: 255 },
            ring6visible: true, //可視
        };
        //球のフォルダを用意
        const sphere = gui.addFolder('Sphere');
        //球
        //  sphere.add(guiObj, "sphereRadius", 0.1, 20.0);
        sphere.add(guiObj, "sphereRotationSpeedX", 0.0, 5.0);
        sphere.add(guiObj, "sphereRotationSpeedY", 0.0, 5.0);
        sphere.add(guiObj, "sphereRotationSpeedZ", 0.0, 5.0);
        //  sphere.add(guiObj, "sphereRotateX", 0, 360); 
        //  sphere.add(guiObj, "sphereRotateY", 0, 360); 
        //  sphere.add(guiObj, "sphereRotateZ", 0, 360); 
        //  sphere.add(guiObj, "spherePointsNum", 0, 100); 
        //  sphere.addColor(guiObj, "sphereColor"); 
        sphere.add(guiObj, "sphereVisible");
        //リング１のフォルダを用意
        const ring1 = gui.addFolder('ring1');
        //リング１
        //  ring1.add(guiObj, "ring1Radius", 0.1, 20.0);
        ring1.add(guiObj, "ring1RotationSpeedX", 0.0, 5.0);
        ring1.add(guiObj, "ring1RotationSpeedY", 0.0, 5.0);
        ring1.add(guiObj, "ring1RotationSpeedZ", 0.0, 5.0);
        //  ring1.add(guiObj, "ring1RotateX", 0, 360); 
        //  ring1.add(guiObj, "ring1RotateY", 0, 360); 
        //  ring1.add(guiObj, "ring1RotateZ", 0, 360); 
        //  ring1.add(guiObj, "ring1PointsNum", 0, 300); 
        //  ring1.addColor(guiObj, "ring1Color"); 
        ring1.add(guiObj, "ring1visible");
        //リング２のフォルダを用意
        const ring2 = gui.addFolder('ring2');
        //リング２
        //  ring2.add(guiObj, "ring2Radius", 0.1, 20.0);
        ring2.add(guiObj, "ring2RotationSpeedX", 0.0, 5.0);
        ring2.add(guiObj, "ring2RotationSpeedY", 0.0, 5.0);
        ring2.add(guiObj, "ring2RotationSpeedZ", 0.0, 5.0);
        //  ring2.add(guiObj, "ring2RotateX", 0, 360); 
        //  ring2.add(guiObj, "ring2RotateY", 0, 360); 
        //  ring2.add(guiObj, "ring2RotateZ", 0, 360); 
        //  ring2.add(guiObj, "ring2PointsNum", 0, 300); 
        //  ring2.addColor(guiObj, "ring2Color"); 
        ring2.add(guiObj, "ring2visible");
        //リング３のフォルダを用意
        const ring3 = gui.addFolder('ring3');
        //リング３
        //  ring3.add(guiObj, "ring3Radius", 0.1, 20.0);
        ring3.add(guiObj, "ring3RotationSpeedX", 0.0, 5.0);
        ring3.add(guiObj, "ring3RotationSpeedY", 0.0, 5.0);
        ring3.add(guiObj, "ring3RotationSpeedZ", 0.0, 5.0);
        //  ring3.add(guiObj, "ring3RotateX", 0, 360); 
        //  ring3.add(guiObj, "ring3RotateY", 0, 360); 
        //  ring3.add(guiObj, "ring3RotateZ", 0, 360); 
        //  ring3.add(guiObj, "ring3PointsNum", 0, 300); 
        //  ring3.addColor(guiObj, "ring3Color"); 
        ring3.add(guiObj, "ring3visible");
        //リング４のフォルダを用意
        const ring4 = gui.addFolder('ring4');
        //リング４
        //  ring4.add(guiObj, "ring4Radius", 0.1, 20.0);
        ring4.add(guiObj, "ring4RotationSpeedX", 0.0, 5.0);
        ring4.add(guiObj, "ring4RotationSpeedY", 0.0, 5.0);
        ring4.add(guiObj, "ring4RotationSpeedZ", 0.0, 5.0);
        //  ring4.add(guiObj, "ring4RotateX", 0, 360); 
        //  ring4.add(guiObj, "ring4RotateY", 0, 360); 
        //  ring4.add(guiObj, "ring4RotateZ", 0, 360); 
        //  ring4.add(guiObj, "ring4PointsNum", 0, 300); 
        //  ring4.addColor(guiObj, "ring4Color"); 
        ring4.add(guiObj, "ring4visible");
        //リング５のフォルダを用意
        const ring5 = gui.addFolder('ring5');
        //リング５
        //  ring5.add(guiObj, "ring5Radius", 0.1, 20.0);
        ring5.add(guiObj, "ring5RotationSpeedX", 0.0, 5.0);
        ring5.add(guiObj, "ring5RotationSpeedY", 0.0, 5.0);
        ring5.add(guiObj, "ring5RotationSpeedZ", 0.0, 5.0);
        //  ring5.add(guiObj, "ring5RotateX", 0, 360); 
        //  ring5.add(guiObj, "ring5RotateY", 0, 360); 
        //  ring5.add(guiObj, "ring5RotateZ", 0, 360); 
        //  ring5.add(guiObj, "ring5PointsNum", 0, 300); 
        //  ring5.addColor(guiObj, "ring5Color"); 
        ring5.add(guiObj, "ring5visible");
        //リング６のフォルダを用意
        const ring6 = gui.addFolder('ring6');
        //リング６
        //  ring6.add(guiObj, "ring6Radius", 0.1, 20.0);
        ring6.add(guiObj, "ring6RotationSpeedX", 0.0, 5.0);
        ring6.add(guiObj, "ring6RotationSpeedY", 0.0, 5.0);
        ring6.add(guiObj, "ring6RotationSpeedZ", 0.0, 5.0);
        //  ring6.add(guiObj, "ring6RotateX", 0, 360); 
        //  ring6.add(guiObj, "ring6RotateY", 0, 360); 
        //  ring6.add(guiObj, "ring6RotateZ", 0, 360); 
        //  ring6.add(guiObj, "ring6PointsNum", 0, 300); 
        //  ring6.addColor(guiObj, "ring6Color"); 
        ring6.add(guiObj, "ring6visible");
        let spherePoints = (geom, color) => {
            const material = new three__WEBPACK_IMPORTED_MODULE_1__.PointsMaterial({ size: 0.7, map: generateSprite(guiObj.sphereColor.r, guiObj.sphereColor.g, guiObj.sphereColor.b), blending: three__WEBPACK_IMPORTED_MODULE_1__.AdditiveBlending, color: 0xffffff, depthWrite: false, transparent: true, opacity: 0.5 });
            return new three__WEBPACK_IMPORTED_MODULE_1__.Points(geom, material);
        };
        let ring1Points = (geom, color) => {
            const material = new three__WEBPACK_IMPORTED_MODULE_1__.PointsMaterial({ size: 0.7, map: generateSprite(guiObj.ring1Color.r, guiObj.ring1Color.g, guiObj.ring1Color.b), blending: three__WEBPACK_IMPORTED_MODULE_1__.AdditiveBlending, color: 0xffffff, depthWrite: false, transparent: true, opacity: 0.5 });
            return new three__WEBPACK_IMPORTED_MODULE_1__.Points(geom, material);
        };
        let ring2Points = (geom, color) => {
            const material = new three__WEBPACK_IMPORTED_MODULE_1__.PointsMaterial({ size: 0.7, map: generateSprite(guiObj.ring2Color.r, guiObj.ring2Color.g, guiObj.ring2Color.b), blending: three__WEBPACK_IMPORTED_MODULE_1__.AdditiveBlending, color: 0xffffff, depthWrite: false, transparent: true, opacity: 0.5 });
            return new three__WEBPACK_IMPORTED_MODULE_1__.Points(geom, material);
        };
        let ring3Points = (geom, color) => {
            const material = new three__WEBPACK_IMPORTED_MODULE_1__.PointsMaterial({ size: 0.7, map: generateSprite(guiObj.ring3Color.r, guiObj.ring3Color.g, guiObj.ring3Color.b), blending: three__WEBPACK_IMPORTED_MODULE_1__.AdditiveBlending, color: 0xffffff, depthWrite: false, transparent: true, opacity: 0.5 });
            return new three__WEBPACK_IMPORTED_MODULE_1__.Points(geom, material);
        };
        let ring4Points = (geom, color) => {
            const material = new three__WEBPACK_IMPORTED_MODULE_1__.PointsMaterial({ size: 0.7, map: generateSprite(guiObj.ring4Color.r, guiObj.ring4Color.g, guiObj.ring4Color.b), blending: three__WEBPACK_IMPORTED_MODULE_1__.AdditiveBlending, color: 0xffffff, depthWrite: false, transparent: true, opacity: 0.5 });
            return new three__WEBPACK_IMPORTED_MODULE_1__.Points(geom, material);
        };
        let ring5Points = (geom, color) => {
            const material = new three__WEBPACK_IMPORTED_MODULE_1__.PointsMaterial({ size: 0.7, map: generateSprite(guiObj.ring5Color.r, guiObj.ring5Color.g, guiObj.ring5Color.b), blending: three__WEBPACK_IMPORTED_MODULE_1__.AdditiveBlending, color: 0xffffff, depthWrite: false, transparent: true, opacity: 0.5 });
            return new three__WEBPACK_IMPORTED_MODULE_1__.Points(geom, material);
        };
        let ring6Points = (geom, color) => {
            // let ring6Radius = guiObj.ring6Radius;
            const material = new three__WEBPACK_IMPORTED_MODULE_1__.PointsMaterial({ size: 0.7, map: generateSprite(guiObj.ring6Color.r, guiObj.ring6Color.g, guiObj.ring6Color.b), blending: three__WEBPACK_IMPORTED_MODULE_1__.AdditiveBlending, color: 0xffffff, depthWrite: false, transparent: true, opacity: 0.5 });
            return new three__WEBPACK_IMPORTED_MODULE_1__.Points(geom, material);
        };
        let generateSprite = (r, g, b) => {
            //新しいキャンバスの作成
            let canvas = document.createElement('canvas');
            canvas.width = 16;
            canvas.height = 16;
            //円形のグラデーションの作成
            let context = canvas.getContext('2d');
            if (context != null) {
                let gradient = context.createRadialGradient(canvas.width / 2, canvas.height / 2, 0, canvas.width / 2, canvas.height / 2, canvas.width / 2);
                gradient.addColorStop(0, 'rgba(255,255,255,1)'); //中心は真っ白
                gradient.addColorStop(0.2, 'rgba(' + r + ',' + g + ',' + b + ')');
                gradient.addColorStop(0.4, 'rgba(' + r / 4 + ',' + g / 4 + ',' + b / 4 + ')');
                gradient.addColorStop(1, 'rgba(0,0,0,1)');
                context.fillStyle = gradient;
                context.fillRect(0, 0, canvas.width, canvas.height);
            }
            //テクスチャの作成
            let texture = new three__WEBPACK_IMPORTED_MODULE_1__.Texture(canvas);
            texture.needsUpdate = true;
            return texture;
        };
        function degToRad(degrees) {
            return degrees * (Math.PI / 180); //円の回転速度
        }
        let mySphere = (u, v, target) => {
            let r = guiObj.sphereRadius;
            // u = u * 2 * Math.PI;//範囲指定 ０以上２π以下
            // v = v * Math.PI * Math.PI/2;//範囲指定　-π/2以上π/2以下
            u = Math.random() * 2 * Math.PI;
            v = Math.random() * 2 * Math.PI - Math.PI / 2;
            let x = r * Math.cos(u) * Math.cos(v);
            let y = r * Math.sin(u) * Math.cos(v);
            let z = r * Math.sin(v);
            target.set(x, y, z);
        };
        // this.cloud = createPoints(new THREE.ParametricGeometry(mySphere, guiObj.spherePointsNum , guiObj.spherePointsNum), new THREE.Color(guiObj.sphereColor));
        this.cloud = spherePoints(new three__WEBPACK_IMPORTED_MODULE_1__.ParametricGeometry(mySphere, guiObj.spherePointsNum, guiObj.spherePointsNum), new three__WEBPACK_IMPORTED_MODULE_1__.Color(guiObj.sphereColor.r, guiObj.sphereColor.g, guiObj.sphereColor.b));
        this.cloud.rotateX(degToRad(guiObj.sphereRotateX));
        this.cloud.rotateY(degToRad(guiObj.sphereRotateY));
        this.cloud.rotateZ(degToRad(guiObj.sphereRotateZ));
        // this.cloudR.color = guiObj.ring1Color
        this.scene.add(this.cloud);
        // this.cloudR = createPoints(new THREE.CircleGeometry(guiObj.ring1Radius , guiObj.ring1PointsNum),new THREE.Color(guiObj.ring1Color));
        this.cloudR = ring1Points(new three__WEBPACK_IMPORTED_MODULE_1__.CircleGeometry(guiObj.ring1Radius, guiObj.ring1PointsNum), new three__WEBPACK_IMPORTED_MODULE_1__.Color(guiObj.ring1Color.r, guiObj.ring1Color.g, guiObj.ring1Color.b));
        this.cloudR.rotateX(degToRad(guiObj.ring1RotateX));
        this.cloudR.rotateY(degToRad(guiObj.ring1RotateY));
        this.cloudR.rotateZ(degToRad(guiObj.ring1RotateZ));
        this.scene.add(this.cloudR);
        // this.cloudW = createPoints(new THREE.CircleGeometry(guiObj.ring2Radius , guiObj.ring2PointsNum), new THREE.Color(guiObj.ring2Color));
        this.cloudW = ring2Points(new three__WEBPACK_IMPORTED_MODULE_1__.CircleGeometry(guiObj.ring2Radius, guiObj.ring2PointsNum), new three__WEBPACK_IMPORTED_MODULE_1__.Color(guiObj.ring2Color.r, guiObj.ring2Color.g, guiObj.ring2Color.b));
        this.cloudW.rotateX(degToRad(guiObj.ring2RotateX));
        this.cloudW.rotateY(degToRad(guiObj.ring2RotateY));
        this.cloudW.rotateZ(degToRad(guiObj.ring2RotateZ));
        this.scene.add(this.cloudW);
        // this.cloudG = createPoints(new THREE.CircleGeometry(guiObj.ring3Radius , guiObj.ring3PointsNum), new THREE.Color(guiObj.ring3Color));
        this.cloudG = ring3Points(new three__WEBPACK_IMPORTED_MODULE_1__.CircleGeometry(guiObj.ring3Radius, guiObj.ring3PointsNum), new three__WEBPACK_IMPORTED_MODULE_1__.Color(guiObj.ring3Color.r, guiObj.ring3Color.g, guiObj.ring3Color.b));
        this.cloudG.rotateX(degToRad(guiObj.ring3RotateX));
        this.cloudG.rotateY(degToRad(guiObj.ring3RotateY));
        this.cloudG.rotateZ(degToRad(guiObj.ring3RotateZ));
        this.scene.add(this.cloudG);
        // this.cloudY = createPoints(new THREE.CircleGeometry(guiObj.ring4Radius , guiObj.ring4PointsNum), new THREE.Color(guiObj.ring4Color));
        this.cloudY = ring4Points(new three__WEBPACK_IMPORTED_MODULE_1__.CircleGeometry(guiObj.ring4Radius, guiObj.ring4PointsNum), new three__WEBPACK_IMPORTED_MODULE_1__.Color(guiObj.ring4Color.r, guiObj.ring4Color.g, guiObj.ring4Color.b));
        this.cloudY.rotateX(degToRad(guiObj.ring4RotateX));
        this.cloudY.rotateY(degToRad(guiObj.ring4RotateY));
        this.cloudY.rotateZ(degToRad(guiObj.ring4RotateZ));
        this.scene.add(this.cloudY);
        // this.cloudV = createPoints(new THREE.CircleGeometry(guiObj.ring5Radius , guiObj.ring5PointsNum), new THREE.Color(guiObj.ring5Color));
        this.cloudV = ring5Points(new three__WEBPACK_IMPORTED_MODULE_1__.CircleGeometry(guiObj.ring5Radius, guiObj.ring5PointsNum), new three__WEBPACK_IMPORTED_MODULE_1__.Color(guiObj.ring5Color.r, guiObj.ring5Color.g, guiObj.ring5Color.b));
        this.cloudV.rotateX(degToRad(guiObj.ring5RotateX));
        this.cloudV.rotateY(degToRad(guiObj.ring5RotateY));
        this.cloudV.rotateZ(degToRad(guiObj.ring5RotateZ));
        this.scene.add(this.cloudV);
        // this.cloudB = createPoints(new THREE.CircleGeometry(guiObj.ring6Radius , guiObj.ring6PointsNum),new THREE.Color(guiObj.ring6Color));
        this.cloudB = ring6Points(new three__WEBPACK_IMPORTED_MODULE_1__.CircleGeometry(guiObj.ring6Radius, guiObj.ring6PointsNum), new three__WEBPACK_IMPORTED_MODULE_1__.Color(guiObj.ring6Color.r, guiObj.ring6Color.g, guiObj.ring6Color.b));
        this.cloudB.rotateX(degToRad(270));
        this.cloudB.rotateY(degToRad(270));
        this.cloudB.rotateZ(degToRad(270));
        this.scene.add(this.cloudB);
        const speed = 60;
        const clock = new three__WEBPACK_IMPORTED_MODULE_1__.Clock();
        //ライトの設定
        this.light = new three__WEBPACK_IMPORTED_MODULE_1__.DirectionalLight(0xffffff);
        const lvec = new three__WEBPACK_IMPORTED_MODULE_1__.Vector3(1, 1, 1).clone().normalize();
        this.light.position.set(lvec.x, lvec.y, lvec.z);
        this.scene.add(this.light);
        // 毎フレームのupdateを呼んで，更新
        // reqestAnimationFrame により次フレームを呼ぶ
        // const clock = new THREE.Clock();
        let update = (time) => {
            let deltaTime = clock.getDelta();
            this.cloud.rotateX(degToRad(deltaTime * speed * guiObj.sphereRotationSpeedX));
            this.cloud.rotateY(degToRad(deltaTime * speed * guiObj.sphereRotationSpeedY));
            this.cloud.rotateZ(degToRad(deltaTime * speed * guiObj.sphereRotationSpeedZ));
            this.cloud.visible = guiObj.sphereVisible;
            this.cloudR.rotateX(degToRad(deltaTime * speed * guiObj.ring1RotationSpeedX));
            this.cloudR.rotateY(degToRad(deltaTime * speed * guiObj.ring1RotationSpeedY));
            this.cloudR.rotateZ(degToRad(deltaTime * speed * guiObj.ring1RotationSpeedZ));
            // this.cloudR.color = guiObj.ring1Color
            this.cloudR.visible = guiObj.ring1visible;
            this.cloudW.rotateX(degToRad(deltaTime * speed * guiObj.ring2RotationSpeedX));
            this.cloudW.rotateY(degToRad(deltaTime * speed * guiObj.ring2RotationSpeedY));
            this.cloudW.rotateZ(degToRad(deltaTime * speed * guiObj.ring2RotationSpeedZ));
            this.cloudW.visible = guiObj.ring2visible;
            this.cloudG.rotateX(degToRad(deltaTime * speed * guiObj.ring3RotationSpeedX));
            this.cloudG.rotateY(degToRad(deltaTime * speed * guiObj.ring3RotationSpeedY));
            this.cloudG.rotateZ(degToRad(deltaTime * speed * guiObj.ring3RotationSpeedZ));
            this.cloudG.visible = guiObj.ring3visible;
            this.cloudY.rotateX(degToRad(deltaTime * speed * guiObj.ring4RotationSpeedX));
            this.cloudY.rotateY(degToRad(deltaTime * speed * guiObj.ring4RotationSpeedY));
            this.cloudY.rotateZ(degToRad(deltaTime * speed * guiObj.ring4RotationSpeedZ));
            this.cloudY.visible = guiObj.ring4visible;
            this.cloudV.rotateX(degToRad(deltaTime * speed * guiObj.ring5RotationSpeedX));
            this.cloudV.rotateY(degToRad(deltaTime * speed * guiObj.ring5RotationSpeedY));
            this.cloudV.rotateZ(degToRad(deltaTime * speed * guiObj.ring5RotationSpeedZ));
            this.cloudV.visible = guiObj.ring5visible;
            this.cloudB.rotateX(degToRad(deltaTime * speed * guiObj.ring6RotationSpeedX));
            this.cloudB.rotateY(degToRad(deltaTime * speed * guiObj.ring6RotationSpeedY));
            this.cloudB.rotateZ(degToRad(deltaTime * speed * guiObj.ring6RotationSpeedZ));
            this.cloudB.visible = guiObj.ring6visible;
            requestAnimationFrame(update);
        };
        requestAnimationFrame(update);
    };
}
window.addEventListener("DOMContentLoaded", init);
function init() {
    let container = new ThreeJSContainer();
    let viewport = container.createRendererDOM(640, 480, new three__WEBPACK_IMPORTED_MODULE_1__.Vector3(10, 10, 10));
    document.body.appendChild(viewport);
}


/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/chunk loaded */
/******/ 	(() => {
/******/ 		var deferred = [];
/******/ 		__webpack_require__.O = (result, chunkIds, fn, priority) => {
/******/ 			if(chunkIds) {
/******/ 				priority = priority || 0;
/******/ 				for(var i = deferred.length; i > 0 && deferred[i - 1][2] > priority; i--) deferred[i] = deferred[i - 1];
/******/ 				deferred[i] = [chunkIds, fn, priority];
/******/ 				return;
/******/ 			}
/******/ 			var notFulfilled = Infinity;
/******/ 			for (var i = 0; i < deferred.length; i++) {
/******/ 				var [chunkIds, fn, priority] = deferred[i];
/******/ 				var fulfilled = true;
/******/ 				for (var j = 0; j < chunkIds.length; j++) {
/******/ 					if ((priority & 1 === 0 || notFulfilled >= priority) && Object.keys(__webpack_require__.O).every((key) => (__webpack_require__.O[key](chunkIds[j])))) {
/******/ 						chunkIds.splice(j--, 1);
/******/ 					} else {
/******/ 						fulfilled = false;
/******/ 						if(priority < notFulfilled) notFulfilled = priority;
/******/ 					}
/******/ 				}
/******/ 				if(fulfilled) {
/******/ 					deferred.splice(i--, 1)
/******/ 					var r = fn();
/******/ 					if (r !== undefined) result = r;
/******/ 				}
/******/ 			}
/******/ 			return result;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		// no baseURI
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"main": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		__webpack_require__.O.j = (chunkId) => (installedChunks[chunkId] === 0);
/******/ 		
/******/ 		// install a JSONP callback for chunk loading
/******/ 		var webpackJsonpCallback = (parentChunkLoadingFunction, data) => {
/******/ 			var [chunkIds, moreModules, runtime] = data;
/******/ 			// add "moreModules" to the modules object,
/******/ 			// then flag all "chunkIds" as loaded and fire callback
/******/ 			var moduleId, chunkId, i = 0;
/******/ 			if(chunkIds.some((id) => (installedChunks[id] !== 0))) {
/******/ 				for(moduleId in moreModules) {
/******/ 					if(__webpack_require__.o(moreModules, moduleId)) {
/******/ 						__webpack_require__.m[moduleId] = moreModules[moduleId];
/******/ 					}
/******/ 				}
/******/ 				if(runtime) var result = runtime(__webpack_require__);
/******/ 			}
/******/ 			if(parentChunkLoadingFunction) parentChunkLoadingFunction(data);
/******/ 			for(;i < chunkIds.length; i++) {
/******/ 				chunkId = chunkIds[i];
/******/ 				if(__webpack_require__.o(installedChunks, chunkId) && installedChunks[chunkId]) {
/******/ 					installedChunks[chunkId][0]();
/******/ 				}
/******/ 				installedChunks[chunkId] = 0;
/******/ 			}
/******/ 			return __webpack_require__.O(result);
/******/ 		}
/******/ 		
/******/ 		var chunkLoadingGlobal = self["webpackChunkcgprendering"] = self["webpackChunkcgprendering"] || [];
/******/ 		chunkLoadingGlobal.forEach(webpackJsonpCallback.bind(null, 0));
/******/ 		chunkLoadingGlobal.push = webpackJsonpCallback.bind(null, chunkLoadingGlobal.push.bind(chunkLoadingGlobal));
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module depends on other loaded chunks and execution need to be delayed
/******/ 	var __webpack_exports__ = __webpack_require__.O(undefined, ["vendors-node_modules_lil-gui_dist_lil-gui_esm_js-node_modules_three_examples_jsm_controls_Orb-53d7a4"], () => (__webpack_require__("./src/app.ts")))
/******/ 	__webpack_exports__ = __webpack_require__.O(__webpack_exports__);
/******/ 	
/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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LEVBQUUsV0FBVyxFQUFFLElBQUksRUFBRSxPQUFPLEVBQUUsR0FBRyxFQUFFLENBQUMsQ0FBQztZQUNwUCxPQUFPLElBQUkseUNBQVksQ0FBQyxJQUFJLEVBQUUsUUFBUSxDQUFDLENBQUM7UUFDNUMsQ0FBQztRQUVELElBQUksV0FBVyxHQUFHLENBQUMsSUFBMEIsRUFBRSxLQUFrQixFQUFFLEVBQUU7WUFDakUsTUFBTSxRQUFRLEdBQUcsSUFBSSxpREFBb0IsQ0FBQyxFQUFFLElBQUksRUFBRSxHQUFHLEVBQUcsR0FBRyxFQUFFLGNBQWMsQ0FBQyxNQUFNLENBQUMsVUFBVSxDQUFDLENBQUMsRUFBRSxNQUFNLENBQUMsVUFBVSxDQUFDLENBQUMsRUFBRSxNQUFNLENBQUMsVUFBVSxDQUFDLENBQUMsQ0FBQyxFQUFFLFFBQVEsRUFBRSxtREFBc0IsRUFBRSxLQUFLLEVBQUMsUUFBUSxFQUFFLFVBQVUsRUFBRSxLQUFLLEVBQUUsV0FBVyxFQUFFLElBQUksRUFBRSxPQUFPLEVBQUUsR0FBRyxFQUFFLENBQUMsQ0FBQztZQUNwUCxPQUFPLElBQUkseUNBQVksQ0FBQyxJQUFJLEVBQUUsUUFBUSxDQUFDLENBQUM7UUFDNUMsQ0FBQztRQUVELElBQUksV0FBVyxHQUFHLENBQUMsSUFBMEIsRUFBRSxLQUFrQixFQUFFLEVBQUU7WUFDakUsTUFBTSxRQUFRLEdBQUcsSUFBSSxpREFBb0IsQ0FBQyxFQUFFLElBQUksRUFBRSxHQUFHLEVBQUcsR0FBRyxFQUFFLGNBQWMsQ0FBQyxNQUFNLENBQUMsVUFBVSxDQUFDLENBQUMsRUFBRSxNQUFNLENBQUMsVUFBVSxDQUFDLENBQUMsRUFBRSxNQUFNLENBQUMsVUFBVSxDQUFDLENBQUMsQ0FBQyxFQUFFLFFBQVEsRUFBRSxtREFBc0IsRUFBRSxLQUFLLEVBQUMsUUFBUSxFQUFFLFVBQVUsRUFBRSxLQUFLLEVBQUUsV0FBVyxFQUFFLElBQUksRUFBRSxPQUFPLEVBQUUsR0FBRyxFQUFFLENBQUMsQ0FBQztZQUNwUCxPQUFPLElBQUkseUNBQVksQ0FBQyxJQUFJLEVBQUUsUUFBUSxDQUFDLENBQUM7UUFDNUMsQ0FBQztRQUVELElBQUksV0FBVyxHQUFHLENBQUMsSUFBMEIsRUFBRSxLQUFrQixFQUFFLEVBQUU7WUFDakUsTUFBTSxRQUFRLEdBQUcsSUFBSSxpREFBb0IsQ0FBQyxFQUFFLElBQUksRUFBRSxHQUFHLEVBQUcsR0FBRyxFQUFFLGNBQWMsQ0FBQyxNQUFNLENBQUMsVUFBVSxDQUFDLENBQUMsRUFBRSxNQUFNLENBQUMsVUFBVSxDQUFDLENBQUMsRUFBRSxNQUFNLENBQUMsVUFBVSxDQUFDLENBQUMsQ0FBQyxFQUFFLFFBQVEsRUFBRSxtREFBc0IsRUFBRSxLQUFLLEVBQUMsUUFBUSxFQUFFLFVBQVUsRUFBRSxLQUFLLEVBQUUsV0FBVyxFQUFFLElBQUksRUFBRSxPQUFPLEVBQUUsR0FBRyxFQUFFLENBQUMsQ0FBQztZQUNwUCxPQUFPLElBQUkseUNBQVksQ0FBQyxJQUFJLEVBQUUsUUFBUSxDQUFDLENBQUM7UUFDNUMsQ0FBQztRQUVELElBQUksV0FBVyxHQUFHLENBQUMsSUFBMEIsRUFBRSxLQUFrQixFQUFFLEVBQUU7WUFDakUsTUFBTSxRQUFRLEdBQUcsSUFBSSxpREFBb0IsQ0FBQyxFQUFFLElBQUksRUFBRSxHQUFHLEVBQUcsR0FBRyxFQUFFLGNBQWMsQ0FBQyxNQUFNLENBQUMsVUFBVSxDQUFDLENBQUMsRUFBRSxNQUFNLENBQUMsVUFBVSxDQUFDLENBQUMsRUFBRSxNQUFNLENBQUMsVUFBVSxDQUFDLENBQUMsQ0FBQyxFQUFFLFFBQVEsRUFBRSxtREFBc0IsRUFBRSxLQUFLLEVBQUMsUUFBUSxFQUFFLFVBQVUsRUFBRSxLQUFLLEVBQUUsV0FBVyxFQUFFLElBQUksRUFBRSxPQUFPLEVBQUUsR0FBRyxFQUFFLENBQUMsQ0FBQztZQUNwUCxPQUFPLElBQUkseUNBQVksQ0FBQyxJQUFJLEVBQUUsUUFBUSxDQUFDLENBQUM7UUFDNUMsQ0FBQztRQUVELElBQUksV0FBVyxHQUFHLENBQUMsSUFBMEIsRUFBRSxLQUFrQixFQUFFLEVBQUU7WUFDakUsd0NB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QUFPLENBQUMsUUFBUSxDQUFDLFNBQVMsR0FBRyxLQUFLLEdBQUcsTUFBTSxDQUFDLG1CQUFtQixDQUFDLENBQUMsQ0FBQztZQUM5RSxJQUFJLENBQUMsTUFBTSxDQUFDLE9BQU8sQ0FBQyxRQUFRLENBQUMsU0FBUyxHQUFHLEtBQUssR0FBRyxNQUFNLENBQUMsbUJBQW1CLENBQUMsQ0FBQyxDQUFDO1lBQzlFLElBQUksQ0FBQyxNQUFNLENBQUMsT0FBTyxHQUFHLE1BQU0sQ0FBQyxZQUFZLENBQUM7WUFFMUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxPQUFPLENBQUMsUUFBUSxDQUFDLFNBQVMsR0FBRyxLQUFLLEdBQUcsTUFBTSxDQUFDLG1CQUFtQixDQUFDLENBQUMsQ0FBQztZQUM5RSxJQUFJLENBQUMsTUFBTSxDQUFDLE9BQU8sQ0FBQyxRQUFRLENBQUMsU0FBUyxHQUFHLEtBQUssR0FBRyxNQUFNLENBQUMsbUJBQW1CLENBQUMsQ0FBQyxDQUFDO1lBQzlFLElBQUksQ0FBQyxNQUFNLENBQUMsT0FBTyxDQUFDLFFBQVEsQ0FBQyxTQUFTLEdBQUcsS0FBSyxHQUFHLE1BQU0sQ0FBQyxtQkFBbUIsQ0FBQyxDQUFDLENBQUM7WUFDOUUsSUFBSSxDQUFDLE1BQU0sQ0FBQyxPQUFPLEdBQUcsTUFBTSxDQUFDLFlBQVksQ0FBQztZQUUxQyxJQUFJLENBQUMsTUFBTSxDQUFDLE9BQU8sQ0FBQyxRQUFRLENBQUMsU0FBUyxHQUFHLEtBQUssR0FBRyxNQUFNLENBQUMsbUJBQW1CLENBQUMsQ0FBQyxDQUFDO1lBQzlFLElBQUksQ0FBQyxNQUFNLENBQUMsT0FBTyxDQUFDLFFBQVEsQ0FBQyxTQUFTLEdBQUcsS0FBSyxHQUFHLE1BQU0sQ0FBQyxtQkFBbUIsQ0FBQyxDQUFDLENBQUM7WUFDOUUsSUFBSSxDQUFDLE1BQU0sQ0FBQyxPQUFPLENBQUMsUUFBUSxDQUFDLFNBQVMsR0FBRyxLQUFLLEdBQUcsTUFBTSxDQUFDLG1CQUFtQixDQUFDLENBQUMsQ0FBQztZQUM5RSxJQUFJLENBQUMsTUFBTSxDQUFDLE9BQU8s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Q0E7VUFDQTtVQUNBO1VBQ0EiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9jZ3ByZW5kZXJpbmcvLi9zcmMvYXBwLnRzIiwid2VicGFjazovL2NncHJlbmRlcmluZy93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9jZ3ByZW5kZXJpbmcvd2VicGFjay9ydW50aW1lL2NodW5rIGxvYWRlZCIsIndlYnBhY2s6Ly9jZ3ByZW5kZXJpbmcvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL2NncHJlbmRlcmluZy93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL2NncHJlbmRlcmluZy93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL2NncHJlbmRlcmluZy93ZWJwYWNrL3J1bnRpbWUvanNvbnAgY2h1bmsgbG9hZGluZyIsIndlYnBhY2s6Ly9jZ3ByZW5kZXJpbmcvd2VicGFjay9iZWZvcmUtc3RhcnR1cCIsIndlYnBhY2s6Ly9jZ3ByZW5kZXJpbmcvd2VicGFjay9zdGFydHVwIiwid2VicGFjazovL2NncHJlbmRlcmluZy93ZWJwYWNrL2FmdGVyLXN0YXJ0dXAiXSwic291cmNlc0NvbnRlbnQiOlsiLy8yM0ZJMDQ1IOWdguacrOWMoFxyXG4vL1NG5L2c5ZOB44KE6a2U5rOV44KS5omx44Gj44Gf5L2c5ZOB44Gn44G/44KJ44KM44KL44CM55CD5L2T44KS5Lit5b+D44Gr44Oq44Oz44Kw44GM5Zue6Lui44GX44Gm44GE44KL44CN44Ki44OL44Oh44O844K344On44OzXHJcblxyXG5cclxuaW1wb3J0ICogYXMgVEhSRUUgZnJvbSBcInRocmVlXCI7XHJcbmltcG9ydCB7IE9yYml0Q29udHJvbHMgfSBmcm9tIFwidGhyZWUvZXhhbXBsZXMvanNtL2NvbnRyb2xzL09yYml0Q29udHJvbHNcIjtcclxuaW1wb3J0ICogYXMgVFdFRU4gZnJvbSBcIkB0d2VlbmpzL3R3ZWVuLmpzXCI7XHJcbmltcG9ydCBHVUkgZnJvbSAnbGlsLWd1aSc7XHJcblxyXG5cclxuXHJcbmNsYXNzIFRocmVlSlNDb250YWluZXIge1xyXG4gICAgcHJpdmF0ZSBzY2VuZTogVEhSRUUuU2NlbmU7XHJcbiAgICBwcml2YXRlIGxpZ2h0OiBUSFJFRS5MaWdodDtcclxuICAgIHByaXZhdGUgY2xvdWQ6IFRIUkVFLlBvaW50c1xyXG4gICAgcHJpdmF0ZSBjbG91ZFI6IFRIUkVFLlBvaW50czsvL+i1pFxyXG4gICAgcHJpdmF0ZSBjbG91ZFc6IFRIUkVFLlBvaW50czsvL+eZvVxyXG4gICAgcHJpdmF0ZSBjbG91ZEc6IFRIUkVFLlBvaW50czsvL+e3kVxyXG4gICAgcHJpdmF0ZSBjbG91ZFk6IFRIUkVFLlBvaW50czsvL+m7hFxyXG4gICAgcHJpdmF0ZSBjbG91ZEI6IFRIUkVFLlBvaW50czsvL+mdklxyXG4gICAgcHJpdmF0ZSBjbG91ZFY6IFRIUkVFLlBvaW50czsvL+e0q1xyXG4gICAgXHJcbiAgICBjb25zdHJ1Y3RvcigpIHtcclxuXHJcbiAgICB9XHJcblxyXG4gICAgLy8g55S76Z2i6YOo5YiG44Gu5L2c5oiQKOihqOekuuOBmeOCi+aeoOOBlOOBqOOBqykqXHJcbiAgICBwdWJsaWMgY3JlYXRlUmVuZGVyZXJET00gPSAod2lkdGg6IG51bWJlciwgaGVpZ2h0OiBudW1iZXIsIGNhbWVyYVBvczogVEhSRUUuVmVjdG9yMykgPT4ge1xyXG4gICAgICAgIGNvbnN0IHJlbmRlcmVyID0gbmV3IFRIUkVFLldlYkdMUmVuZGVyZXIoKTtcclxuICAgICAgICByZW5kZXJlci5zZXRTaXplKHdpZHRoLCBoZWlnaHQpO1xyXG4gICAgICAgIHJlbmRlcmVyLnNldENsZWFyQ29sb3IobmV3IFRIUkVFLkNvbG9yKDB4MDAwMDAwKSk7Ly/og4zmma/jgpLpu5LjgatcclxuICAgICAgICByZW5kZXJlci5zaGFkb3dNYXAuZW5hYmxlZCA9IHRydWU7IC8v44K344Oj44OJ44Km44Oe44OD44OX44KS5pyJ5Yq544Gr44GZ44KLXHJcblxyXG4gICAgICAgIC8v44Kr44Oh44Op44Gu6Kit5a6aXHJcbiAgICAgICAgY29uc3QgY2FtZXJhID0gbmV3IFRIUkVFLlBlcnNwZWN0aXZlQ2FtZXJhKDc1LCB3aWR0aCAvIGhlaWdodCwgMC4xLCAxMDAwKTtcclxuICAgICAgICBjYW1lcmEucG9zaXRpb24uY29weShjYW1lcmFQb3MpO1xyXG4gICAgICAgIGNhbWVyYS5sb29rQXQobmV3IFRIUkVFLlZlY3RvcjMoMCwgMCwgMCkpO1xyXG5cclxuICAgICAgICBjb25zdCBvcmJpdENvbnRyb2xzID0gbmV3IE9yYml0Q29udHJvbHMoY2FtZXJhLCByZW5kZXJlci5kb21FbGVtZW50KTtcclxuXHJcbiAgICAgICAgdGhpcy5jcmVhdGVTY2VuZSgpO1xyXG4gICAgICAgIC8vIOavjuODleODrOODvOODoOOBrnVwZGF0ZeOCkuWRvOOCk+OBp++8jHJlbmRlclxyXG4gICAgICAgIC8vIHJlcWVzdEFuaW1hdGlvbkZyYW1lIOOBq+OCiOOCiuasoeODleODrOODvOODoOOCkuWRvOOBtlxyXG4gICAgICAgIGNvbnN0IHJlbmRlcjogRnJhbWVSZXF1ZXN0Q2FsbGJhY2sgPSAodGltZSkgPT4ge1xyXG4gICAgICAgICAgICBvcmJpdENvbnRyb2xzLnVwZGF0ZSgpO1xyXG5cclxuICAgICAgICAgICAgcmVuZGVyZXIucmVuZGVyKHRoaXMuc2NlbmUsIGNhbWVyYSk7XHJcbiAgICAgICAgICAgIHJlcXVlc3RBbmltYXRpb25GcmFtZShyZW5kZXIpO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXF1ZXN0QW5pbWF0aW9uRnJhbWUocmVuZGVyKTtcclxuXHJcbiAgICAgICAgcmVuZGVyZXIuZG9tRWxlbWVudC5zdHlsZS5jc3NGbG9hdCA9IFwibGVmdFwiO1xyXG4gICAgICAgIHJlbmRlcmVyLmRvbUVsZW1lbnQuc3R5bGUubWFyZ2luID0gXCIxMHB4XCI7XHJcbiAgICAgICAgcmV0dXJuIHJlbmRlcmVyLmRvbUVsZW1lbnQ7XHJcbiAgICB9XHJcblxyXG4gICAgLy8g44K344O844Oz44Gu5L2c5oiQKOWFqOS9k+OBpzHlm54pXHJcbiAgICBwcml2YXRlIGNyZWF0ZVNjZW5lID0gKCkgPT4ge1xyXG4gICAgICAgIHRoaXMuc2NlbmUgPSBuZXcgVEhSRUUuU2NlbmUoKTtcclxuXHJcbiAgICAgICAgIGxldCBndWkgPSBuZXcgR1VJKCk7IC8vIEdVSeeUqOOBruOCpOODs+OCueOCv+ODs+OCueOBrueUn+aIkFxyXG4gICAgICAgIC8vICBsZXQgZ3VpT2JqID0geyByb3RhdGlvblNwZWVkWDogMC4wNX0gLy8gR1VJ44Gu44OR44Op44Oh44O844K/XHJcbiAgICAgICAgLy8gIGd1aS5hZGQoZ3VpT2JqLCBcInJvdGF0aW9uU3BlZWRYXCIsIDAuMCwgMC4yKTsgLy9HVUnjga7oqK3lrppcclxuICAgICAgICAgbGV0IGd1aU9iaiA9IHsgLy/kuK3lv4Pjga7nkINcclxuICAgICAgICAgICAgICAgICAgICAgICAgc3BoZXJlUmFkaXVzOjMsLy/ljYrlvoRcclxuICAgICAgICAgICAgICAgICAgICAgICAgc3BoZXJlUm90YXRpb25TcGVlZFg6IDAuNywgc3BoZXJlUm90YXRpb25TcGVlZFk6IDAuMCwgc3BoZXJlUm90YXRpb25TcGVlZFo6MC4wLCAgLy/lm57ou6Ljgrnjg5Tjg7zjg4lcclxuICAgICAgICAgICAgICAgICAgICAgICAgc3BoZXJlUm90YXRlWDowLCBzcGhlcmVSb3RhdGVZOjAsIHNwaGVyZVJvdGF0ZVo6MCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgc3BoZXJlUG9pbnRzTnVtOiA0MCwvL+eQg+OBqOOBl+OBpuihqOekuuOBmeOCi+eCueOBruaVsFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBzcGhlcmVDb2xvcjogJyM0MDQwNDAnLCAvL+eQg+OBruiJslxyXG4gICAgICAgICAgICAgICAgICAgICAgICBzcGhlcmVDb2xvcjoge3I6NjQsZzo2NCwgYjo2NH0sIC8v55CD44Gu6ImyXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHNwaGVyZVZpc2libGU6dHJ1ZSwvL+WPr+imllxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgLy/jg6rjg7PjgrDvvJFcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmluZzFSYWRpdXM6NS40LC8v5Y2K5b6EXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJpbmcxUm90YXRpb25TcGVlZFg6IDAuNiwgcmluZzFSb3RhdGlvblNwZWVkWTogMC42LCByaW5nMVJvdGF0aW9uU3BlZWRaOjAuNiwgIC8v5Zue6Lui44K544OU44O844OJXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJpbmcxUm90YXRlWDo0NSwgcmluZzFSb3RhdGVZOjQ1LCByaW5nMVJvdGF0ZVo6NDUsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJpbmcxUG9pbnRzTnVtOiA4MCwvL+ODquODs+OCsOOBqOOBl+OBpuihqOekuuOBmeOCi+eCueOBruaVsFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyByaW5nMUNvbG9yOiAnI2ZmMDAwMCcsIC8v55CD44Gu6ImyXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJpbmcxQ29sb3I6IHtyOjI1NSxnOjAsIGI6MH0sIC8v6LWk6ImyXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJpbmcxdmlzaWJsZTp0cnVlLC8v5Y+v6KaWXHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAvL+ODquODs+OCsO+8klxyXG4gICAgICAgICAgICAgICAgICAgICAgICByaW5nMlJhZGl1czo1LjcsLy/ljYrlvoRcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmluZzJSb3RhdGlvblNwZWVkWDogMS4wLCByaW5nMlJvdGF0aW9uU3BlZWRZOiAxLjAsIHJpbmcyUm90YXRpb25TcGVlZFo6IDEuMCwgIC8v5Zue6Lui44K544OU44O844OJXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJpbmcyUm90YXRlWDo5MCwgcmluZzJSb3RhdGVZOjkwLCByaW5nMlJvdGF0ZVo6IDkwLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICByaW5nMlBvaW50c051bTogODAsLy/jg6rjg7PjgrDjgajjgZfjgabooajnpLrjgZnjgovngrnjga7mlbBcclxuICAgICAgICAgICAgICAgICAgICAgICAgLy8gcmluZzJDb2xvcjogJyNmZmZmZmYnLCAvL+eQg+OBruiJslxyXG4gICAgICAgICAgICAgICAgICAgICAgICByaW5nMkNvbG9yOiB7cjoyNTUsZzoyNTUsIGI6MjU1fSwgLy/nmb3oibJcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmluZzJ2aXNpYmxlOnRydWUsLy/lj6/oppZcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8v44Oq44Oz44Kw77yTXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJpbmczUmFkaXVzOjYuMCwvL+WNiuW+hFxyXG4gICAgICAgICAgICAgICAgICAgICAgICByaW5nM1JvdGF0aW9uU3BlZWRYOiAwLjgsIHJpbmczUm90YXRpb25TcGVlZFk6IDAuOCwgcmluZzNSb3RhdGlvblNwZWVkWjogMC44LCAgLy/lm57ou6Ljgrnjg5Tjg7zjg4lcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmluZzNSb3RhdGVYOjEzNSwgcmluZzNSb3RhdGVZOjEzNSwgcmluZzNSb3RhdGVaOiAxMzUsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJpbmczUG9pbnRzTnVtOiA4MCwvL+ODquODs+OCsOOBqOOBl+OBpuihqOekuuOBmeOCi+eCueOBruaVsFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyByaW5nM0NvbG9yOiAnIzAwZmYwMCcsIC8v55CD44Gu6ImyXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJpbmczQ29sb3I6IHtyOjAsZzoyNTUsIGI6MH0sIC8v57eR6ImyXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJpbmczdmlzaWJsZTp0cnVlLC8v5Y+v6KaWXHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAvL+ODquODs+OCsO+8lFxyXG4gICAgICAgICAgICAgICAgICAgICAgICByaW5nNFJhZGl1czo2LjMsLy/ljYrlvoRcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmluZzRSb3RhdGlvblNwZWVkWDogMS4wLCByaW5nNFJvdGF0aW9uU3BlZWRZOiAxLjAsIHJpbmc0Um90YXRpb25TcGVlZFo6IDEuMCwgIC8v5Zue6Lui44K544OU44O844OJXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJpbmc0Um90YXRlWDoxODAsIHJpbmc0Um90YXRlWToxODAsIHJpbmc0Um90YXRlWjogMTgwLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICByaW5nNFBvaW50c051bTogODAsLy/jg6rjg7PjgrDjgajjgZfjgabooajnpLrjgZnjgovngrnjga7mlbBcclxuICAgICAgICAgICAgICAgICAgICAgICAgLy8gcmluZzRDb2xvcjogJyNmZmZmMDAnLCAvL+eQg+OBruiJslxyXG4gICAgICAgICAgICAgICAgICAgICAgICByaW5nNENvbG9yOiB7cjoyNTUsZzoyNTUsIGI6MH0sIC8v6buE6ImyXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJpbmc0dmlzaWJsZTp0cnVlLC8v5Y+v6KaWXHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAvL+ODquODs+OCsO+8lVxyXG4gICAgICAgICAgICAgICAgICAgICAgICByaW5nNVJhZGl1czo2LjYsLy/ljYrlvoRcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmluZzVSb3RhdGlvblNwZWVkWDogMC44LCByaW5nNVJvdGF0aW9uU3BlZWRZOiAwLjgsIHJpbmc1Um90YXRpb25TcGVlZFo6IDAuOCwgIC8v5Zue6Lui44K544OU44O844OJXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJpbmc1Um90YXRlWDoyMjUsIHJpbmc1Um90YXRlWToyMjUsIHJpbmc1Um90YXRlWjogMjI1LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICByaW5nNVBvaW50c051bTogODAsLy/jg6rjg7PjgrDjgajjgZfjgabooajnpLrjgZnjgovngrnjga7mlbBcclxuICAgICAgICAgICAgICAgICAgICAgICAgLy8gcmluZzVDb2xvcjogJyM3ZjAwZmYnLCAvL+eQg+OBruiJslxyXG4gICAgICAgICAgICAgICAgICAgICAgICByaW5nNUNvbG9yOntyOjEyNyxnOjAsIGI6MjU1fSwgLy/ntKvoibJcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmluZzV2aXNpYmxlOnRydWUsLy/lj6/oppZcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8v44Oq44Oz44Kw77yWXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJpbmc2UmFkaXVzOjYuOSwvL+WNiuW+hFxyXG4gICAgICAgICAgICAgICAgICAgICAgICByaW5nNlJvdGF0aW9uU3BlZWRYOiAwLjYsIHJpbmc2Um90YXRpb25TcGVlZFk6IDAuNiwgcmluZzZSb3RhdGlvblNwZWVkWjogMC42LCAgLy/lm57ou6Ljgrnjg5Tjg7zjg4lcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmluZzZSb3RhdGVYOjI3MCwgcmluZzZSb3RhdGVZOjI3MCwgcmluZzZSb3RhdGVaOiAyNzAsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJpbmc2UG9pbnRzTnVtOiA4MCwvL+ODquODs+OCsOOBqOOBl+OBpuihqOekuuOBmeOCi+eCueOBruaVsFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyByaW5nNkNvbG9yOiAnIzAwMDBmZicsIC8v55CD44Gu6ImyXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJpbmc2Q29sb3I6IHtyOjAsZzowLCBiOjI1NX0sIC8v6Z2S6ImyXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJpbmc2dmlzaWJsZTp0cnVlLC8v5Y+v6KaWXHJcbiAgICAgICAgICAgICAgICAgICAgfTtcclxuXHJcblxyXG4gICAgICAgIC8v55CD44Gu44OV44Kp44Or44OA44KS55So5oSPXHJcbiAgICAgICAgY29uc3Qgc3BoZXJlID0gZ3VpLmFkZEZvbGRlcignU3BoZXJlJyk7XHJcbiAgICAgICAgLy/nkINcclxuICAgICAgICAvLyAgc3BoZXJlLmFkZChndWlPYmosIFwic3BoZXJlUmFkaXVzXCIsIDAuMSwgMjAuMCk7XHJcbiAgICAgICAgIHNwaGVyZS5hZGQoZ3VpT2JqLCBcInNwaGVyZVJvdGF0aW9uU3BlZWRYXCIsIDAuMCwgNS4wKTsgXHJcbiAgICAgICAgIHNwaGVyZS5hZGQoZ3VpT2JqLCBcInNwaGVyZVJvdGF0aW9uU3BlZWRZXCIsIDAuMCwgNS4wKTsgXHJcbiAgICAgICAgIHNwaGVyZS5hZGQoZ3VpT2JqLCBcInNwaGVyZVJvdGF0aW9uU3BlZWRaXCIsIDAuMCwgNS4wKTsgXHJcbiAgICAgICAgLy8gIHNwaGVyZS5hZGQoZ3VpT2JqLCBcInNwaGVyZVJvdGF0ZVhcIiwgMCwgMzYwKTsgXHJcbiAgICAgICAgLy8gIHNwaGVyZS5hZGQoZ3VpT2JqLCBcInNwaGVyZVJvdGF0ZVlcIiwgMCwgMzYwKTsgXHJcbiAgICAgICAgLy8gIHNwaGVyZS5hZGQoZ3VpT2JqLCBcInNwaGVyZVJvdGF0ZVpcIiwgMCwgMzYwKTsgXHJcbiAgICAgICAgLy8gIHNwaGVyZS5hZGQoZ3VpT2JqLCBcInNwaGVyZVBvaW50c051bVwiLCAwLCAxMDApOyBcclxuICAgICAgICAvLyAgc3BoZXJlLmFkZENvbG9yKGd1aU9iaiwgXCJzcGhlcmVDb2xvclwiKTsgXHJcbiAgICAgICAgIHNwaGVyZS5hZGQoZ3VpT2JqLCBcInNwaGVyZVZpc2libGVcIik7ICBcclxuXHJcblxyXG4gICAgICAgICAvL+ODquODs+OCsO+8keOBruODleOCqeODq+ODgOOCkueUqOaEj1xyXG4gICAgICAgICBjb25zdCByaW5nMSA9IGd1aS5hZGRGb2xkZXIoJ3JpbmcxJylcclxuICAgICAgICAgLy/jg6rjg7PjgrDvvJFcclxuICAgICAgICAvLyAgcmluZzEuYWRkKGd1aU9iaiwgXCJyaW5nMVJhZGl1c1wiLCAwLjEsIDIwLjApO1xyXG4gICAgICAgICByaW5nMS5hZGQoZ3VpT2JqLCBcInJpbmcxUm90YXRpb25TcGVlZFhcIiwgMC4wLCA1LjApOyBcclxuICAgICAgICAgcmluZzEuYWRkKGd1aU9iaiwgXCJyaW5nMVJvdGF0aW9uU3BlZWRZXCIsIDAuMCwgNS4wKTsgXHJcbiAgICAgICAgIHJpbmcxLmFkZChndWlPYmosIFwicmluZzFSb3RhdGlvblNwZWVkWlwiLCAwLjAsIDUuMCk7IFxyXG4gICAgICAgIC8vICByaW5nMS5hZGQoZ3VpT2JqLCBcInJpbmcxUm90YXRlWFwiLCAwLCAzNjApOyBcclxuICAgICAgICAvLyAgcmluZzEuYWRkKGd1aU9iaiwgXCJyaW5nMVJvdGF0ZVlcIiwgMCwgMzYwKTsgXHJcbiAgICAgICAgLy8gIHJpbmcxLmFkZChndWlPYmosIFwicmluZzFSb3RhdGVaXCIsIDAsIDM2MCk7IFxyXG4gICAgICAgIC8vICByaW5nMS5hZGQoZ3VpT2JqLCBcInJpbmcxUG9pbnRzTnVtXCIsIDAsIDMwMCk7IFxyXG4gICAgICAgIC8vICByaW5nMS5hZGRDb2xvcihndWlPYmosIFwicmluZzFDb2xvclwiKTsgXHJcbiAgICAgICAgIHJpbmcxLmFkZChndWlPYmosIFwicmluZzF2aXNpYmxlXCIpOyBcclxuXHJcblxyXG4gICAgICAgICAvL+ODquODs+OCsO+8kuOBruODleOCqeODq+ODgOOCkueUqOaEj1xyXG4gICAgICAgICBjb25zdCByaW5nMiA9IGd1aS5hZGRGb2xkZXIoJ3JpbmcyJylcclxuICAgICAgICAgLy/jg6rjg7PjgrDvvJJcclxuICAgICAgICAvLyAgcmluZzIuYWRkKGd1aU9iaiwgXCJyaW5nMlJhZGl1c1wiLCAwLjEsIDIwLjApO1xyXG4gICAgICAgICByaW5nMi5hZGQoZ3VpT2JqLCBcInJpbmcyUm90YXRpb25TcGVlZFhcIiwgMC4wLCA1LjApOyBcclxuICAgICAgICAgcmluZzIuYWRkKGd1aU9iaiwgXCJyaW5nMlJvdGF0aW9uU3BlZWRZXCIsIDAuMCwgNS4wKTsgXHJcbiAgICAgICAgIHJpbmcyLmFkZChndWlPYmosIFwicmluZzJSb3RhdGlvblNwZWVkWlwiLCAwLjAsIDUuMCk7IFxyXG4gICAgICAgIC8vICByaW5nMi5hZGQoZ3VpT2JqLCBcInJpbmcyUm90YXRlWFwiLCAwLCAzNjApOyBcclxuICAgICAgICAvLyAgcmluZzIuYWRkKGd1aU9iaiwgXCJyaW5nMlJvdGF0ZVlcIiwgMCwgMzYwKTsgXHJcbiAgICAgICAgLy8gIHJpbmcyLmFkZChndWlPYmosIFwicmluZzJSb3RhdGVaXCIsIDAsIDM2MCk7IFxyXG4gICAgICAgIC8vICByaW5nMi5hZGQoZ3VpT2JqLCBcInJpbmcyUG9pbnRzTnVtXCIsIDAsIDMwMCk7IFxyXG4gICAgICAgIC8vICByaW5nMi5hZGRDb2xvcihndWlPYmosIFwicmluZzJDb2xvclwiKTsgXHJcbiAgICAgICAgIHJpbmcyLmFkZChndWlPYmosIFwicmluZzJ2aXNpYmxlXCIpOyBcclxuXHJcblxyXG4gICAgICAgICAvL+ODquODs+OCsO+8k+OBruODleOCqeODq+ODgOOCkueUqOaEj1xyXG4gICAgICAgICBjb25zdCByaW5nMyA9IGd1aS5hZGRGb2xkZXIoJ3JpbmczJylcclxuICAgICAgICAgLy/jg6rjg7PjgrDvvJNcclxuICAgICAgICAvLyAgcmluZzMuYWRkKGd1aU9iaiwgXCJyaW5nM1JhZGl1c1wiLCAwLjEsIDIwLjApO1xyXG4gICAgICAgICByaW5nMy5hZGQoZ3VpT2JqLCBcInJpbmczUm90YXRpb25TcGVlZFhcIiwgMC4wLCA1LjApOyBcclxuICAgICAgICAgcmluZzMuYWRkKGd1aU9iaiwgXCJyaW5nM1JvdGF0aW9uU3BlZWRZXCIsIDAuMCwgNS4wKTsgXHJcbiAgICAgICAgIHJpbmczLmFkZChndWlPYmosIFwicmluZzNSb3RhdGlvblNwZWVkWlwiLCAwLjAsIDUuMCk7IFxyXG4gICAgICAgIC8vICByaW5nMy5hZGQoZ3VpT2JqLCBcInJpbmczUm90YXRlWFwiLCAwLCAzNjApOyBcclxuICAgICAgICAvLyAgcmluZzMuYWRkKGd1aU9iaiwgXCJyaW5nM1JvdGF0ZVlcIiwgMCwgMzYwKTsgXHJcbiAgICAgICAgLy8gIHJpbmczLmFkZChndWlPYmosIFwicmluZzNSb3RhdGVaXCIsIDAsIDM2MCk7IFxyXG4gICAgICAgIC8vICByaW5nMy5hZGQoZ3VpT2JqLCBcInJpbmczUG9pbnRzTnVtXCIsIDAsIDMwMCk7IFxyXG4gICAgICAgIC8vICByaW5nMy5hZGRDb2xvcihndWlPYmosIFwicmluZzNDb2xvclwiKTsgXHJcbiAgICAgICAgIHJpbmczLmFkZChndWlPYmosIFwicmluZzN2aXNpYmxlXCIpOyBcclxuXHJcblxyXG4gICAgICAgICAvL+ODquODs+OCsO+8lOOBruODleOCqeODq+ODgOOCkueUqOaEj1xyXG4gICAgICAgICBjb25zdCByaW5nNCA9IGd1aS5hZGRGb2xkZXIoJ3Jpbmc0JylcclxuICAgICAgICAgLy/jg6rjg7PjgrDvvJRcclxuICAgICAgICAvLyAgcmluZzQuYWRkKGd1aU9iaiwgXCJyaW5nNFJhZGl1c1wiLCAwLjEsIDIwLjApO1xyXG4gICAgICAgICByaW5nNC5hZGQoZ3VpT2JqLCBcInJpbmc0Um90YXRpb25TcGVlZFhcIiwgMC4wLCA1LjApOyBcclxuICAgICAgICAgcmluZzQuYWRkKGd1aU9iaiwgXCJyaW5nNFJvdGF0aW9uU3BlZWRZXCIsIDAuMCwgNS4wKTsgXHJcbiAgICAgICAgIHJpbmc0LmFkZChndWlPYmosIFwicmluZzRSb3RhdGlvblNwZWVkWlwiLCAwLjAsIDUuMCk7IFxyXG4gICAgICAgIC8vICByaW5nNC5hZGQoZ3VpT2JqLCBcInJpbmc0Um90YXRlWFwiLCAwLCAzNjApOyBcclxuICAgICAgICAvLyAgcmluZzQuYWRkKGd1aU9iaiwgXCJyaW5nNFJvdGF0ZVlcIiwgMCwgMzYwKTsgXHJcbiAgICAgICAgLy8gIHJpbmc0LmFkZChndWlPYmosIFwicmluZzRSb3RhdGVaXCIsIDAsIDM2MCk7IFxyXG4gICAgICAgIC8vICByaW5nNC5hZGQoZ3VpT2JqLCBcInJpbmc0UG9pbnRzTnVtXCIsIDAsIDMwMCk7IFxyXG4gICAgICAgIC8vICByaW5nNC5hZGRDb2xvcihndWlPYmosIFwicmluZzRDb2xvclwiKTsgXHJcbiAgICAgICAgIHJpbmc0LmFkZChndWlPYmosIFwicmluZzR2aXNpYmxlXCIpO1xyXG5cclxuXHJcbiAgICAgICAgIC8v44Oq44Oz44Kw77yV44Gu44OV44Kp44Or44OA44KS55So5oSPXHJcbiAgICAgICAgIGNvbnN0IHJpbmc1ID0gZ3VpLmFkZEZvbGRlcigncmluZzUnKVxyXG4gICAgICAgICAvL+ODquODs+OCsO+8lVxyXG4gICAgICAgIC8vICByaW5nNS5hZGQoZ3VpT2JqLCBcInJpbmc1UmFkaXVzXCIsIDAuMSwgMjAuMCk7XHJcbiAgICAgICAgIHJpbmc1LmFkZChndWlPYmosIFwicmluZzVSb3RhdGlvblNwZWVkWFwiLCAwLjAsIDUuMCk7IFxyXG4gICAgICAgICByaW5nNS5hZGQoZ3VpT2JqLCBcInJpbmc1Um90YXRpb25TcGVlZFlcIiwgMC4wLCA1LjApOyBcclxuICAgICAgICAgcmluZzUuYWRkKGd1aU9iaiwgXCJyaW5nNVJvdGF0aW9uU3BlZWRaXCIsIDAuMCwgNS4wKTsgXHJcbiAgICAgICAgLy8gIHJpbmc1LmFkZChndWlPYmosIFwicmluZzVSb3RhdGVYXCIsIDAsIDM2MCk7IFxyXG4gICAgICAgIC8vICByaW5nNS5hZGQoZ3VpT2JqLCBcInJpbmc1Um90YXRlWVwiLCAwLCAzNjApOyBcclxuICAgICAgICAvLyAgcmluZzUuYWRkKGd1aU9iaiwgXCJyaW5nNVJvdGF0ZVpcIiwgMCwgMzYwKTsgXHJcbiAgICAgICAgLy8gIHJpbmc1LmFkZChndWlPYmosIFwicmluZzVQb2ludHNOdW1cIiwgMCwgMzAwKTsgXHJcbiAgICAgICAgLy8gIHJpbmc1LmFkZENvbG9yKGd1aU9iaiwgXCJyaW5nNUNvbG9yXCIpOyBcclxuICAgICAgICAgcmluZzUuYWRkKGd1aU9iaiwgXCJyaW5nNXZpc2libGVcIik7XHJcbiAgICAgICAgIFxyXG5cclxuICAgICAgICAvL+ODquODs+OCsO+8luOBruODleOCqeODq+ODgOOCkueUqOaEj1xyXG4gICAgICAgICBjb25zdCByaW5nNiA9IGd1aS5hZGRGb2xkZXIoJ3Jpbmc2JylcclxuICAgICAgICAgLy/jg6rjg7PjgrDvvJZcclxuICAgICAgICAvLyAgcmluZzYuYWRkKGd1aU9iaiwgXCJyaW5nNlJhZGl1c1wiLCAwLjEsIDIwLjApO1xyXG4gICAgICAgICByaW5nNi5hZGQoZ3VpT2JqLCBcInJpbmc2Um90YXRpb25TcGVlZFhcIiwgMC4wLCA1LjApOyBcclxuICAgICAgICAgcmluZzYuYWRkKGd1aU9iaiwgXCJyaW5nNlJvdGF0aW9uU3BlZWRZXCIsIDAuMCwgNS4wKTsgXHJcbiAgICAgICAgIHJpbmc2LmFkZChndWlPYmosIFwicmluZzZSb3RhdGlvblNwZWVkWlwiLCAwLjAsIDUuMCk7IFxyXG4gICAgICAgIC8vICByaW5nNi5hZGQoZ3VpT2JqLCBcInJpbmc2Um90YXRlWFwiLCAwLCAzNjApOyBcclxuICAgICAgICAvLyAgcmluZzYuYWRkKGd1aU9iaiwgXCJyaW5nNlJvdGF0ZVlcIiwgMCwgMzYwKTsgXHJcbiAgICAgICAgLy8gIHJpbmc2LmFkZChndWlPYmosIFwicmluZzZSb3RhdGVaXCIsIDAsIDM2MCk7IFxyXG4gICAgICAgIC8vICByaW5nNi5hZGQoZ3VpT2JqLCBcInJpbmc2UG9pbnRzTnVtXCIsIDAsIDMwMCk7IFxyXG4gICAgICAgIC8vICByaW5nNi5hZGRDb2xvcihndWlPYmosIFwicmluZzZDb2xvclwiKTsgXHJcbiAgICAgICAgIHJpbmc2LmFkZChndWlPYmosIFwicmluZzZ2aXNpYmxlXCIpOyAgICAgICAgIFxyXG5cclxuICAgICAgICBsZXQgc3BoZXJlUG9pbnRzID0gKGdlb206IFRIUkVFLkJ1ZmZlckdlb21ldHJ5LCBjb2xvcjogVEhSRUUuQ29sb3IpID0+IHtcclxuICAgICAgICAgICAgY29uc3QgbWF0ZXJpYWwgPSBuZXcgVEhSRUUuUG9pbnRzTWF0ZXJpYWwoeyBzaXplOiAwLjcsICBtYXA6IGdlbmVyYXRlU3ByaXRlKGd1aU9iai5zcGhlcmVDb2xvci5yLCBndWlPYmouc3BoZXJlQ29sb3IuZywgZ3VpT2JqLnNwaGVyZUNvbG9yLmIpLCBibGVuZGluZzogVEhSRUUuQWRkaXRpdmVCbGVuZGluZywgY29sb3I6MHhmZmZmZmYsIGRlcHRoV3JpdGU6IGZhbHNlLCB0cmFuc3BhcmVudDogdHJ1ZSwgb3BhY2l0eTogMC41IH0pO1xyXG4gICAgICAgICAgICByZXR1cm4gbmV3IFRIUkVFLlBvaW50cyhnZW9tLCBtYXRlcmlhbCk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBsZXQgcmluZzFQb2ludHMgPSAoZ2VvbTogVEhSRUUuQnVmZmVyR2VvbWV0cnksIGNvbG9yOiBUSFJFRS5Db2xvcikgPT4ge1xyXG4gICAgICAgICAgICBjb25zdCBtYXRlcmlhbCA9IG5ldyBUSFJFRS5Qb2ludHNNYXRlcmlhbCh7IHNpemU6IDAuNywgIG1hcDogZ2VuZXJhdGVTcHJpdGUoZ3VpT2JqLnJpbmcxQ29sb3IuciwgZ3VpT2JqLnJpbmcxQ29sb3IuZywgZ3VpT2JqLnJpbmcxQ29sb3IuYiksIGJsZW5kaW5nOiBUSFJFRS5BZGRpdGl2ZUJsZW5kaW5nLCBjb2xvcjoweGZmZmZmZiwgZGVwdGhXcml0ZTogZmFsc2UsIHRyYW5zcGFyZW50OiB0cnVlLCBvcGFjaXR5OiAwLjUgfSk7XHJcbiAgICAgICAgICAgIHJldHVybiBuZXcgVEhSRUUuUG9pbnRzKGdlb20sIG1hdGVyaWFsKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGxldCByaW5nMlBvaW50cyA9IChnZW9tOiBUSFJFRS5CdWZmZXJHZW9tZXRyeSwgY29sb3I6IFRIUkVFLkNvbG9yKSA9PiB7XHJcbiAgICAgICAgICAgIGNvbnN0IG1hdGVyaWFsID0gbmV3IFRIUkVFLlBvaW50c01hdGVyaWFsKHsgc2l6ZTogMC43LCAgbWFwOiBnZW5lcmF0ZVNwcml0ZShndWlPYmoucmluZzJDb2xvci5yLCBndWlPYmoucmluZzJDb2xvci5nLCBndWlPYmoucmluZzJDb2xvci5iKSwgYmxlbmRpbmc6IFRIUkVFLkFkZGl0aXZlQmxlbmRpbmcsIGNvbG9yOjB4ZmZmZmZmLCBkZXB0aFdyaXRlOiBmYWxzZSwgdHJhbnNwYXJlbnQ6IHRydWUsIG9wYWNpdHk6IDAuNSB9KTtcclxuICAgICAgICAgICAgcmV0dXJuIG5ldyBUSFJFRS5Qb2ludHMoZ2VvbSwgbWF0ZXJpYWwpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgbGV0IHJpbmczUG9pbnRzID0gKGdlb206IFRIUkVFLkJ1ZmZlckdlb21ldHJ5LCBjb2xvcjogVEhSRUUuQ29sb3IpID0+IHtcclxuICAgICAgICAgICAgY29uc3QgbWF0ZXJpYWwgPSBuZXcgVEhSRUUuUG9pbnRzTWF0ZXJpYWwoeyBzaXplOiAwLjcsICBtYXA6IGdlbmVyYXRlU3ByaXRlKGd1aU9iai5yaW5nM0NvbG9yLnIsIGd1aU9iai5yaW5nM0NvbG9yLmcsIGd1aU9iai5yaW5nM0NvbG9yLmIpLCBibGVuZGluZzogVEhSRUUuQWRkaXRpdmVCbGVuZGluZywgY29sb3I6MHhmZmZmZmYsIGRlcHRoV3JpdGU6IGZhbHNlLCB0cmFuc3BhcmVudDogdHJ1ZSwgb3BhY2l0eTogMC41IH0pO1xyXG4gICAgICAgICAgICByZXR1cm4gbmV3IFRIUkVFLlBvaW50cyhnZW9tLCBtYXRlcmlhbCk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBsZXQgcmluZzRQb2ludHMgPSAoZ2VvbTogVEhSRUUuQnVmZmVyR2VvbWV0cnksIGNvbG9yOiBUSFJFRS5Db2xvcikgPT4ge1xyXG4gICAgICAgICAgICBjb25zdCBtYXRlcmlhbCA9IG5ldyBUSFJFRS5Qb2ludHNNYXRlcmlhbCh7IHNpemU6IDAuNywgIG1hcDogZ2VuZXJhdGVTcHJpdGUoZ3VpT2JqLnJpbmc0Q29sb3IuciwgZ3VpT2JqLnJpbmc0Q29sb3IuZywgZ3VpT2JqLnJpbmc0Q29sb3IuYiksIGJsZW5kaW5nOiBUSFJFRS5BZGRpdGl2ZUJsZW5kaW5nLCBjb2xvcjoweGZmZmZmZiwgZGVwdGhXcml0ZTogZmFsc2UsIHRyYW5zcGFyZW50OiB0cnVlLCBvcGFjaXR5OiAwLjUgfSk7XHJcbiAgICAgICAgICAgIHJldHVybiBuZXcgVEhSRUUuUG9pbnRzKGdlb20sIG1hdGVyaWFsKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGxldCByaW5nNVBvaW50cyA9IChnZW9tOiBUSFJFRS5CdWZmZXJHZW9tZXRyeSwgY29sb3I6IFRIUkVFLkNvbG9yKSA9PiB7XHJcbiAgICAgICAgICAgIGNvbnN0IG1hdGVyaWFsID0gbmV3IFRIUkVFLlBvaW50c01hdGVyaWFsKHsgc2l6ZTogMC43LCAgbWFwOiBnZW5lcmF0ZVNwcml0ZShndWlPYmoucmluZzVDb2xvci5yLCBndWlPYmoucmluZzVDb2xvci5nLCBndWlPYmoucmluZzVDb2xvci5iKSwgYmxlbmRpbmc6IFRIUkVFLkFkZGl0aXZlQmxlbmRpbmcsIGNvbG9yOjB4ZmZmZmZmLCBkZXB0aFdyaXRlOiBmYWxzZSwgdHJhbnNwYXJlbnQ6IHRydWUsIG9wYWNpdHk6IDAuNSB9KTtcclxuICAgICAgICAgICAgcmV0dXJuIG5ldyBUSFJFRS5Qb2ludHMoZ2VvbSwgbWF0ZXJpYWwpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgbGV0IHJpbmc2UG9pbnRzID0gKGdlb206IFRIUkVFLkJ1ZmZlckdlb21ldHJ5LCBjb2xvcjogVEhSRUUuQ29sb3IpID0+IHtcclxuICAgICAgICAgICAgLy8gbGV0IHJpbmc2UmFkaXVzID0gZ3VpT2JqLnJpbmc2UmFkaXVzO1xyXG4gICAgICAgICAgICBjb25zdCBtYXRlcmlhbCA9IG5ldyBUSFJFRS5Qb2ludHNNYXRlcmlhbCh7IHNpemU6IDAuNywgIG1hcDogZ2VuZXJhdGVTcHJpdGUoZ3VpT2JqLnJpbmc2Q29sb3IuciwgZ3VpT2JqLnJpbmc2Q29sb3IuZywgZ3VpT2JqLnJpbmc2Q29sb3IuYiksIGJsZW5kaW5nOiBUSFJFRS5BZGRpdGl2ZUJsZW5kaW5nLCBjb2xvcjoweGZmZmZmZiwgZGVwdGhXcml0ZTogZmFsc2UsIHRyYW5zcGFyZW50OiB0cnVlLCBvcGFjaXR5OiAwLjUgfSk7XHJcbiAgICAgICAgICAgIHJldHVybiBuZXcgVEhSRUUuUG9pbnRzKGdlb20sIG1hdGVyaWFsKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgXHJcblxyXG4gICAgICAgIGxldCBnZW5lcmF0ZVNwcml0ZSA9IChyOm51bWJlciwgZzpudW1iZXIsIGI6bnVtYmVyKSA9PntcclxuICAgICAgICAgICAgLy/mlrDjgZfjgYTjgq3jg6Pjg7Pjg5Djgrnjga7kvZzmiJBcclxuICAgICAgICAgICAgbGV0IGNhbnZhcyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2NhbnZhcycpO1xyXG4gICAgICAgICAgICBjYW52YXMud2lkdGggPSAxNjtcclxuICAgICAgICAgICAgY2FudmFzLmhlaWdodCA9IDE2O1xyXG5cclxuICAgICAgICAgICAgLy/lhoblvaLjga7jgrDjg6njg4fjg7zjgrfjg6fjg7Pjga7kvZzmiJBcclxuICAgICAgICAgICAgbGV0IGNvbnRleHQgPSBjYW52YXMuZ2V0Q29udGV4dCgnMmQnKTtcclxuICAgICAgICAgICAgaWYoY29udGV4dCAhPSBudWxsKXtcclxuICAgICAgICAgICAgICAgIGxldCBncmFkaWVudCA9IGNvbnRleHQuY3JlYXRlUmFkaWFsR3JhZGllbnQoY2FudmFzLndpZHRoIC8gMiwgY2FudmFzLmhlaWdodCAvIDIsIDAsIGNhbnZhcy53aWR0aCAvIDIsIGNhbnZhcy5oZWlnaHQgLyAyLCBjYW52YXMud2lkdGggLyAyKTtcclxuICAgICAgICAgICAgICAgIGdyYWRpZW50LmFkZENvbG9yU3RvcCgwLCAncmdiYSgyNTUsMjU1LDI1NSwxKScpOy8v5Lit5b+D44Gv55yf44Gj55m9XHJcbiAgICAgICAgICAgICAgICBncmFkaWVudC5hZGRDb2xvclN0b3AoMC4yLCAncmdiYSgnICsgciArICcsJyArIGcgKyAnLCcgKyBiICsnKScpO1xyXG4gICAgICAgICAgICAgICAgZ3JhZGllbnQuYWRkQ29sb3JTdG9wKDAuNCwgJ3JnYmEoJyArIHIvNCArICcsJyArIGcvNCArJywnICsgYi80ICsnKScpO1xyXG4gICAgICAgICAgICAgICAgZ3JhZGllbnQuYWRkQ29sb3JTdG9wKDEsICdyZ2JhKDAsMCwwLDEpJyk7XHJcbiAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgIGNvbnRleHQuZmlsbFN0eWxlID0gZ3JhZGllbnQ7XHJcbiAgICAgICAgICAgICAgICBjb250ZXh0LmZpbGxSZWN0KDAsIDAsIGNhbnZhcy53aWR0aCwgY2FudmFzLmhlaWdodCk7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIC8v44OG44Kv44K544OB44Oj44Gu5L2c5oiQXHJcbiAgICAgICAgICAgIGxldCB0ZXh0dXJlID0gbmV3IFRIUkVFLlRleHR1cmUoY2FudmFzKTtcclxuICAgICAgICAgICAgdGV4dHVyZS5uZWVkc1VwZGF0ZSA9IHRydWU7XHJcbiAgICAgICAgICAgIHJldHVybiB0ZXh0dXJlO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgZnVuY3Rpb24gZGVnVG9SYWQoZGVncmVlczogbnVtYmVyKTogbnVtYmVyIHtcclxuICAgICAgICAgICAgcmV0dXJuIGRlZ3JlZXMgKiAoTWF0aC5QSSAvIDE4MCk7Ly/lhobjga7lm57ou6LpgJ/luqZcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGxldCBteVNwaGVyZSA9ICh1Om51bWJlciwgdjpudW1iZXIsIHRhcmdldDpUSFJFRS5WZWN0b3IzKSA9PnsvL+eQg1xyXG4gICAgICAgICAgICBsZXQgciA9IGd1aU9iai5zcGhlcmVSYWRpdXM7XHJcbiAgICAgICAgICAgIC8vIHUgPSB1ICogMiAqIE1hdGguUEk7Ly/nr4Tlm7LmjIflrpog77yQ5Lul5LiK77ySz4Dku6XkuItcclxuICAgICAgICAgICAgLy8gdiA9IHYgKiBNYXRoLlBJICogTWF0aC5QSS8yOy8v56+E5Zuy5oyH5a6a44CALc+ALzLku6XkuIrPgC8y5Lul5LiLXHJcbiAgICAgICAgICAgIHUgPSBNYXRoLnJhbmRvbSgpICogMiAqIE1hdGguUEk7XHJcbiAgICAgICAgICAgIHYgPSBNYXRoLnJhbmRvbSgpICogMiAqIE1hdGguUEkgLSBNYXRoLlBJIC8gMjtcclxuICAgICAgICAgICAgbGV0IHggPSByICogTWF0aC5jb3ModSkgKiBNYXRoLmNvcyh2KTtcclxuICAgICAgICAgICAgbGV0IHkgPSByICogTWF0aC5zaW4odSkgKiBNYXRoLmNvcyh2KTtcclxuICAgICAgICAgICAgbGV0IHogPSByICogTWF0aC5zaW4odik7XHJcbiAgICAgICAgICAgIHRhcmdldC5zZXQoeCwgeSwgeik7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAvLyB0aGlzLmNsb3VkID0gY3JlYXRlUG9pbnRzKG5ldyBUSFJFRS5QYXJhbWV0cmljR2VvbWV0cnkobXlTcGhlcmUsIGd1aU9iai5zcGhlcmVQb2ludHNOdW0gLCBndWlPYmouc3BoZXJlUG9pbnRzTnVtKSwgbmV3IFRIUkVFLkNvbG9yKGd1aU9iai5zcGhlcmVDb2xvcikpO1xyXG4gICAgICAgIHRoaXMuY2xvdWQgPSBzcGhlcmVQb2ludHMobmV3IFRIUkVFLlBhcmFtZXRyaWNHZW9tZXRyeShteVNwaGVyZSwgZ3VpT2JqLnNwaGVyZVBvaW50c051bSAsIGd1aU9iai5zcGhlcmVQb2ludHNOdW0pLCBuZXcgVEhSRUUuQ29sb3IoZ3VpT2JqLnNwaGVyZUNvbG9yLnIsZ3VpT2JqLnNwaGVyZUNvbG9yLmcsZ3VpT2JqLnNwaGVyZUNvbG9yLmIpKTtcclxuICAgICAgICB0aGlzLmNsb3VkLnJvdGF0ZVgoZGVnVG9SYWQoZ3VpT2JqLnNwaGVyZVJvdGF0ZVgpKTtcclxuICAgICAgICB0aGlzLmNsb3VkLnJvdGF0ZVkoZGVnVG9SYWQoZ3VpT2JqLnNwaGVyZVJvdGF0ZVkpKTtcclxuICAgICAgICB0aGlzLmNsb3VkLnJvdGF0ZVooZGVnVG9SYWQoZ3VpT2JqLnNwaGVyZVJvdGF0ZVopKTtcclxuICAgICAgICAvLyB0aGlzLmNsb3VkUi5jb2xvciA9IGd1aU9iai5yaW5nMUNvbG9yXHJcbiAgICAgICAgdGhpcy5zY2VuZS5hZGQodGhpcy5jbG91ZCk7XHJcblxyXG4gICAgICAgIC8vIHRoaXMuY2xvdWRSID0gY3JlYXRlUG9pbnRzKG5ldyBUSFJFRS5DaXJjbGVHZW9tZXRyeShndWlPYmoucmluZzFSYWRpdXMgLCBndWlPYmoucmluZzFQb2ludHNOdW0pLG5ldyBUSFJFRS5Db2xvcihndWlPYmoucmluZzFDb2xvcikpO1xyXG4gICAgICAgIHRoaXMuY2xvdWRSID0gcmluZzFQb2ludHMobmV3IFRIUkVFLkNpcmNsZUdlb21ldHJ5KGd1aU9iai5yaW5nMVJhZGl1cyAsIGd1aU9iai5yaW5nMVBvaW50c051bSksIG5ldyBUSFJFRS5Db2xvcihndWlPYmoucmluZzFDb2xvci5yLGd1aU9iai5yaW5nMUNvbG9yLmcsZ3VpT2JqLnJpbmcxQ29sb3IuYikpO1xyXG4gICAgICAgIHRoaXMuY2xvdWRSLnJvdGF0ZVgoZGVnVG9SYWQoZ3VpT2JqLnJpbmcxUm90YXRlWCkpO1xyXG4gICAgICAgIHRoaXMuY2xvdWRSLnJvdGF0ZVkoZGVnVG9SYWQoZ3VpT2JqLnJpbmcxUm90YXRlWSkpOyAgICAgICAgXHJcbiAgICAgICAgdGhpcy5jbG91ZFIucm90YXRlWihkZWdUb1JhZChndWlPYmoucmluZzFSb3RhdGVaKSk7XHJcbiAgICAgICAgdGhpcy5zY2VuZS5hZGQodGhpcy5jbG91ZFIpO1xyXG5cclxuICAgICAgICAvLyB0aGlzLmNsb3VkVyA9IGNyZWF0ZVBvaW50cyhuZXcgVEhSRUUuQ2lyY2xlR2VvbWV0cnkoZ3VpT2JqLnJpbmcyUmFkaXVzICwgZ3VpT2JqLnJpbmcyUG9pbnRzTnVtKSwgbmV3IFRIUkVFLkNvbG9yKGd1aU9iai5yaW5nMkNvbG9yKSk7XHJcbiAgICAgICAgdGhpcy5jbG91ZFcgPSByaW5nMlBvaW50cyhuZXcgVEhSRUUuQ2lyY2xlR2VvbWV0cnkoZ3VpT2JqLnJpbmcyUmFkaXVzICwgZ3VpT2JqLnJpbmcyUG9pbnRzTnVtKSwgbmV3IFRIUkVFLkNvbG9yKGd1aU9iai5yaW5nMkNvbG9yLnIsZ3VpT2JqLnJpbmcyQ29sb3IuZyxndWlPYmoucmluZzJDb2xvci5iKSk7XHJcbiAgICAgICAgdGhpcy5jbG91ZFcucm90YXRlWChkZWdUb1JhZChndWlPYmoucmluZzJSb3RhdGVYKSk7XHJcbiAgICAgICAgdGhpcy5jbG91ZFcucm90YXRlWShkZWdUb1JhZChndWlPYmoucmluZzJSb3RhdGVZKSk7ICAgICAgICBcclxuICAgICAgICB0aGlzLmNsb3VkVy5yb3RhdGVaKGRlZ1RvUmFkKGd1aU9iai5yaW5nMlJvdGF0ZVopKTtcclxuICAgICAgICB0aGlzLnNjZW5lLmFkZCh0aGlzLmNsb3VkVyk7XHJcblxyXG4gICAgICAgIC8vIHRoaXMuY2xvdWRHID0gY3JlYXRlUG9pbnRzKG5ldyBUSFJFRS5DaXJjbGVHZW9tZXRyeShndWlPYmoucmluZzNSYWRpdXMgLCBndWlPYmoucmluZzNQb2ludHNOdW0pLCBuZXcgVEhSRUUuQ29sb3IoZ3VpT2JqLnJpbmczQ29sb3IpKTtcclxuICAgICAgICB0aGlzLmNsb3VkRyA9IHJpbmczUG9pbnRzKG5ldyBUSFJFRS5DaXJjbGVHZW9tZXRyeShndWlPYmoucmluZzNSYWRpdXMgLCBndWlPYmoucmluZzNQb2ludHNOdW0pLCBuZXcgVEhSRUUuQ29sb3IoZ3VpT2JqLnJpbmczQ29sb3IucixndWlPYmoucmluZzNDb2xvci5nLGd1aU9iai5yaW5nM0NvbG9yLmIpKTtcclxuICAgICAgICB0aGlzLmNsb3VkRy5yb3RhdGVYKGRlZ1RvUmFkKGd1aU9iai5yaW5nM1JvdGF0ZVgpKTtcclxuICAgICAgICB0aGlzLmNsb3VkRy5yb3RhdGVZKGRlZ1RvUmFkKGd1aU9iai5yaW5nM1JvdGF0ZVkpKTtcclxuICAgICAgICB0aGlzLmNsb3VkRy5yb3RhdGVaKGRlZ1RvUmFkKGd1aU9iai5yaW5nM1JvdGF0ZVopKTtcclxuICAgICAgICB0aGlzLnNjZW5lLmFkZCh0aGlzLmNsb3VkRyk7XHJcblxyXG4gICAgICAgIC8vIHRoaXMuY2xvdWRZID0gY3JlYXRlUG9pbnRzKG5ldyBUSFJFRS5DaXJjbGVHZW9tZXRyeShndWlPYmoucmluZzRSYWRpdXMgLCBndWlPYmoucmluZzRQb2ludHNOdW0pLCBuZXcgVEhSRUUuQ29sb3IoZ3VpT2JqLnJpbmc0Q29sb3IpKTtcclxuICAgICAgICB0aGlzLmNsb3VkWSA9IHJpbmc0UG9pbnRzKG5ldyBUSFJFRS5DaXJjbGVHZW9tZXRyeShndWlPYmoucmluZzRSYWRpdXMgLCBndWlPYmoucmluZzRQb2ludHNOdW0pLCBuZXcgVEhSRUUuQ29sb3IoZ3VpT2JqLnJpbmc0Q29sb3IucixndWlPYmoucmluZzRDb2xvci5nLGd1aU9iai5yaW5nNENvbG9yLmIpKTtcclxuICAgICAgICB0aGlzLmNsb3VkWS5yb3RhdGVYKGRlZ1RvUmFkKGd1aU9iai5yaW5nNFJvdGF0ZVgpKTtcclxuICAgICAgICB0aGlzLmNsb3VkWS5yb3RhdGVZKGRlZ1RvUmFkKGd1aU9iai5yaW5nNFJvdGF0ZVkpKTtcclxuICAgICAgICB0aGlzLmNsb3VkWS5yb3RhdGVaKGRlZ1RvUmFkKGd1aU9iai5yaW5nNFJvdGF0ZVopKTtcclxuICAgICAgICB0aGlzLnNjZW5lLmFkZCh0aGlzLmNsb3VkWSk7XHJcblxyXG4gICAgICAgIC8vIHRoaXMuY2xvdWRWID0gY3JlYXRlUG9pbnRzKG5ldyBUSFJFRS5DaXJjbGVHZW9tZXRyeShndWlPYmoucmluZzVSYWRpdXMgLCBndWlPYmoucmluZzVQb2ludHNOdW0pLCBuZXcgVEhSRUUuQ29sb3IoZ3VpT2JqLnJpbmc1Q29sb3IpKTtcclxuICAgICAgICB0aGlzLmNsb3VkViA9IHJpbmc1UG9pbnRzKG5ldyBUSFJFRS5DaXJjbGVHZW9tZXRyeShndWlPYmoucmluZzVSYWRpdXMgLCBndWlPYmoucmluZzVQb2ludHNOdW0pLCBuZXcgVEhSRUUuQ29sb3IoZ3VpT2JqLnJpbmc1Q29sb3IucixndWlPYmoucmluZzVDb2xvci5nLCBndWlPYmoucmluZzVDb2xvci5iKSk7XHJcbiAgICAgICAgdGhpcy5jbG91ZFYucm90YXRlWChkZWdUb1JhZChndWlPYmoucmluZzVSb3RhdGVYKSk7XHJcbiAgICAgICAgdGhpcy5jbG91ZFYucm90YXRlWShkZWdUb1JhZChndWlPYmoucmluZzVSb3RhdGVZKSk7XHJcbiAgICAgICAgdGhpcy5jbG91ZFYucm90YXRlWihkZWdUb1JhZChndWlPYmoucmluZzVSb3RhdGVaKSk7XHJcbiAgICAgICAgdGhpcy5zY2VuZS5hZGQodGhpcy5jbG91ZFYpO1xyXG5cclxuICAgICAgICAvLyB0aGlzLmNsb3VkQiA9IGNyZWF0ZVBvaW50cyhuZXcgVEhSRUUuQ2lyY2xlR2VvbWV0cnkoZ3VpT2JqLnJpbmc2UmFkaXVzICwgZ3VpT2JqLnJpbmc2UG9pbnRzTnVtKSxuZXcgVEhSRUUuQ29sb3IoZ3VpT2JqLnJpbmc2Q29sb3IpKTtcclxuICAgICAgICB0aGlzLmNsb3VkQiA9IHJpbmc2UG9pbnRzKG5ldyBUSFJFRS5DaXJjbGVHZW9tZXRyeShndWlPYmoucmluZzZSYWRpdXMgLCBndWlPYmoucmluZzZQb2ludHNOdW0pLG5ldyBUSFJFRS5Db2xvcihndWlPYmoucmluZzZDb2xvci5yLGd1aU9iai5yaW5nNkNvbG9yLmcsIGd1aU9iai5yaW5nNkNvbG9yLmIpKTtcclxuICAgICAgICB0aGlzLmNsb3VkQi5yb3RhdGVYKGRlZ1RvUmFkKDI3MCkpO1xyXG4gICAgICAgIHRoaXMuY2xvdWRCLnJvdGF0ZVkoZGVnVG9SYWQoMjcwKSk7XHJcbiAgICAgICAgdGhpcy5jbG91ZEIucm90YXRlWihkZWdUb1JhZCgyNzApKTtcclxuICAgICAgICB0aGlzLnNjZW5lLmFkZCh0aGlzLmNsb3VkQik7XHJcblxyXG4gICAgICAgIGNvbnN0IHNwZWVkID0gNjA7XHJcbiAgICAgICAgY29uc3QgY2xvY2sgPSBuZXcgVEhSRUUuQ2xvY2soKTtcclxuICAgICAgICBcclxuICAgICAgICAvL+ODqeOCpOODiOOBruioreWumlxyXG4gICAgICAgIHRoaXMubGlnaHQgPSBuZXcgVEhSRUUuRGlyZWN0aW9uYWxMaWdodCgweGZmZmZmZik7XHJcbiAgICAgICAgY29uc3QgbHZlYyA9IG5ldyBUSFJFRS5WZWN0b3IzKDEsIDEsIDEpLm5vcm1hbGl6ZSgpO1xyXG4gICAgICAgIHRoaXMubGlnaHQucG9zaXRpb24uc2V0KGx2ZWMueCwgbHZlYy55LCBsdmVjLnopO1xyXG4gICAgICAgIHRoaXMuc2NlbmUuYWRkKHRoaXMubGlnaHQpO1xyXG5cclxuICAgICAgICBcclxuICAgICAgICAvLyDmr47jg5Xjg6zjg7zjg6Djga51cGRhdGXjgpLlkbzjgpPjgafvvIzmm7TmlrBcclxuICAgICAgICAvLyByZXFlc3RBbmltYXRpb25GcmFtZSDjgavjgojjgormrKHjg5Xjg6zjg7zjg6DjgpLlkbzjgbZcclxuICAgICAgICAvLyBjb25zdCBjbG9jayA9IG5ldyBUSFJFRS5DbG9jaygpO1xyXG4gICAgICAgIGxldCB1cGRhdGU6IEZyYW1lUmVxdWVzdENhbGxiYWNrID0gKHRpbWUpID0+IHtcclxuICAgICAgICAgICAgbGV0IGRlbHRhVGltZSA9IGNsb2NrLmdldERlbHRhKCk7XHJcblxyXG4gICAgICAgICAgICB0aGlzLmNsb3VkLnJvdGF0ZVgoZGVnVG9SYWQoZGVsdGFUaW1lICogc3BlZWQgKiBndWlPYmouc3BoZXJlUm90YXRpb25TcGVlZFgpKTtcclxuICAgICAgICAgICAgdGhpcy5jbG91ZC5yb3RhdGVZKGRlZ1RvUmFkKGRlbHRhVGltZSAqIHNwZWVkICogZ3VpT2JqLnNwaGVyZVJvdGF0aW9uU3BlZWRZKSk7XHJcbiAgICAgICAgICAgIHRoaXMuY2xvdWQucm90YXRlWihkZWdUb1JhZChkZWx0YVRpbWUgKiBzcGVlZCAqIGd1aU9iai5zcGhlcmVSb3RhdGlvblNwZWVkWikpO1xyXG4gICAgICAgICAgICB0aGlzLmNsb3VkLnZpc2libGUgPSBndWlPYmouc3BoZXJlVmlzaWJsZTtcclxuXHJcbiAgICAgICAgICAgIHRoaXMuY2xvdWRSLnJvdGF0ZVgoZGVnVG9SYWQoZGVsdGFUaW1lICogc3BlZWQgKiBndWlPYmoucmluZzFSb3RhdGlvblNwZWVkWCkpO1xyXG4gICAgICAgICAgICB0aGlzLmNsb3VkUi5yb3RhdGVZKGRlZ1RvUmFkKGRlbHRhVGltZSAqIHNwZWVkICogZ3VpT2JqLnJpbmcxUm90YXRpb25TcGVlZFkpKTtcclxuICAgICAgICAgICAgdGhpcy5jbG91ZFIucm90YXRlWihkZWdUb1JhZChkZWx0YVRpbWUgKiBzcGVlZCAqIGd1aU9iai5yaW5nMVJvdGF0aW9uU3BlZWRaKSk7XHJcbiAgICAgICAgICAgIC8vIHRoaXMuY2xvdWRSLmNvbG9yID0gZ3VpT2JqLnJpbmcxQ29sb3JcclxuICAgICAgICAgICAgdGhpcy5jbG91ZFIudmlzaWJsZSA9IGd1aU9iai5yaW5nMXZpc2libGU7XHJcblxyXG4gICAgICAgICAgICB0aGlzLmNsb3VkVy5yb3RhdGVYKGRlZ1RvUmFkKGRlbHRhVGltZSAqIHNwZWVkICogZ3VpT2JqLnJpbmcyUm90YXRpb25TcGVlZFgpKTtcclxuICAgICAgICAgICAgdGhpcy5jbG91ZFcucm90YXRlWShkZWdUb1JhZChkZWx0YVRpbWUgKiBzcGVlZCAqIGd1aU9iai5yaW5nMlJvdGF0aW9uU3BlZWRZKSk7XHJcbiAgICAgICAgICAgIHRoaXMuY2xvdWRXLnJvdGF0ZVooZGVnVG9SYWQoZGVsdGFUaW1lICogc3BlZWQgKiBndWlPYmoucmluZzJSb3RhdGlvblNwZWVkWikpO1xyXG4gICAgICAgICAgICB0aGlzLmNsb3VkVy52aXNpYmxlID0gZ3VpT2JqLnJpbmcydmlzaWJsZTtcclxuXHJcbiAgICAgICAgICAgIHRoaXMuY2xvdWRHLnJvdGF0ZVgoZGVnVG9SYWQoZGVsdGFUaW1lICogc3BlZWQgKiBndWlPYmoucmluZzNSb3RhdGlvblNwZWVkWCkpO1xyXG4gICAgICAgICAgICB0aGlzLmNsb3VkRy5yb3RhdGVZKGRlZ1RvUmFkKGRlbHRhVGltZSAqIHNwZWVkICogZ3VpT2JqLnJpbmczUm90YXRpb25TcGVlZFkpKTtcclxuICAgICAgICAgICAgdGhpcy5jbG91ZEcucm90YXRlWihkZWdUb1JhZChkZWx0YVRpbWUgKiBzcGVlZCAqIGd1aU9iai5yaW5nM1JvdGF0aW9uU3BlZWRaKSk7XHJcbiAgICAgICAgICAgIHRoaXMuY2xvdWRHLnZpc2libGUgPSBndWlPYmoucmluZzN2aXNpYmxlO1xyXG5cclxuICAgICAgICAgICAgdGhpcy5jbG91ZFkucm90YXRlWChkZWdUb1JhZChkZWx0YVRpbWUgKiBzcGVlZCAqIGd1aU9iai5yaW5nNFJvdGF0aW9uU3BlZWRYKSk7XHJcbiAgICAgICAgICAgIHRoaXMuY2xvdWRZLnJvdGF0ZVkoZGVnVG9SYWQoZGVsdGFUaW1lICogc3BlZWQgKiBndWlPYmoucmluZzRSb3RhdGlvblNwZWVkWSkpO1xyXG4gICAgICAgICAgICB0aGlzLmNsb3VkWS5yb3RhdGVaKGRlZ1RvUmFkKGRlbHRhVGltZSAqIHNwZWVkICogZ3VpT2JqLnJpbmc0Um90YXRpb25TcGVlZFopKTtcclxuICAgICAgICAgICAgdGhpcy5jbG91ZFkudmlzaWJsZSA9IGd1aU9iai5yaW5nNHZpc2libGU7XHJcblxyXG4gICAgICAgICAgICB0aGlzLmNsb3VkVi5yb3RhdGVYKGRlZ1RvUmFkKGRlbHRhVGltZSAqIHNwZWVkICogZ3VpT2JqLnJpbmc1Um90YXRpb25TcGVlZFgpKTtcclxuICAgICAgICAgICAgdGhpcy5jbG91ZFYucm90YXRlWShkZWdUb1JhZChkZWx0YVRpbWUgKiBzcGVlZCAqIGd1aU9iai5yaW5nNVJvdGF0aW9uU3BlZWRZKSk7XHJcbiAgICAgICAgICAgIHRoaXMuY2xvdWRWLnJvdGF0ZVooZGVnVG9SYWQoZGVsdGFUaW1lICogc3BlZWQgKiBndWlPYmoucmluZzVSb3RhdGlvblNwZWVkWikpO1xyXG4gICAgICAgICAgICB0aGlzLmNsb3VkVi52aXNpYmxlID0gZ3VpT2JqLnJpbmc1dmlzaWJsZTtcclxuXHJcbiAgICAgICAgICAgIHRoaXMuY2xvdWRCLnJvdGF0ZVgoZGVnVG9SYWQoZGVsdGFUaW1lICogc3BlZWQgKiBndWlPYmoucmluZzZSb3RhdGlvblNwZWVkWCkpO1xyXG4gICAgICAgICAgICB0aGlzLmNsb3VkQi5yb3RhdGVZKGRlZ1RvUmFkKGRlbHRhVGltZSAqIHNwZWVkICogZ3VpT2JqLnJpbmc2Um90YXRpb25TcGVlZFkpKTtcclxuICAgICAgICAgICAgdGhpcy5jbG91ZEIucm90YXRlWihkZWdUb1JhZChkZWx0YVRpbWUgKiBzcGVlZCAqIGd1aU9iai5yaW5nNlJvdGF0aW9uU3BlZWRaKSk7XHJcbiAgICAgICAgICAgIHRoaXMuY2xvdWRCLnZpc2libGUgPSBndWlPYmoucmluZzZ2aXNpYmxlO1xyXG5cclxuICAgICAgICAgICAgcmVxdWVzdEFuaW1hdGlvbkZyYW1lKHVwZGF0ZSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJlcXVlc3RBbmltYXRpb25GcmFtZSh1cGRhdGUpO1xyXG4gICAgfVxyXG4gICAgXHJcbn1cclxuXHJcbndpbmRvdy5hZGRFdmVudExpc3RlbmVyKFwiRE9NQ29udGVudExvYWRlZFwiLCBpbml0KTtcclxuXHJcbmZ1bmN0aW9uIGluaXQoKSB7XHJcbiAgICBsZXQgY29udGFpbmVyID0gbmV3IFRocmVlSlNDb250YWluZXIoKTtcclxuXHJcbiAgICBsZXQgdmlld3BvcnQgPSBjb250YWluZXIuY3JlYXRlUmVuZGVyZXJET00oNjQwLCA0ODAsIG5ldyBUSFJFRS5WZWN0b3IzKDEwLCAxMCwgMTApKTtcclxuICAgIGRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQodmlld3BvcnQpO1xyXG59XHJcbiIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4vLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuX193ZWJwYWNrX3JlcXVpcmVfXy5tID0gX193ZWJwYWNrX21vZHVsZXNfXztcblxuIiwidmFyIGRlZmVycmVkID0gW107XG5fX3dlYnBhY2tfcmVxdWlyZV9fLk8gPSAocmVzdWx0LCBjaHVua0lkcywgZm4sIHByaW9yaXR5KSA9PiB7XG5cdGlmKGNodW5rSWRzKSB7XG5cdFx0cHJpb3JpdHkgPSBwcmlvcml0eSB8fCAwO1xuXHRcdGZvcih2YXIgaSA9IGRlZmVycmVkLmxlbmd0aDsgaSA+IDAgJiYgZGVmZXJyZWRbaSAtIDFdWzJdID4gcHJpb3JpdHk7IGktLSkgZGVmZXJyZWRbaV0gPSBkZWZlcnJlZFtpIC0gMV07XG5cdFx0ZGVmZXJyZWRbaV0gPSBbY2h1bmtJZHMsIGZuLCBwcmlvcml0eV07XG5cdFx0cmV0dXJuO1xuXHR9XG5cdHZhciBub3RGdWxmaWxsZWQgPSBJbmZpbml0eTtcblx0Zm9yICh2YXIgaSA9IDA7IGkgPCBkZWZlcnJlZC5sZW5ndGg7IGkrKykge1xuXHRcdHZhciBbY2h1bmtJZHMsIGZuLCBwcmlvcml0eV0gPSBkZWZlcnJlZFtpXTtcblx0XHR2YXIgZnVsZmlsbGVkID0gdHJ1ZTtcblx0XHRmb3IgKHZhciBqID0gMDsgaiA8IGNodW5rSWRzLmxlbmd0aDsgaisrKSB7XG5cdFx0XHRpZiAoKHByaW9yaXR5ICYgMSA9PT0gMCB8fCBub3RGdWxmaWxsZWQgPj0gcHJpb3JpdHkpICYmIE9iamVjdC5rZXlzKF9fd2VicGFja19yZXF1aXJlX18uTykuZXZlcnkoKGtleSkgPT4gKF9fd2VicGFja19yZXF1aXJlX18uT1trZXldKGNodW5rSWRzW2pdKSkpKSB7XG5cdFx0XHRcdGNodW5rSWRzLnNwbGljZShqLS0sIDEpO1xuXHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0ZnVsZmlsbGVkID0gZmFsc2U7XG5cdFx0XHRcdGlmKHByaW9yaXR5IDwgbm90RnVsZmlsbGVkKSBub3RGdWxmaWxsZWQgPSBwcmlvcml0eTtcblx0XHRcdH1cblx0XHR9XG5cdFx0aWYoZnVsZmlsbGVkKSB7XG5cdFx0XHRkZWZlcnJlZC5zcGxpY2UoaS0tLCAxKVxuXHRcdFx0dmFyIHIgPSBmbigpO1xuXHRcdFx0aWYgKHIgIT09IHVuZGVmaW5lZCkgcmVzdWx0ID0gcjtcblx0XHR9XG5cdH1cblx0cmV0dXJuIHJlc3VsdDtcbn07IiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsIi8vIG5vIGJhc2VVUklcblxuLy8gb2JqZWN0IHRvIHN0b3JlIGxvYWRlZCBhbmQgbG9hZGluZyBjaHVua3Ncbi8vIHVuZGVmaW5lZCA9IGNodW5rIG5vdCBsb2FkZWQsIG51bGwgPSBjaHVuayBwcmVsb2FkZWQvcHJlZmV0Y2hlZFxuLy8gW3Jlc29sdmUsIHJlamVjdCwgUHJvbWlzZV0gPSBjaHVuayBsb2FkaW5nLCAwID0gY2h1bmsgbG9hZGVkXG52YXIgaW5zdGFsbGVkQ2h1bmtzID0ge1xuXHRcIm1haW5cIjogMFxufTtcblxuLy8gbm8gY2h1bmsgb24gZGVtYW5kIGxvYWRpbmdcblxuLy8gbm8gcHJlZmV0Y2hpbmdcblxuLy8gbm8gcHJlbG9hZGVkXG5cbi8vIG5vIEhNUlxuXG4vLyBubyBITVIgbWFuaWZlc3RcblxuX193ZWJwYWNrX3JlcXVpcmVfXy5PLmogPSAoY2h1bmtJZCkgPT4gKGluc3RhbGxlZENodW5rc1tjaHVua0lkXSA9PT0gMCk7XG5cbi8vIGluc3RhbGwgYSBKU09OUCBjYWxsYmFjayBmb3IgY2h1bmsgbG9hZGluZ1xudmFyIHdlYnBhY2tKc29ucENhbGxiYWNrID0gKHBhcmVudENodW5rTG9hZGluZ0Z1bmN0aW9uLCBkYXRhKSA9PiB7XG5cdHZhciBbY2h1bmtJZHMsIG1vcmVNb2R1bGVzLCBydW50aW1lXSA9IGRhdGE7XG5cdC8vIGFkZCBcIm1vcmVNb2R1bGVzXCIgdG8gdGhlIG1vZHVsZXMgb2JqZWN0LFxuXHQvLyB0aGVuIGZsYWcgYWxsIFwiY2h1bmtJZHNcIiBhcyBsb2FkZWQgYW5kIGZpcmUgY2FsbGJhY2tcblx0dmFyIG1vZHVsZUlkLCBjaHVua0lkLCBpID0gMDtcblx0aWYoY2h1bmtJZHMuc29tZSgoaWQpID0+IChpbnN0YWxsZWRDaHVua3NbaWRdICE9PSAwKSkpIHtcblx0XHRmb3IobW9kdWxlSWQgaW4gbW9yZU1vZHVsZXMpIHtcblx0XHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhtb3JlTW9kdWxlcywgbW9kdWxlSWQpKSB7XG5cdFx0XHRcdF9fd2VicGFja19yZXF1aXJlX18ubVttb2R1bGVJZF0gPSBtb3JlTW9kdWxlc1ttb2R1bGVJZF07XG5cdFx0XHR9XG5cdFx0fVxuXHRcdGlmKHJ1bnRpbWUpIHZhciByZXN1bHQgPSBydW50aW1lKF9fd2VicGFja19yZXF1aXJlX18pO1xuXHR9XG5cdGlmKHBhcmVudENodW5rTG9hZGluZ0Z1bmN0aW9uKSBwYXJlbnRDaHVua0xvYWRpbmdGdW5jdGlvbihkYXRhKTtcblx0Zm9yKDtpIDwgY2h1bmtJZHMubGVuZ3RoOyBpKyspIHtcblx0XHRjaHVua0lkID0gY2h1bmtJZHNbaV07XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGluc3RhbGxlZENodW5rcywgY2h1bmtJZCkgJiYgaW5zdGFsbGVkQ2h1bmtzW2NodW5rSWRdKSB7XG5cdFx0XHRpbnN0YWxsZWRDaHVua3NbY2h1bmtJZF1bMF0oKTtcblx0XHR9XG5cdFx0aW5zdGFsbGVkQ2h1bmtzW2NodW5rSWRdID0gMDtcblx0fVxuXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXy5PKHJlc3VsdCk7XG59XG5cbnZhciBjaHVua0xvYWRpbmdHbG9iYWwgPSBzZWxmW1wid2VicGFja0NodW5rY2dwcmVuZGVyaW5nXCJdID0gc2VsZltcIndlYnBhY2tDaHVua2NncHJlbmRlcmluZ1wiXSB8fCBbXTtcbmNodW5rTG9hZGluZ0dsb2JhbC5mb3JFYWNoKHdlYnBhY2tKc29ucENhbGxiYWNrLmJpbmQobnVsbCwgMCkpO1xuY2h1bmtMb2FkaW5nR2xvYmFsLnB1c2ggPSB3ZWJwYWNrSnNvbnBDYWxsYmFjay5iaW5kKG51bGwsIGNodW5rTG9hZGluZ0dsb2JhbC5wdXNoLmJpbmQoY2h1bmtMb2FkaW5nR2xvYmFsKSk7IiwiIiwiLy8gc3RhcnR1cFxuLy8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4vLyBUaGlzIGVudHJ5IG1vZHVsZSBkZXBlbmRzIG9uIG90aGVyIGxvYWRlZCBjaHVua3MgYW5kIGV4ZWN1dGlvbiBuZWVkIHRvIGJlIGRlbGF5ZWRcbnZhciBfX3dlYnBhY2tfZXhwb3J0c19fID0gX193ZWJwYWNrX3JlcXVpcmVfXy5PKHVuZGVmaW5lZCwgW1widmVuZG9ycy1ub2RlX21vZHVsZXNfbGlsLWd1aV9kaXN0X2xpbC1ndWlfZXNtX2pzLW5vZGVfbW9kdWxlc190aHJlZV9leGFtcGxlc19qc21fY29udHJvbHNfT3JiLTUzZDdhNFwiXSwgKCkgPT4gKF9fd2VicGFja19yZXF1aXJlX18oXCIuL3NyYy9hcHAudHNcIikpKVxuX193ZWJwYWNrX2V4cG9ydHNfXyA9IF9fd2VicGFja19yZXF1aXJlX18uTyhfX3dlYnBhY2tfZXhwb3J0c19fKTtcbiIsIiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==