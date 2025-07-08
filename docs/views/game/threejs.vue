<template>
  <div id="game" ref="gameContainer" class="game-container">
    <div class="info">
      <h2>Three.js Vue3 入门例子</h2>
      <p>一个旋转的绿色立方体</p>
    </div>
  </div>
</template>
<script lang="ts" setup>

import * as THREE from 'three';
import { onMounted, onUnmounted, ref } from 'vue';

// 响应式引用
const gameContainer = ref<HTMLElement | null>(null);

// Three.js 对象声明
let scene: THREE.Scene;
let camera: THREE.PerspectiveCamera;
let renderer: THREE.WebGLRenderer;
let cube: THREE.Mesh;
let animationId: number;
// 移动的小人
let player;

// camera 聚焦位置
let focusPos = { x: 0, y: 0, z: 0 };

const targetCameraPos = { x: 100, y: 100, z: 100 };

// 每次移动的起始位置
const cameraFocus = { x: 0, y: 0, z: 0 };
// 每次移动后的终点位置
const targetCameraFocus = { x: 0, y: 0, z: 0 };


const playerPos = { x: 0, y: 17.5, z: 0};
const targetPlayerPos = { x: 0, y: 17.5, z: 0};
let speed = 0;

// 获取窗口尺寸
const getWindowSize = () => ({
  width: 1200,
  height: 600
});

// 初始化Three.js场景
function initThreeJS() {
  const { width, height } = getWindowSize();
  
  // 创建场景
  scene = new THREE.Scene();
  
  // 创建相机 - 调整视野角度和位置
  camera = new THREE.PerspectiveCamera(45, width / height, 0.1, 1000);
  camera.position.set(100, 100, 100);
  camera.lookAt(scene.position); // 确保相机朝向场景中心
  
  // 创建渲染器
  renderer = new THREE.WebGLRenderer({ antialias: true });
  renderer.setSize(width, height);
  renderer.setClearColor(0x333333, 1); // 设置渲染器背景色
  renderer.setPixelRatio(window.devicePixelRatio);

  // 添加光源
  addLights();

  // 创建立方体
  createCube(0, 0);
  createCube(0, -100);
  createCube(0, -200);
  createCube(0, -300);
  createCube(-100, 0);
  createCube(-200, 0);
  createCube(-300, 0);


  //添加坐标辅助器
  addAxesHelper();
  
  player = createPlayer();
  // 添加到DOM
  if (gameContainer.value) {
    gameContainer.value.appendChild(renderer.domElement);

    document.body.addEventListener('click', () => {
      targetCameraPos.z = camera.position.z - 100

      targetCameraFocus.z -= 100

      targetPlayerPos.z -= 100;
      speed = 5;

    });
  }
}

function moveCamera() {
  const { x, z } = camera.position;
  if(x > targetCameraPos.x) {
      camera.position.x -= 3;
  }
  if(z > targetCameraPos.z) {
      camera.position.z -= 3;
  }

  if(cameraFocus.x > targetCameraFocus.x) {
      cameraFocus.x -= 3;
  }
  if(cameraFocus.z > targetCameraFocus.z) {
      cameraFocus.z -= 3;
  }

  camera.lookAt(cameraFocus.x, cameraFocus.y, cameraFocus.z);  
}

function movePlayer() {
  if(player.position.x > targetPlayerPos.x) {
      player.position.x -= 3;
  }
  if(player.position.z > targetPlayerPos.z) {
      player.position.z -= 3;
  }
  player.position.y += speed;
  speed -= 0.3;

  if(player.position.y < 17.5) {
      player.position.y = 17.5;
  }
}

function createCube(x, z) {
  const geometry = new THREE.BoxGeometry( 30, 20, 30 );
  const material = new THREE.MeshPhongMaterial( {color: 0xffffff} );
  const cube = new THREE.Mesh( geometry, material ); 
  cube.position.x = x;
  cube.position.z = z;
  scene.add( cube );
}

function createPlayer() {
  const geometry = new THREE.BoxGeometry( 5, 15, 5 );
  const material = new THREE.MeshPhongMaterial( {color: 0x000000} );
  const player = new THREE.Mesh( geometry, material); 
  player.position.x = 0;
  player.position.y = 17.5;
  player.position.z = 0;
  scene.add( player )
  return player;
}


const addAxesHelper = () => {
  const axesHelper = new THREE.AxesHelper( 1000 );
  axesHelper.position.set(0,0,0);
  scene.add( axesHelper );
};

// 添加光源
function addLights() {
  const directionalLight = new THREE.DirectionalLight( 0xffffff , 1.0 );
  directionalLight.position.set(40, 100, 60);

  scene.add( directionalLight );
}

// 渲染循环
function render() {
  moveCamera();
  movePlayer();

  // 渲染场景
  renderer.render(scene, camera);
  requestAnimationFrame(render);
}

// 处理窗口大小变化
function onWindowResize() {
  const { width, height } = getWindowSize();

  camera.aspect = width / height;
  camera.updateProjectionMatrix();
  
  renderer.setSize(width, height);
}

// 组件挂载时初始化
onMounted(() => {
  console.log(THREE, "--THREE加载成功--");
  
  initThreeJS();
  render();
  
  // 监听窗口大小变化
  window.addEventListener('resize', onWindowResize);
});

// 组件卸载时清理
onUnmounted(() => {
  //停止动画循环
  if (animationId) {
    cancelAnimationFrame();
  }
  
  // 清理Three.js对象
  if (renderer) {
    renderer.dispose();
  }
  // 移除事件监听器
  window.removeEventListener('resize', onWindowResize);
});
</script>

<style scoped>
.game-container {
  position: relative;
  overflow: hidden;
  /* background: #000; */
}

.info {
  position: absolute;
  top: 20px;
  left: 20px;
  color: white;
  font-family: Arial, sans-serif;
  z-index: 100;
  background: rgba(0, 0, 0, 0.7);
  padding: 15px;
  border-radius: 8px;
}

.info h2 {
  margin: 0 0 10px 0;
  font-size: 18px;
}

.info p {
  margin: 0;
  font-size: 14px;
  opacity: 0.8;
}
</style>