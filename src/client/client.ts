
import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';

const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
camera.position.z = 20;


const renderer = new THREE.WebGLRenderer()
renderer.setSize(window.innerWidth, window.innerHeight)
document.body.appendChild(renderer.domElement)

new OrbitControls(camera, renderer.domElement);

const cubeGeometry = new THREE.BoxGeometry(5, 5, 5);
const material = new THREE.MeshBasicMaterial({ color: "red" });
const cubeMesh = new THREE.Mesh(cubeGeometry, material);
cubeMesh.position.setX(30);
cubeMesh.position.setY(30);
scene.add(cubeMesh);

const bluecubeGeometry = new THREE.BoxGeometry(5, 5, 5);
const bluematerial = new THREE.MeshBasicMaterial({ color: "blue" });
const bluecubeMesh = new THREE.Mesh(bluecubeGeometry, bluematerial);
bluecubeMesh.position.setX(30);
bluecubeMesh.position.setZ(30);
scene.add(bluecubeMesh);


const axisControl = new THREE.AxesHelper(100);
scene.add(axisControl);
window.addEventListener('resize', onWindowResize, false)
function onWindowResize() {
  camera.aspect = window.innerWidth / window.innerHeight
  camera.updateProjectionMatrix()
  renderer.setSize(window.innerWidth, window.innerHeight)
  render()
}

function animate() {
  requestAnimationFrame(animate);
  render();
}

function render() {
  renderer.render(scene, camera)
}

animate()