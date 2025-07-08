<template>
  <div id="game" ref="gameContainer" class="game-container">
    <div class="info">
      <h2>跳一跳模拟小游戏</h2>
      <div id="score">当前分数: {{state.score}}</div>
    </div>
  </div>
</template>
<script lang="ts" setup>

import * as THREE from 'three';
import { onMounted, onUnmounted, ref, reactive } from 'vue';

let animationId: number;

// 响应式引用
const gameContainer = ref<HTMLElement | null>(null);

// Three.js 对象声明
let scene: THREE.Scene;
let camera: THREE.PerspectiveCamera;
let renderer: THREE.WebGLRenderer;
// 移动的小人
let player;

// 每次移动的起始位置
const cameraFocus = { x: 0, y: 0, z: 0 };

const currentCubePos = {x: 0, y: 0, z: 0};
let direction = 'right';

let pressed = false;
let speed = 0;
let speedY = 0;

let stopped = false;
const state = reactive({
  score: -100
})

// 设置窗口宽高移动端待适配
const getWindowSize = () => ({
  width: 1200,
  height: 600
});

// 初始化Three.js场景
function initThreeJS() {
  const { width, height } = getWindowSize();
  
  // 创建场景
  scene = new THREE.Scene();
  
  // 创建相机 - 调整视野角度和位置 （45度，宽高比，看到最近处0.1 最远处1000）
  camera = new THREE.PerspectiveCamera(45, width / height, 0.1, 1000);
  camera.position.set(100, 100, 100);
  camera.lookAt(scene.position); // 确保相机朝向场景中心
  
  // 创建渲染器
  renderer = new THREE.WebGLRenderer({ antialias: true });
  renderer.setSize(width, height);
  renderer.setClearColor(0xc6c9d2); // 设置渲染器背景色

  // 添加光源
  addLights();

  // 添加小人玩家（还待优化）
  player = createPlayer();

  // 创建立方体
  createCube(0, 0);

  //添加坐标辅助器
  addAxesHelper();
  
  // 添加到DOM
  if (gameContainer.value) {
    gameContainer.value.appendChild(renderer.domElement);

    document.body.addEventListener('mousedown', () => {
      speed = 0;
      speedY = 0;
      pressed = true;  // 确定按钮已经被按压
    });
    document.body.addEventListener('mouseup', () => {
      pressed = false; // 确定按钮按压结束
    })
  }
}
// function movePlayer() {
//   player.position.y += speedY;

//   if(player.position.y < 17.5) {
//     player.position.y = 17.5;

//     if(!stopped){
//       if(playerInCube()) {
//         state.score ++;
//         console.log("score++分数:", state.score);
//         return;
//       }
//       else {
//         console.log("失败了，当前分数为:" +state.score)
//       }

//       const distance = Math.floor(50 + Math.random() * 100);

//       const num = Math.random();
//       if(num > 0.5) {
//           currentCubePos.z -= distance;
//           direction = 'right';
//       } else {
//           currentCubePos.x -= distance;
//           direction = 'left';
//       }
//       createCube(currentCubePos.x, currentCubePos.z);
//     }
//     stopped = true;

//   } else {
//     stopped = false;
//     if(direction === 'right') {
//         player.position.z -= speed;
//     } else {
//         player.position.x -= speed;
//     }
//   }
//   speedY -= 0.3;
// }


// 创建立方体
function createCube(x, z) {
  const geometry = new THREE.BoxGeometry( 30, 20, 30 );
  const material = new THREE.MeshPhongMaterial( {color: 0xf6f6f6} );
  const cube = new THREE.Mesh( geometry, material ); 
  cube.position.x = x;
  cube.position.z = z;
  scene.add( cube );
}

// 创建小人玩家头像
function createPlayer() {
  const geometry = new THREE.BoxGeometry( 5, 15, 5 );
  const material = new THREE.MeshPhongMaterial( {color:0x3c364e } );
  const player = new THREE.Mesh( geometry, material); 
  player.position.x = 0;
  player.position.y = 17.5;
  player.position.z = 0;
  scene.add( player )
  return player;
}

// 添加坐标系
const addAxesHelper = () => {
  const axesHelper = new THREE.AxesHelper( 1000 );
  axesHelper.position.set(0,0,0);
  scene.add( axesHelper );
};

// 添加光源
function addLights() {
  const directionalLight = new THREE.DirectionalLight( 0xffffff );
  directionalLight.position.set(40, 100, 60);
  scene.add( directionalLight );
}

function moveCamera() {
    if(player.position.y > 17.5) {
        if(direction === 'right') {
            camera.position.z -= speed;
            cameraFocus.z -= speed;
        } else {
            camera.position.x -= speed;
            cameraFocus.x -= speed;
        }
        
        camera.lookAt(cameraFocus.x, cameraFocus.y, cameraFocus.z);
    }
}

function playerInCube() {
  if(direction === 'right') {
      if( player.position.z < currentCubePos.z + 15 && player.position.z > currentCubePos.z - 15) {
          return true;
      }
  } else if(direction === 'left') {
      if( player.position.x < currentCubePos.x + 15 && player.position.x > currentCubePos.x - 15) {
          return true;
      }
  }
  return false;
}

function movePlayer() {
    player.position.y += speedY;

    if(player.position.y < 17.5) {
        player.position.y = 17.5;

        if(stopped === false){

            if(playerInCube()) {
                state.score+= 999;
                // document.getElementById('score').innerHTML = score;

                const distance = Math.floor(50 + Math.random() * 100);

                const num = Math.random();
                if(num > 0.5) {
                    currentCubePos.z -= distance;
                    direction = 'right';
                } else {
                    currentCubePos.x -= distance;
                    direction = 'left';
                }
                createCube(currentCubePos.x, currentCubePos.z);
            } else {
              alert("失败了，当前分数为:" + state.score);
              setTimeout(() => {
                window.location.reload();
              }, 500);
                // document.getElementById('fail').style.display = 'block';
                // document.getElementById('score2').innerHTML = score;
            }

        }

        stopped = true;
    } else {
        stopped = false;
        if(direction === 'right') {
            player.position.z -= speed;
        } else {
            player.position.x -= speed;
        }
    }
    speedY -= 0.3;
}

function speedUp() {
  if(pressed) {
      speed += 0.1;
      speedY += 0.1;

      if(player.scale.y> 0) {
          player.scale.y -= 0.001;
      }
      player.position.y -= 15 - 15 * player.scale.y

      if(player.position.y < 10) {
          player.position.y = 10;
      }
  } else {
      player.scale.y = 1;
  }
}

// 渲染循环
function render() {
  // 如果按压结束就开始移动
  if(!pressed){
    moveCamera();
    movePlayer();
  }
  speedUp();

  // 渲染场景
  renderer.render(scene, camera);
  animationId = requestAnimationFrame(render);
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
  initThreeJS();
  render();
  // 监听窗口大小变化
  window.addEventListener('resize', onWindowResize);
});

// 组件卸载时清理
onUnmounted(() => {
  //停止动画循环
  if(animationId){
    cancelAnimationFrame(animationId);
    animationId = 0;
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