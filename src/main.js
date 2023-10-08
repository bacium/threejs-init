import * as THREE from "three"

// 导入轨道控制器
import { OrbitControls } from "three/addons/controls/OrbitControls.js"
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

// 轨道控制器
const controls = new OrbitControls(camera, renderer.domElement)
// 开启旋转阻尼
controls.enableDamping = true
// 设置阻尼系数
controls.dampingFactory = 0.01
// controls.autoRotate = true

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
camera.position.y = 2
camera.position.x = 2
camera.lookAt(0, 0, 0)

// 添加轨道
const axesHelper = new THREE.AxesHelper(5)
scene.add(axesHelper)

// 持续变化-定义一个渲染函数
function animate() {
  controls.update()
  requestAnimationFrame(animate)
  // 旋转
  // cube.rotation.x += 0.01
  // cube.rotation.y += 0.01
  // 渲染
  renderer.render(scene, camera)
}
animate()
