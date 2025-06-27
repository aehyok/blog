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
  scene.background = new THREE.Color(0x222222); // 设置背景色
  
  // 创建相机 - 调整视野角度和位置
  camera = new THREE.PerspectiveCamera(75, width / height, 0.1, 1000);
  camera.position.set(0, 0, 5); // 距离更近一些
  
  // 创建渲染器
  renderer = new THREE.WebGLRenderer({ antialias: true });
  renderer.setSize(width, height);
  renderer.setPixelRatio(window.devicePixelRatio);
  
  // 创建立方体
  createCube();
  
  // 添加光源
  addLights();
  
  // 添加到DOM
  if (gameContainer.value) {
    gameContainer.value.appendChild(renderer.domElement);
  }
}

// 创建立方体
function createCube() {
  const geometry = new THREE.BoxGeometry(1, 1, 1); // 使用标准尺寸
  const material = new THREE.MeshPhongMaterial({ 
    color: 0x00ff00,
    shininess: 100
  });
  cube = new THREE.Mesh(geometry, material);
  cube.rotation.y = 0.5;
  cube.rotation.x = 0.5;
  scene.add(cube);
}

// 添加光源
function addLights() {
  // 环境光 - 提供基础照明
  const ambientLight = new THREE.AmbientLight(0x404040, 0.4);
  scene.add(ambientLight);
  
  // 方向光 - 提供主要照明
  const directionalLight = new THREE.DirectionalLight(0xffffff, 0.8);
  directionalLight.position.set(5, 5, 5);
  scene.add(directionalLight);
  
  // 点光源 - 增加立体感（可选）
  const pointLight = new THREE.PointLight(0xffffff, 0.5);
  pointLight.position.set(-5, 5, 5);
  scene.add(pointLight);
}

// 渲染循环
function animate() {
  animationId = requestAnimationFrame(animate);
  
  // 旋转立方体
  if (cube) {
    cube.rotation.x += 0.01;
    cube.rotation.y += 0.01;
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