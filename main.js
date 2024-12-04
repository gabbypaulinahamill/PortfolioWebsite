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

// Add this helper function at the top of your file, after the scene setup
const occupiedPositions = [];
const modelSize = 5; // Size of models (based on your scale)
const spacing = 7; // Minimum spacing between models

function getRandomPosition() {
  const minX = -20;
  const maxX = 20;
  const minY = -10;
  const maxY = 10;
  const minZ = -10;
  const maxZ = 10;
  
  let position;
  let isValidPosition = false;
  
  while (!isValidPosition) {
    position = new THREE.Vector3(
      Math.random() * (maxX - minX) + minX,
      Math.random() * (maxY - minY) + minY,
      Math.random() * (maxZ - minZ) + minZ
    );
    
    isValidPosition = !occupiedPositions.some(pos => 
      position.distanceTo(pos) < spacing
    );
  }
  
  occupiedPositions.push(position);
  return position;
}

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

  const randomPosition = getRandomPosition();
  model1.position.copy(randomPosition);
  model1.scale.set(5, 5, 5);
  scene.add(model1);

  // Add to models array and menu
  models.push({
    name: 'Chase And I',
    model: model1,
    position: randomPosition
  });
  addModelToMenu('Chase And I', randomPosition);
}, (xhr) => {
  console.log(`Loading first model progress: ${(xhr.loaded / xhr.total * 100).toFixed(2)}%`);
}, (error) => {
  console.error('Error loading first model:', error);
});

// Load the second model and apply video texture
const video = createVideoElement('videos/rorschech video.mp4');

const videoTexture = new THREE.VideoTexture(video);
videoTexture.flipY = false; // Flip the texture coordinates
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

  const randomPosition = getRandomPosition();
  model2.position.copy(randomPosition);
  model2.scale.set(5, 5, 5);
  scene.add(model2);

  // Add to models array and menu
  models.push({
    name: 'Rorschech',
    model: model2,
    position: randomPosition
  });
  addModelToMenu('Rorschech', randomPosition);
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

  const randomPosition = getRandomPosition();
  model3.position.copy(randomPosition);
  model3.scale.set(5, 5, 5);
  scene.add(model3);

  // Add to models array and menu
  models.push({
    name: 'Virtual Production',
    model: model3,
    position: randomPosition
  });
  addModelToMenu('Virtual Production', randomPosition);
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

  const randomPosition = getRandomPosition();
  model4.position.copy(randomPosition);
  model4.scale.set(5, 5, 5);
  scene.add(model4);

  // Add to models array and menu
  models.push({
    name: 'EIQ',
    model: model4,
    position: randomPosition
  });
  addModelToMenu('EIQ', randomPosition);
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

  const randomPosition = getRandomPosition();
  model5.position.copy(randomPosition);
  model5.scale.set(5, 5, 5);
  scene.add(model5);

  // Add to models array and menu
  models.push({
    name: 'Red Triangle',
    model: model5,
    position: randomPosition
  });
  addModelToMenu('Red Triangle', randomPosition);
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

  const randomPosition = getRandomPosition();
  model6.position.copy(randomPosition);
  model6.scale.set(5, 5, 5);
  scene.add(model6);

  // Add to models array and menu
  models.push({
    name: 'LYRIQ',
    model: model6,
    position: randomPosition
  });
  addModelToMenu('LYRIQ', randomPosition);
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

  const randomPosition = getRandomPosition();
  model7.position.copy(randomPosition);
  model7.scale.set(5, 5, 5);
  scene.add(model7);

  // Add to models array and menu
  models.push({
    name: '707',
    model: model7,
    position: randomPosition
  });
  addModelToMenu('707', randomPosition);
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

  const randomPosition = getRandomPosition();
  model8.position.copy(randomPosition);
  model8.scale.set(5, 5, 5);
  scene.add(model8);

  // Add to models array and menu
  models.push({
    name: 'Stop Motion',
    model: model8,
    position: randomPosition
  });
  addModelToMenu('Stop Motion', randomPosition);
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

  const randomPosition = getRandomPosition();
  model9.position.copy(randomPosition);
  model9.scale.set(5, 5, 5);
  scene.add(model9);

  // Add to models array and menu
  models.push({
    name: 'DFCU',
    model: model9,
    position: randomPosition
  });
  addModelToMenu('DFCU', randomPosition);
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

  const randomPosition = getRandomPosition();
  model10.position.copy(randomPosition);
  model10.scale.set(5, 5, 5);
  scene.add(model10);

  // Add to models array and menu
  models.push({
    name: 'YSL',
    model: model10,
    position: randomPosition
  });
  addModelToMenu('YSL', randomPosition);
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

  const randomPosition = getRandomPosition();
  model11.position.copy(randomPosition);
  model11.scale.set(5, 5, 5);
  scene.add(model11);

  // Add to models array and menu
  models.push({
    name: 'XP',
    model: model11,
    position: randomPosition
  });
  addModelToMenu('XP', randomPosition);
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

  const randomPosition = getRandomPosition();
  model12.position.copy(randomPosition);
  model12.scale.set(5, 5, 5);
  scene.add(model12);

  // Add to models array and menu
  models.push({
    name: 'RB',
    model: model12,
    position: randomPosition
  });
  addModelToMenu('RB', randomPosition);
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

// Add this at the top of your file to define sizes
const sizes = {
    width: window.innerWidth,
    height: window.innerHeight
};

// Update the renderer size and camera aspect ratio on window resize
window.addEventListener('resize', () => {
    // Update sizes
    sizes.width = window.innerWidth;
    sizes.height = window.innerHeight;

    // Update renderer size
    renderer.setSize(sizes.width, sizes.height);
    
    // Update camera aspect ratio and projection matrix
    camera.aspect = sizes.width / sizes.height;
    camera.updateProjectionMatrix();
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

// Add after your imports
const models = []; // Array to store all models and their info

// Add this CSS to your HTML file or create a style tag
const style = document.createElement('style');
style.textContent = `
  #modelMenu {
    position: fixed;
    top: 20px;
    right: 20px;
    background: rgba(255, 255, 255, 0.9);
    padding: 15px;
    border-radius: 8px;
    color: #000000;
    z-index: 1000;
    box-shadow: 0 0 10px rgba(255, 255, 255, 0.3);
    font-family: Arial, sans-serif;
    min-width: 150px;
  }
  .menu-item {
    cursor: pointer;
    padding: 8px 12px;
    margin: 4px 0;
    transition: all 0.3s;
    border-radius: 4px;
  }
  .menu-item:hover {
    background: #2196F3;
    color: white;
  }
`;
document.head.appendChild(style);

// Create menu container
const menu = document.createElement('div');
menu.id = 'modelMenu';
document.body.appendChild(menu);

// Function to focus camera on a model
function focusOnModel(position) {
  const duration = 1000; // Animation duration in milliseconds
  const startPosition = camera.position.clone();
  const startTarget = controls.target.clone();
  const endTarget = position.clone();
  const endPosition = position.clone().add(new THREE.Vector3(0, 0, 10)); // Camera position 10 units away
  
  const startTime = performance.now();
  
  function animate(currentTime) {
    const elapsed = currentTime - startTime;
    const progress = Math.min(elapsed / duration, 1);
    
    // Use easing function for smooth animation
    const easeProgress = 1 - Math.cos((progress * Math.PI) / 2);
    
    camera.position.lerpVectors(startPosition, endPosition, easeProgress);
    controls.target.lerpVectors(startTarget, endTarget, easeProgress);
    controls.update();
    
    if (progress < 1) {
      requestAnimationFrame(animate);
    }
  }
  
  requestAnimationFrame(animate);
}

// Function to add model to menu
function addModelToMenu(modelName, position) {
  const menuItem = document.createElement('div');
  menuItem.className = 'menu-item';
  menuItem.textContent = modelName;
  menuItem.addEventListener('click', () => focusOnModel(position));
  menu.appendChild(menuItem);
}

window.addEventListener('click', onClick, false);

function onClick(event) {
    mouse.x = (event.clientX / window.innerWidth) * 2 - 1;
    mouse.y = -(event.clientY / window.innerHeight) * 2 + 1;

    raycaster.setFromCamera(mouse, camera);
    const intersects = raycaster.intersectObjects(scene.children, true);

    if (intersects.length > 0) {
        // Find the model that was clicked
        const clickedObject = intersects[0].object;
        const modelInfo = models.find(m => m.model.uuid === clickedObject.parent.uuid);
        
        if (modelInfo) {
            window.location.href = `project.html?project=${encodeURIComponent(modelInfo.name)}`;
        }
    }
}

function createVideoElement(src) {
    const video = document.createElement('video');
    video.crossOrigin = "anonymous";
    video.src = src;
    video.loop = true;
    video.muted = true;
    video.playsInline = true;
    
    // Add error handling
    video.onerror = function() {
        console.error(`Error loading video: ${src}`);
        console.error('Error code:', video.error?.code);
        console.error('Error message:', video.error?.message);
    };
    
    video.onloadeddata = function() {
        console.log(`Video loaded successfully: ${src}`);
    };
    
    video.play().catch(function(error) {
        console.log("Video play failed:", error);
        // Handle autoplay failure
        video.muted = true;
        video.play().catch(console.error);
    });
    
    return video;
}
