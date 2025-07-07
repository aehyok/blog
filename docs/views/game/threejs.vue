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
  scene.background = new THREE.Color(0xcccccc); // 设置背景色
  
  // 创建相机 - 调整视野角度和位置
  camera = new THREE.PerspectiveCamera(45, width / height, 0.1, 1000);
  camera.position.set(100, 100, 100);
  camera.lookAt(0, 0, 0); // 确保相机朝向场景中心
  
  // 创建渲染器
  renderer = new THREE.WebGLRenderer({ antialias: true });
  renderer.setSize(width, height);
  // renderer.setClearColor(0x333333, 1); // 设置渲染器背景色
  // renderer.setPixelRatio(window.devicePixelRatio);
  
  // 创建立方体
  createCube(0, 0);
  createCube(0, -100);
  createCube(0, -200);
  createCube(0, -300);
  createCube(-100, 0);
  createCube(-200, 0);
  createCube(-300, 0);
  
  // 添加光源
  addLights();

  //添加坐标辅助器
  addAxesHelper();
  
  // 添加到DOM
  if (gameContainer.value) {
    gameContainer.value.appendChild(renderer.domElement);
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


// 创建立方体
// function createCube() {
//   const geometry = new THREE.BoxGeometry( 30, 20, 30 );
//   const material = new THREE.MeshPhongMaterial( {color: 0x00ff00 , shininess: 100, specular: 0x111111} ); // 改为绿色便于观察
//   cube = new THREE.Mesh( geometry, material ); 
//   scene.add( cube );

//   const geometry2 = new THREE.BoxGeometry( 30, 20, 30 );
//   const material2 = new THREE.MeshPhongMaterial( {color: 0xff0000  ,shininess: 100, specular: 0x111111} ); // 改为红色便于区分
//   const cube2 = new THREE.Mesh( geometry2, material2 ); 
//   cube2.position.z = -50;
//   scene.add( cube2 );    
// }

const addAxesHelper = () => {
  const axesHelper = new THREE.AxesHelper( 1000 );
  axesHelper.position.set(0,0,0);
  scene.add( axesHelper );
};

// 添加光源
function addLights() {
  const directionalLight = new THREE.DirectionalLight( 0xcccccc, 1.0 );
  directionalLight.position.set(40, 100, 60);

  scene.add( directionalLight );

  // // 环境光 - 降低强度让明暗对比更强
  const ambientLight = new THREE.AmbientLight( 0x404040, 0.2 );
  scene.add( ambientLight );
}

// 渲染循环
function animate() {
  animationId = requestAnimationFrame(animate);
  
  // 旋转立方体以观察光照效果
  if (cube) {
    // cube.rotation.x += 0.01;
    // cube.rotation.y += 0.01;
  }
  
  // 渲染场景
  renderer.render(scene, camera);
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
  animate();
  
  // 监听窗口大小变化
  window.addEventListener('resize', onWindowResize);
});

// 组件卸载时清理
onUnmounted(() => {
  // 停止动画循环
  if (animationId) {
    cancelAnimationFrame(animationId);
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
  background: #000;
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