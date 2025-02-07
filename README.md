# ThreeJS Demo for Web Dev Project

This demo shows the basics of loading and arranging objects in ThreeJS and some potentials that it has.

The main.js file contains code currently to load up a light, a camera, and one chair into the object. 

## Installation
Clone the repository, run `npm i` and then `npx vite`. It should load the project up in port 5173 unless busy.

## Goals
- Add in other objects to the scene
- Create keyboard controls that can allow you to navigate the scene
- Find other objects to add to the scene

### Bonus 
- Attach a mouse control to change where the camera is looking 
- Attach the camera to a model of a player (like first person or third person video games)

## Resources 
- [This website](https://poly.cam/explore) has a lot of pre-textured assets you can pull into your scene if you would like, including entire rendered houses and rooms. 
- [ThreeJS Object3D](https://threejs.org/docs/#api/en/core/Object3D) is how objects are loaded and handled during rendering. This documentation shows all the functions but for this demonstration, focus on position, rotation, quaternion, and scale.
- Rotating objects can either be done via a Quaternion or a Rotation. Euler angles using rotation is easier but quaternion is more suitable for adding physics (which we are not doing). 
- It's been a while since a lot of us have taken math classes. [Quaternions](https://threejs.org/docs/#api/en/math/Quaternion) are how ThreeJS handles rotations, with an XYZ vector and a W in radians for the rotation amount.

## Additional Notes
- ThreeJS is unique in some sense that the Y-axis is the up and down one.
- You can set the position or quaternion with \[object\].position/quaternion.set()
- You can set the camera position and quaternion the same way to make it easier to look at stuff while you're working 
- If you update the quaternion, the rotation *becomes undefined* so make a choice there. 