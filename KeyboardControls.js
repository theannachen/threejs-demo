import * as THREE from 'three';

export class KeyboardControls {

    constructor(camera) {
        this.upKey = "w";
        this.downKey = "s";
        this.leftKey = "a";
        this.rightKey = "d";
        this.lookLeft = "arrowLeft";
        this.lookRight = "arrowRight";
        this.flyKey = "space";
        this.sinkKey = "shift"

        this.camera = camera;
        this.moveSpeed = 0.25;
        this.rotationSpeed = 0.05;
        this.flySpeed = 0.1

        this.keysPressed = {
            up: false,
            down: false,
            left: false,
            right: false,
            fly: false,
            sink: false,
            lookLeft: false,
            lookRight: false
        };

        document.addEventListener("keydown", this.onKeyDown.bind(this), false);
        document.addEventListener("keyup", this.onKeyUp.bind(this), false);
    }

    onKeyDown(event) {
        const keyCode = event.which;

        if (keyCode === keyCodes[this.upKey]) this.keysPressed.up = true;
        else if (keyCode === keyCodes[this.downKey]) this.keysPressed.down = true;
        else if (keyCode === keyCodes[this.leftKey]) this.keysPressed.left = true;
        else if (keyCode === keyCodes[this.rightKey]) this.keysPressed.right = true;
        else if (keyCode === keyCodes[this.flyKey]) this.keysPressed.fly = true;
        else if (keyCode === keyCodes[this.sinkKey]) this.keysPressed.sink = true;
        else if (keyCode === keyCodes[this.lookLeft]) this.keysPressed.lookLeft = true;
        else if (keyCode === keyCodes[this.lookRight]) this.keysPressed.lookRight = true;
    }

    onKeyUp(event) {
        const keyCode = event.which;

        if (keyCode === keyCodes[this.upKey]) this.keysPressed.up = false;
        else if (keyCode === keyCodes[this.downKey]) this.keysPressed.down = false;
        else if (keyCode === keyCodes[this.leftKey]) this.keysPressed.left = false;
        else if (keyCode === keyCodes[this.rightKey]) this.keysPressed.right = false;
        else if (keyCode === keyCodes[this.flyKey]) this.keysPressed.fly = false;
        else if (keyCode === keyCodes[this.sinkKey]) this.keysPressed.sink = false;
        else if (keyCode === keyCodes[this.lookLeft]) this.keysPressed.lookLeft = false;
        else if (keyCode === keyCodes[this.lookRight]) this.keysPressed.lookRight = false;
    }

    update() {
        if (this.keysPressed.up) {
            const forward = new THREE.Vector3(0, 0, -1)
                .applyQuaternion(this.camera.quaternion)
                .normalize();

            this.camera.position.add(forward.multiplyScalar(this.moveSpeed));
        }

        if (this.keysPressed.down) {
            const backward = new THREE.Vector3(0, 0, 1)
                .applyQuaternion(this.camera.quaternion)
                .normalize();

            this.camera.position.add(backward.multiplyScalar(this.moveSpeed));
        }
        if (this.keysPressed.left) {
            const left = new THREE.Vector3(-1, 0, 0)
                .applyQuaternion(this.camera.quaternion)
                .normalize();

            this.camera.position.add(left.multiplyScalar(this.moveSpeed));
        }
        if (this.keysPressed.right) {
            const right = new THREE.Vector3(1, 0, 0)
                .applyQuaternion(this.camera.quaternion)
                .normalize();

            this.camera.position.add(right.multiplyScalar(this.moveSpeed));
        }

        if (this.keysPressed.lookLeft) {
            this.camera.rotation.y += this.rotationSpeed;
        }

        if (this.keysPressed.lookRight) {
            this.camera.rotation.y -= this.rotationSpeed;
        }

        if (this.keysPressed.fly) {
            this.camera.position.y += this.flySpeed;
        }

        if (this.keysPressed.sink) {
            this.camera.position.y -= this.flySpeed;
        }
    }
}

const keyCodes = {
    backspace: 8,
    tab: 9,
    enter: 13,
    shift: 16,
    ctrl: 17,
    alt: 18,
    pauseBreak: 19,
    capsLock: 20,
    escape: 27,
    pageUp: 33,
    space: 32,
    pageDown: 34,
    end: 35,
    home: 36,
    arrowLeft: 37,
    arrowUp: 38,
    arrowRight: 39,
    arrowDown: 40,
    printScreen: 44,
    insert: 45,
    delete: 46,
    zero: 48,
    one: 49,
    two: 50,
    three: 51,
    four: 52,
    five: 53,
    six: 54,
    seven: 55,
    eight: 56,
    nine: 57,
    a: 65,
    b: 66,
    c: 67,
    d: 68,
    e: 69,
    f: 70,
    g: 71,
    h: 72,
    i: 73,
    j: 74,
    k: 75,
    l: 76,
    m: 77,
    n: 78,
    o: 79,
    p: 80,
    q: 81,
    r: 82,
    s: 83,
    t: 84,
    u: 85,
    v: 86,
    w: 87,
    x: 88,
    y: 89,
    z: 90,
    leftWindowKey: 91,
    rightWindowKey: 92,
    selectKey: 93,
    numpad0: 96,
    numpad1: 97,
    numpad2: 98,
    numpad3: 99,
    numpad4: 100,
    numpad5: 101,
    numpad6: 102,
    numpad7: 103,
    numpad8: 104,
    numpad9: 105,
    multiply: 106,
    add: 107,
    subtract: 109,
    decimalPoint: 110,
    divide: 111,
    f1: 112,
    f2: 113,
    f3: 114,
    f4: 115,
    f5: 116,
    f6: 117,
    f7: 118,
    f8: 119,
    f9: 120,
    f10: 121,
    f11: 122,
    f12: 123,
    numLock: 144,
    scrollLock: 145,
    myComputer: 182,
    myCalculator: 183,
    semiColon: 186,
    equalSign: 187,
    comma: 188,
    dash: 189,
    period: 190,
    forwardSlash: 191,
    openBracket: 219,
    backSlash: 220,
    closeBracket: 221,
    singleQuote: 222
};