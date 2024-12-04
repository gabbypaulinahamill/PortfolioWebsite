import * as THREE from 'three';
import { GLTFLoader } from 'three/addons/loaders/GLTFLoader.js';
import { OrbitControls } from 'three/addons/controls/OrbitControls.js';

const renderer = new THREE.WebGLRenderer({ antialias: true });
renderer.outputColorSpace = THREE.SRGBColorSpace;
renderer.setSize(window.innerWidth, window.innerHeight);
renderer.setClearColor(0x000000);
renderer.setPixelRatio(window.devicePixelRatio);
renderer.shadowMap.enabled = true;
renderer.shadowMap.type = THREE.PCFSoftShadowMap;
document.body.appendChild(renderer.domElement);

const scene = new THREE.Scene();

const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
camera.position.set(0, 5, 10);
camera.lookAt(0, 0, 0);

const controls = new OrbitControls(camera, renderer.domElement);
controls.enableDamping = true;
controls.enablePan = false;
controls.minDistance = 5;
controls.maxDistance = 20;
controls.minPolarAngle = 0.5;
controls.maxPolarAngle = 1.5;
controls.autoRotate = false;
controls.target = new THREE.Vector3(0, 1, 0);
controls.update();

const ambientLight = new THREE.AmbientLight(0xffffff, 0.5);
scene.add(ambientLight);

// Removed directional light and hemisphere light

const loader = new GLTFLoader().setPath('models/');

// Load the first model
loader.load('ChaseAndI_C4Dmodel_300x400.gltf', (gltf) => {
  console.log('First model loaded successfully');
  const model1 = gltf.scene;

  model1.traverse((child) => {
    if (child.isMesh) {
      console.log('Found mesh in first model:', child);
      child.castShadow = true;
      child.receiveShadow = true;
    }
  });

  model1.position.set(0, 1, 0); // Position the first model
  model1.scale.set(5, 5, 5); // Scale the first model if needed
  scene.add(model1);
}, (xhr) => {
  console.log(`Loading first model progress: ${(xhr.loaded / xhr.total * 100).toFixed(2)}%`);
}, (error) => {
  console.error('Error loading first model:', error);
});

// Load the second model and apply video texture
const video = createVideoElement('videos/rorschech video.mp4');

const videoTexture = new THREE.VideoTexture(video);
videoTexture.flipY = false;
videoTexture.minFilter = THREE.LinearFilter;
videoTexture.magFilter = THREE.LinearFilter;
videoTexture.format = THREE.RGBAFormat;

loader.load('Rorschech_C4Dmodel.gltf', (gltf) => {
  console.log('Second model loaded successfully');
  const model2 = gltf.scene;

  model2.traverse((child) => {
    if (child.isMesh) {
      console.log('Found mesh in second model:', child);
      child.castShadow = true;
      child.receiveShadow = true;
      child.material.map = videoTexture; // Apply video texture
      child.material.needsUpdate = true;
    }
  });

  model2.position.set(5, 1, 0); // Position the second model
  model2.scale.set(5, 5, 5); // Scale the second model if needed
  scene.add(model2);
}, (xhr) => {
  console.log(`Loading second model progress: ${(xhr.loaded / xhr.total * 100).toFixed(2)}%`);
}, (error) => {
  console.error('Error loading second model:', error);
});

// Load the third model and apply video texture
const video2 = createVideoElement('videos/VirtualProduction700x540.mp4');

const videoTexture2 = new THREE.VideoTexture(video2);
videoTexture2.flipY = false; // Flip the texture coordinates 
videoTexture2.minFilter = THREE.LinearFilter;
videoTexture2.magFilter = THREE.LinearFilter;
videoTexture2.format = THREE.RGBAFormat;

loader.load('VirtualProduction_C4DBlankmodelV2.gltf', (gltf) => {
  console.log('Third model loaded successfully');
  const model3 = gltf.scene;

  model3.traverse((child) => {
    if (child.isMesh) {
      console.log('Found mesh in third model:', child);
      child.castShadow = true;
      child.receiveShadow = true;
      child.material.map = videoTexture2; // Apply video texture
      child.material.needsUpdate = true;
    }
  });

  model3.position.set(-5, 1, 0); // Position the third model
  model3.scale.set(5, 5, 5); // Scale the third model if needed
  scene.add(model3);
}, (xhr) => {
  console.log(`Loading third model progress: ${(xhr.loaded / xhr.total * 100).toFixed(2)}%`);
}, (error) => {
  console.error('Error loading third model:', error);
});


// Load the fourth model and apply video texture
const video3 = createVideoElement('videos/EIQ889x500.mp4');

const videoTexture3 = new THREE.VideoTexture(video3);
videoTexture3.flipY = false; // Flip the texture coordinates
videoTexture3.minFilter = THREE.LinearFilter;
videoTexture3.magFilter = THREE.LinearFilter;
videoTexture3.format = THREE.RGBAFormat;

loader.load('EIQ_C4Dmodel.gltf', (gltf) => {
  console.log('Fourth model loaded successfully');
  const model4 = gltf.scene;

  model4.traverse((child) => {
    if (child.isMesh) {
      console.log('Found mesh in fourth model:', child);
      child.castShadow = true;
      child.receiveShadow = true;
      child.material.map = videoTexture3; // Apply video texture
      child.material.needsUpdate = true;
    }
  });

  model4.position.set(-11, 1, 0); // Position the fourth model
  model4.scale.set(5, 5, 5); // Scale the fourth model if needed
  scene.add(model4);
}, (xhr) => {
  console.log(`Loading fourth model progress: ${(xhr.loaded / xhr.total * 100).toFixed(2)}%`);
}, (error) => {
  console.error('Error loading fourth model:', error);
});

// Load the fifth model and apply video texture
const video4 = createVideoElement('videos/RedTriangle.mp4');


const videoTexture4 = new THREE.VideoTexture(video4);
videoTexture4.flipY = false; // Flip the texture coordinates
videoTexture4.minFilter = THREE.LinearFilter;
videoTexture4.magFilter = THREE.LinearFilter;
videoTexture4.format = THREE.RGBAFormat;


loader.load('RedTriangle_C4Dmodel_400x400.gltf', (gltf) => {
  console.log('Fifth model loaded successfully');
  const model5 = gltf.scene;


  model5.traverse((child) => {
    if (child.isMesh) {
      console.log('Found mesh in fifth model:', child);
      child.castShadow = true;
      child.receiveShadow = true;
      child.material.map = videoTexture4; // Apply video texture
      child.material.needsUpdate = true;
    }
  });


  model5.position.set(10, 1, 0); // Position the fifth model
  model5.scale.set(5, 5, 5); // Scale the fifth model if needed
  scene.add(model5);
}, (xhr) => {
  console.log(`Loading fifth model progress: ${(xhr.loaded / xhr.total * 100).toFixed(2)}%`);
}, (error) => {
  console.error('Error loading fifth model:', error);
});

// Load the sixth model and apply video texture
const video5 = createVideoElement('videos/LYRIQ.mp4');


const videoTexture5 = new THREE.VideoTexture(video5);
videoTexture5.flipY = false; // Flip the texture coordinates
videoTexture5.minFilter = THREE.LinearFilter;
videoTexture5.magFilter = THREE.LinearFilter;
videoTexture5.format = THREE.RGBAFormat;


loader.load('Lyriq.gltf', (gltf) => {
  console.log('Sixth model loaded successfully');
  const model6 = gltf.scene;


  model6.traverse((child) => {
    if (child.isMesh) {
      console.log('Found mesh in sixth model:', child);
      child.castShadow = true;
      child.receiveShadow = true;
      child.material.map = videoTexture5; // Apply video texture
      child.material.needsUpdate = true;
    }
  });


  model6.position.set(5, 5, 0); // Position the sixth model
  model6.scale.set(5, 5, 5); // Scale the sixth model if needed
  scene.add(model6);
}, (xhr) => {
  console.log(`Loading sixth model progress: ${(xhr.loaded / xhr.total * 100).toFixed(2)}%`);
}, (error) => {
  console.error('Error loading sixth model:', error);
});

// Load the seventh model and apply video texture
const video6 = createVideoElement('videos/707.mp4');


const videoTexture6 = new THREE.VideoTexture(video6);
videoTexture6.flipY = false; // Flip the texture coordinates
videoTexture6.minFilter = THREE.LinearFilter;
videoTexture6.magFilter = THREE.LinearFilter;
videoTexture6.format = THREE.RGBAFormat;


loader.load('707.gltf', (gltf) => {
  console.log('Seventh model loaded successfully');
  const model7 = gltf.scene;


  model7.traverse((child) => {
    if (child.isMesh) {
      console.log('Found mesh in seventh model:', child);
      child.castShadow = true;
      child.receiveShadow = true;
      child.material.map = videoTexture6; // Apply video texture
      child.material.needsUpdate = true;
    }
  });


  model7.position.set(12, 5, 0); // Position the seventh model
  model7.scale.set(5, 5, 5); // Scale the seventh model if needed
  scene.add(model7);
}, (xhr) => {
  console.log(`Loading seventh model progress: ${(xhr.loaded / xhr.total * 100).toFixed(2)}%`);
}, (error) => {
  console.error('Error loading seventh model:', error);
});

// Load the eighth model and apply video texture
const video7 = createVideoElement('videos/StopMotion.mp4');


const videoTexture7 = new THREE.VideoTexture(video7);
videoTexture7.flipY = false; // Flip the texture coordinates
videoTexture7.minFilter = THREE.LinearFilter;
videoTexture7.magFilter = THREE.LinearFilter;
videoTexture7.format = THREE.RGBAFormat;


loader.load('StopMotion2.gltf', (gltf) => {
  console.log('Eighth model loaded successfully');
  const model8 = gltf.scene;


  model8.traverse((child) => {
    if (child.isMesh) {
      console.log('Found mesh in eighth model:', child);
      child.castShadow = true;
      child.receiveShadow = true;
      child.material.map = videoTexture7; // Apply video texture
      child.material.needsUpdate = true;
    }
  });


  model8.position.set(-0.5, 5, 0); // Position the eighth model
  model8.scale.set(5, 5, 5); // Scale the eighth model if needed
  scene.add(model8);
}, (xhr) => {
  console.log(`Loading eigth model progress: ${(xhr.loaded / xhr.total * 100).toFixed(2)}%`);
}, (error) => {
  console.error('Error loading eigth model:', error);
});

// Load the ninth model and apply video texture
const video8 = createVideoElement('videos/DFCU.mp4');


const videoTexture8 = new THREE.VideoTexture(video8);
videoTexture8.flipY = false; // Flip the texture coordinates
videoTexture8.minFilter = THREE.LinearFilter;
videoTexture8.magFilter = THREE.LinearFilter;
videoTexture8.format = THREE.RGBAFormat;


loader.load('dfcu.gltf', (gltf) => {
  console.log('Ninth model loaded successfully');
  const model9 = gltf.scene;


  model9.traverse((child) => {
    if (child.isMesh) {
      console.log('Found mesh in ninth model:', child);
      child.castShadow = true;
      child.receiveShadow = true;
      child.material.map = videoTexture8; // Apply video texture
      child.material.needsUpdate = true;
    }
  });


  model9.position.set(-6, 4.5, 0); // Position the ninth model
  model9.scale.set(5, 5, 5); // Scale the ninth model if needed
  scene.add(model9);
}, (xhr) => {
  console.log(`Loading eigth model progress: ${(xhr.loaded / xhr.total * 100).toFixed(2)}%`);
}, (error) => {
  console.error('Error loading eigth model:', error);
});

// Load the tenth model and apply video texture
const video9 = createVideoElement('videos/YSLV3.mp4');


const videoTexture9 = new THREE.VideoTexture(video9);
videoTexture9.flipY = false; // Flip the texture coordinates
videoTexture9.minFilter = THREE.LinearFilter;
videoTexture9.magFilter = THREE.LinearFilter;
videoTexture9.format = THREE.RGBAFormat;


loader.load('YSLV1.gltf', (gltf) => {
  console.log('Tenth model loaded successfully');
  const model10 = gltf.scene;


  model10.traverse((child) => {
    if (child.isMesh) {
      console.log('Found mesh in tenth model:', child);
      child.castShadow = true;
      child.receiveShadow = true;
      child.material.map = videoTexture9; // Apply video texture
      child.material.needsUpdate = true;
    }
  });


  model10.position.set(-11, 5, 0); // Position the tenth model
  model10.scale.set(5, 5, 5); // Scale the tenth model if needed
  scene.add(model10);
}, (xhr) => {
  console.log(`Loading tenth model progress: ${(xhr.loaded / xhr.total * 100).toFixed(2)}%`);
}, (error) => {
  console.error('Error loading tenth model:', error);
});

// Load the eleventh model and apply video texture
const video10 = createVideoElement('videos/XP4.mp4');


const videoTexture10 = new THREE.VideoTexture(video10);
videoTexture10.flipY = false; // Flip the texture coordinates
videoTexture10.minFilter = THREE.LinearFilter;
videoTexture10.magFilter = THREE.LinearFilter;
videoTexture10.format = THREE.RGBAFormat;


loader.load('XP.gltf', (gltf) => {
  console.log('Eleventh model loaded successfully');
  const model11 = gltf.scene;


  model11.traverse((child) => {
    if (child.isMesh) {
      console.log('Found mesh in eleventh model:', child);
      child.castShadow = true;
      child.receiveShadow = true;
      child.material.map = videoTexture10; // Apply video texture
      child.material.needsUpdate = true;
    }
  });


  model11.position.set(-2, -3.5, 0); // Position the eleventh model
  model11.scale.set(5, 5, 5); // Scale the eleventh model if needed
  scene.add(model11);
}, (xhr) => {
  console.log(`Loading eleventh model progress: ${(xhr.loaded / xhr.total * 100).toFixed(2)}%`);
}, (error) => {
  console.error('Error loading eleventh model:', error);
});

// Load the twelfth model and apply video texture
const video11 = createVideoElement('videos/RB.mp4');


const videoTexture11 = new THREE.VideoTexture(video11);
videoTexture11.flipY = false; // Flip the texture coordinates
videoTexture11.minFilter = THREE.LinearFilter;
videoTexture11.magFilter = THREE.LinearFilter;
videoTexture11.format = THREE.RGBAFormat;


loader.load('RB.gltf', (gltf) => {
  console.log('Twelfth model loaded successfully');
  const model12 = gltf.scene;


  model12.traverse((child) => {
    if (child.isMesh) {
      console.log('Found mesh in twelfth model:', child);
      child.castShadow = true;
      child.receiveShadow = true;
      child.material.map = videoTexture11; // Apply video texture
      child.material.needsUpdate = true;
    }
  });


  model12.position.set(5, -3, 0); // Position the twelfth model
  model12.scale.set(5, 5, 5); // Scale the twelfth model if needed
  scene.add(model12);
}, (xhr) => {
  console.log(`Loading twelfth model progress: ${(xhr.loaded / xhr.total * 100).toFixed(2)}%`);
}, (error) => {
  console.error('Error loading twelfth model:', error);
});

const raycaster = new THREE.Raycaster();
const mouse = new THREE.Vector2();
let INTERSECTED;

function onMouseMove(event) {
  // Calculate mouse position in normalized device coordinates (-1 to +1) for both components
  mouse.x = (event.clientX / window.innerWidth) * 2 - 1;
  mouse.y = -(event.clientY / window.innerHeight) * 2 + 1;
}

window.addEventListener('mousemove', onMouseMove, false);

window.addEventListener('resize', () => {
  camera.aspect = window.innerWidth / window.innerHeight;
  camera.updateProjectionMatrix();
  renderer.setSize(window.innerWidth, window.innerHeight);
});

function animate() {
  requestAnimationFrame(animate);

  // Update the picking ray with the camera and mouse position
  raycaster.setFromCamera(mouse, camera);

  // Calculate objects intersecting the picking ray
  const intersects = raycaster.intersectObjects(scene.children, true);

  if (intersects.length > 0) {
    if (INTERSECTED != intersects[0].object) {
      if (INTERSECTED) INTERSECTED.material.emissive.setHex(INTERSECTED.currentHex);
      INTERSECTED = intersects[0].object;
      INTERSECTED.currentHex = INTERSECTED.material.emissive.getHex();
      INTERSECTED.material.emissive.setHex(0xff0000); // Change color to red when hovered
    }
  } else {
    if (INTERSECTED) INTERSECTED.material.emissive.setHex(INTERSECTED.currentHex);
    INTERSECTED = null;
  }

  controls.update();
  renderer.render(scene, camera);
}

animate();
