// Carga Three.js
const THREE = require("three");

// Código del render 3D

// Contenedor del logo
const container = document.getElementById("logo-3d");

// Escena y cámara
const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(
  75,
  container.offsetWidth / container.offsetHeight,
  0.1,
  1000
);

// Posicionamiento de la cámara
camera.position.z = 5;

// Renderer
const renderer = new THREE.WebGLRenderer();
renderer.setSize(container.offsetWidth, container.offsetHeight);
container.appendChild(renderer.domElement);

// Añadir el logo a la escena
scene.add(mesh);

// Animación
function animate() {
  requestAnimationFrame(animate);

  mesh.rotation.y += 0.01;

  renderer.render(scene, camera);
}

animate();
