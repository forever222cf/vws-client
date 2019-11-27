<template>
  <div class="vws-spin">
    <canvas ref="canvas" :width="width" :height="height" class="vws-spin__canvas"></canvas>
  </div>
</template>

<script>
export default {
  name: 'vws-spin',
  data () {
    return {
      width: 700,
      height: 700
    }
  },
  methods: {
    drawSpin () {
      if (this.$refs.canvas) {
        let ctx = this.$refs.canvas.getContext('2d')
        let time = new Date()

        ctx.clearRect(0, 0, this.width, this.height)

        ctx.fillStyle = 'green'
        ctx.strokeStyle = 'purple'
        ctx.lineWidth = 2

        ctx.beginPath()
        // ctx.arc(this.width / 2, this.height / 2, 300, 0, 2 * Math.PI)
        ctx.arc(this.width / 2, this.height / 2, 300, 0, ((2 * Math.PI) / 60) * time.getSeconds())

        // let pie = new Path2D()

        // ctx.fill()
        ctx.stroke()

        window.requestAnimationFrame(this.drawSpin)
      }
    }
  },
  mounted () {
    window.requestAnimationFrame(this.drawSpin)
  },
  beforeDestroy () {
    window.cancelAnimationFrame(this.drawSpin)
  }
}
</script>

<style lang="scss" scoped>
.vws-spin {
  &__canvas {
    border: 1px solid;
    max-height: 100vh;
  }
}
</style>
