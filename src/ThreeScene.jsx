import { useEffect, useRef } from 'react'
import * as THREE from 'three'

export default function ThreeScene() {
  const mountRef = useRef(null)

  useEffect(() => {
    const mount = mountRef.current
    if (!mount) return

    const scene = new THREE.Scene()
    scene.fog = new THREE.FogExp2(0x071020, 0.02)

    const width = mount.clientWidth
    const height = mount.clientHeight

    const camera = new THREE.PerspectiveCamera(45, width / height, 0.1, 1000)
    camera.position.set(0, 0.8, 3)

    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true })
    renderer.setSize(width, height)
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))
    renderer.outputEncoding = THREE.sRGBEncoding
    mount.appendChild(renderer.domElement)

    // lights
    const hemi = new THREE.HemisphereLight(0xffffff, 0x444444, 0.6)
    hemi.position.set(0, 1, 0)
    scene.add(hemi)
    const dir = new THREE.DirectionalLight(0xffffff, 0.8)
    dir.position.set(5, 5, 5)
    scene.add(dir)

    // main object - torus knot with soft material
    const geometry = new THREE.TorusKnotGeometry(0.6, 0.18, 140, 24)
    const material = new THREE.MeshStandardMaterial({
      color: 0x7c3aed,
      metalness: 0.3,
      roughness: 0.25,
      emissive: 0x062638,
      emissiveIntensity: 0.2,
    })
    const mesh = new THREE.Mesh(geometry, material)
    mesh.rotation.x = 0.6
    scene.add(mesh)

    // subtle orbiting small spheres
    const group = new THREE.Group()
    for (let i = 0; i < 6; i++) {
      const s = new THREE.Mesh(new THREE.SphereGeometry(0.06, 16, 16), new THREE.MeshStandardMaterial({ color: 0x06b6d4 }))
      const a = (i / 6) * Math.PI * 2
      s.position.set(Math.cos(a) * 1.4, Math.sin(a) * 0.5, Math.sin(a) * 0.6)
      group.add(s)
    }
    scene.add(group)

    let raf = null
    const clock = new THREE.Clock()

    function animate() {
      const t = clock.getElapsedTime()
      mesh.rotation.y = t * 0.35
      mesh.rotation.x = 0.6 + Math.sin(t * 0.6) * 0.05
      group.rotation.y = -t * 0.2
      renderer.render(scene, camera)
      raf = requestAnimationFrame(animate)
    }
    animate()

    function handleResize() {
      const w = mount.clientWidth
      const h = mount.clientHeight
      camera.aspect = w / h
      camera.updateProjectionMatrix()
      renderer.setSize(w, h)
    }
    window.addEventListener('resize', handleResize)

    return () => {
      cancelAnimationFrame(raf)
      window.removeEventListener('resize', handleResize)
      renderer.dispose()
      mount.removeChild(renderer.domElement)
    }
  }, [])

  return <div ref={mountRef} className="three-scene" aria-hidden="true" />
}
