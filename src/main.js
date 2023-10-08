import * as THREE from "three"

// 创建场景
const scene = new THREE.Scene()
// 创建相机
const camera = new THREE.PerspectiveCamera(
  45,
  window.innerWidth / window.innerHeight,
  0.1,
  1000
)

// 创建渲染器
const renderer = new THREE.WebGLRenderer()
// 渲染器尺寸
renderer.setSize(window.innerWidth, window.innerHeight)
// 把创建的渲染器放置到页面上渲染出来
document.body.appendChild(renderer.domElement)

// 创建几何体
const geometry = new THREE.BoxGeometry(1, 1, 1)
// 创建材质
const material = new THREE.MeshBasicMaterial({ color: 0x00ff00 })
// 创建网格
const cube = new THREE.Mesh(geometry, material)

// 把网格添加到场景中
scene.add(cube)
// 相机位置
camera.position.z = 5
camera.lookAt(0, 0, 0)

// 持续变化-定义一个渲染函数
function animate() {
  requestAnimationFrame(animate)
  // 旋转
  cube.rotation.x += 0.01
  cube.rotation.y += 0.01
  // 渲染
  renderer.render(scene, camera)
}
animate()
