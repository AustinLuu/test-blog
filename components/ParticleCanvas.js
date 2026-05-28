import { useEffect, useRef } from 'react'

function random(low, high) {
  return Math.random() * (high - low) + low
}

class Visual {
  constructor(canvasEl, particles, yVariance, maxParticleRadius) {
    this.canvas = canvasEl
    this.context = this.canvas.getContext('2d')
    this.canvasWidth = 0
    this.canvasHeight = 0
    this.particleLength = particles
    this.yVariance = yVariance
    this.particles = []
    this.particleMaxRadius = maxParticleRadius
    this.rafId = null
    this.handleResizeBind = this.resize.bind(this)
    this.initialize()
    this.render()
  }

  initialize() {
    this.resizeCanvas()
    for (let i = 0; i < this.particleLength; i++) {
      this.particles.push(this.createParticle(i))
    }
    this.bind()
  }

  bind() {
    window.addEventListener('resize', this.handleResizeBind, false)
  }

  unbind() {
    window.removeEventListener('resize', this.handleResizeBind, false)
  }

  resize() {
    this.particles = []
    this.unbind()
    this.initialize()
  }

  resizeCanvas() {
    this.canvasWidth = document.body.offsetWidth
    this.canvasHeight = document.body.offsetHeight
    this.canvas.width = this.canvasWidth * window.devicePixelRatio
    this.canvas.height = this.canvasHeight * window.devicePixelRatio
    this.context = this.canvas.getContext('2d')
    this.context.scale(window.devicePixelRatio, window.devicePixelRatio)
  }

  randomColour() {
    switch (Math.floor(Math.random() * 3)) {
      case 0: return [40, 75, 99]
      case 1: return [132, 165, 157]
      case 2: return [242, 132, 130]
      default: return [40, 75, 99]
    }
  }

  createParticle(id, isRecreate) {
    const radius = random(2, this.particleMaxRadius)
    const x = isRecreate ? -radius : random(0, this.canvasWidth)
    let y = random(this.canvasHeight / 2 - this.yVariance, this.canvasHeight / 2 + this.yVariance)
    y += random(-this.yVariance / 2, this.yVariance / 2)
    const alpha = random(0.05, 0.5)
    const col = this.randomColour()
    return {
      id: id,
      x: x,
      y: y,
      startY: y,
      radius: radius,
      startAngle: 0,
      endAngle: Math.PI * 2,
      alpha: alpha,
      color: { r: col[0], g: col[1], b: col[2] },
      speed: alpha,
      amplitude: random(50, 250)
    }
  }

  drawParticles() {
    this.particles.forEach(particle => {
      this.moveParticle(particle)
      this.context.beginPath()
      this.context.fillStyle = `rgba(${particle.color.r}, ${particle.color.g}, ${particle.color.b}, ${particle.alpha})`
      this.context.arc(particle.x, particle.y, particle.radius, particle.startAngle, particle.endAngle)
      this.context.fill()
    })
  }

  moveParticle(particle) {
    particle.x += particle.speed
    particle.y = particle.startY + particle.amplitude * Math.sin((particle.x * Math.PI) / (360 * 2))
  }

  render() {
    this.context.clearRect(0, 0, this.canvasWidth + this.particleMaxRadius * 2, this.canvasHeight)
    const style = getComputedStyle(document.body)
    this.context.fillStyle = style.getPropertyValue('--light')
    this.context.fillRect(0, 0, this.canvas.width, this.canvas.height)
    this.drawParticles()
    this.particles.forEach(particle => {
      if (particle.x - particle.radius >= this.canvasWidth) {
        this.particles[particle.id] = this.createParticle(particle.id, true)
      }
    })
    this.rafId = requestAnimationFrame(this.render.bind(this))
  }

  destroy() {
    if (this.rafId !== null) {
      cancelAnimationFrame(this.rafId)
      this.rafId = null
    }
    this.unbind()
  }
}

const ParticleCanvas = () => {
  const canvasRef = useRef(null)

  useEffect(() => {
    const prefersReducedMotion =
      window.matchMedia('(prefers-reduced-motion: reduce)').matches

    const canvas = canvasRef.current
    if (!canvas) return

    if (prefersReducedMotion) {
      // Just fill the canvas with the background color — no animation
      const ctx = canvas.getContext('2d')
      canvas.width = document.body.offsetWidth * window.devicePixelRatio
      canvas.height = document.body.offsetHeight * window.devicePixelRatio
      ctx.scale(window.devicePixelRatio, window.devicePixelRatio)
      const style = getComputedStyle(document.body)
      ctx.fillStyle = style.getPropertyValue('--light')
      ctx.fillRect(0, 0, canvas.width / window.devicePixelRatio, canvas.height / window.devicePixelRatio)
      return
    }

    const visual = new Visual(canvas, 150, 150, 8)

    return () => {
      visual.destroy()
    }
  }, [])

  return <canvas id="canvas" ref={canvasRef}></canvas>
}

export default ParticleCanvas
