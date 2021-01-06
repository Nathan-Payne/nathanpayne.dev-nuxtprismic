// /* eslint-disable unicorn/number-literal-case */
// import * as THREE from 'three'
// import { TrackballControls } from '@/node_modules/three/examples/jsm/controls/TrackballControls.js'

// let renderer
// let camera
// let controls
// let scene
// let width, height, canvas
// if (process.client) {
//   width = window.innerWidth
//   height = window.innerHeight
//   canvas = document.getElementById('landing-render')
// }

// function init() {
//   // RENDERER
//   renderer = new THREE.WebGLRenderer({
//     canvas,
//     antialias: true,
//   })
//   renderer.setClearColor(0x121212)
//   renderer.setPixelRatio(window.devicePixelRatio)
//   renderer.setSize(width, height)

//   // CAMERA
//   camera = new THREE.PerspectiveCamera(70, width / height, 0.1, 1000)
//   camera.position.z = 50

//   // CONTROLS
//   controls = new TrackballControls(camera, canvas)
//   controls.addEventListener('change', render)

//   // SCENE
//   scene = new THREE.Scene()

//   // LIGHTING
//   const light1 = new THREE.AmbientLight(0xffffff, 0.3)
//   const light2 = new THREE.DirectionalLight(0xffffff)
//   light2.position.set(10, 1, 20)

//   scene.add(light1)
//   scene.add(light2)

//   // ON RESIZE
//   window.addEventListener('resize', onWindowResize)
// }

// function animate() {
//   requestAnimationFrame(animate)
//   controls.update()
// }

// function addShapes() {
//   const num = 5
//   for (let i = 0; i < num; i++) {
//     const geometry = new THREE.BoxGeometry(5, 5, 5)
//     const material = new THREE.MeshLambertMaterial()
//     const mesh = new THREE.Mesh(geometry, material)

//     mesh.position.x = i * 10

//     scene.add(mesh)
//   }
// }

// function render() {
//   renderer.render(scene, camera)
// }

// function onWindowResize() {
//   camera.aspect = width / height
//   camera.updateProjectionMatrix()
//   renderer.setSize(width, height)
//   controls.handleResize()
// }

// // UTILITIES
// // function randomNum(min, max) {
// //   return Math.random() * (max - min) + min
// // }

// if (process.client) {
//   init()
//   animate()
//   addShapes()
//   render()
// }
