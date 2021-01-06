<template>
  <canvas id="landing-render"></canvas>
</template>

<script>
/* eslint-disable prefer-const */
/* eslint-disable unicorn/number-literal-case */
import * as THREE from 'three'
// import { TrackballControls } from '@/node_modules/three/examples/jsm/controls/TrackballControls.js'

export default {
  mounted() {
    let renderer
    let camera
    // let controls
    let scene
    let width, height, canvas
    width = window.innerWidth
    height = window.innerHeight - 60
    canvas = document.getElementById('landing-render')

    function init() {
      // RENDERER
      renderer = new THREE.WebGLRenderer({
        canvas,
        antialias: true,
        alpha: true,
      })
      renderer.setClearColor(0x000000, 0)
      renderer.setPixelRatio(window.devicePixelRatio)
      renderer.setSize(width, height)

      // CAMERA
      camera = new THREE.PerspectiveCamera(70, width / height, 2, 200)
      camera.position.set(40, 20, 50)
      camera.lookAt(0, 0, 0)

      // CONTROLS
      // controls = new TrackballControls(camera, canvas)
      // controls.addEventListener('change', render)

      // SCENE
      scene = new THREE.Scene()
      scene.fog = new THREE.Fog(0x1e1f1f, 55, 160)

      // LIGHTING
      const dirLight = new THREE.DirectionalLight(0xffffff, 0.4)
      dirLight.position.set(1, 1, -1).normalize()
      scene.add(dirLight)

      const pointLight = new THREE.PointLight(0xddddff, 1, 500)
      pointLight.position.set(10, -5, 0)
      scene.add(pointLight)

      // ON RESIZE
      window.addEventListener('resize', onWindowResize)
    }

    function addShapes() {
      // add sphere
      const sphereGeo = new THREE.SphereBufferGeometry(40, 16, 16)
      const sphereMat = new THREE.MeshLambertMaterial({
        emissive: 0x222222,
        wireframe: true,
      })
      const sphere = new THREE.Mesh(sphereGeo, sphereMat)
      sphere.position.set(20, -5, -90)
      scene.add(sphere)

      // add cubes
      const cubeGeo = new THREE.BoxBufferGeometry(8, 8, 8)
      const cubeMat = new THREE.MeshLambertMaterial()

      for (let i = 0; i < 25; i++) {
        const cube = new THREE.Mesh(cubeGeo, cubeMat)
        // positions shifted right of DOM elements between ~ -60 to 60 units
        cube.position.x = 18 + 60 * (2.0 * Math.random() - 1.0)
        cube.position.y = -5 + 60 * (2.0 * Math.random() - 1.0)
        cube.position.z = 55 * (2.0 * Math.random() - 1.0)

        cube.rotation.x = Math.random() * Math.PI
        cube.rotation.y = Math.random() * Math.PI
        cube.rotation.z = Math.random() * Math.PI

        scene.add(cube)
      }
    }
    function animate() {
      requestAnimationFrame(animate)
      camera.position.x -= 0.01
      camera.rotation.y -= 0.00009
      camera.position.z += Math.sin(camera.position.z * Math.PI)
      // controls.update() // camera controls for testing and fun
      render()
    }

    function render() {
      renderer.render(scene, camera)
    }

    function onWindowResize() {
      width = window.innerWidth
      height = window.innerHeight
      camera.aspect = width / height
      camera.updateProjectionMatrix()
      renderer.setSize(width, height)
      // controls.handleResize()
    }

    // UTILITIES
    // function randNum(min, max) {
    //   return Math.random() * (max - min) + min
    // }

    init()
    addShapes()
    animate()
    render()
  },
}
</script>

<style scoped>
#landing-render {
  position: absolute;
  top: 0;
  right: 0;
  height: 80vh;
  width: 80vw;
}
</style>
