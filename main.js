import * as THREE from 'three';
import { GLTFLoader } from 'three/addons/loaders/GLTFLoader.js';
import { KeyboardControls } from "/KeyboardControls";

const scene = new THREE.Scene(); // Creates the scene
scene.add(new THREE.AmbientLight(0xffffff, 0.5)) // Adds ambiant lighting
scene.add(new THREE.DirectionalLight(0xffffff, 1)) // Adds dynamic lighting
const camera = new THREE.PerspectiveCamera( 65, window.innerWidth / window.innerHeight, 0.1, 1000 ); // adds a camera

camera.position.set(0, 0, 5) // sets the camera's position
// camera.quaternion.set(0, 0, 1, Math.PI/16) // sets the camera's angle (rotates it slightly to the right)

let keyboardControls = new KeyboardControls(camera);


const loader = new GLTFLoader();

// example function for loading in the chair
loader.load(
    // resource URL
    './Assets/VintageWickerChair.glb',
    function ( gltf ) {

        // If you want to play around with these but most of these aren't defined for this object
        // console.log(gltf)
        // gltf.animations; // Array<THREE.AnimationClip>
        // gltf.scene; // THREE.Group
        // gltf.scenes; // Array<THREE.Group>
        // gltf.cameras; // Array<THREE.Camera>
        // gltf.asset; // Object


        gltf.scene.scale.set(2, 2, 2) // doubles the size
        // gltf.scene.position.set(0,1,0) // sets the position
        // gltf.scene.rotation.x = Math.PI/2 // rotates it around the x-axis 90°

        scene.add(gltf.scene)

    },
    function ( xhr ) {
    },
    function ( error ) {

        console.log( 'An error happened: ' + error );

    }
);

// Adds the threejs renderer to the main element
const renderer = new THREE.WebGLRenderer();
renderer.setSize( window.innerWidth, window.innerHeight );
document.body.appendChild( renderer.domElement );

// this is what gets called every "frame"
function animate() {
    keyboardControls.update();
    renderer.render( scene, camera );
}
renderer.setAnimationLoop( animate )

