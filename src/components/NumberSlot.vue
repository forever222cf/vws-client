<template>
  <div :class="slotClass">
    {{ localNumber }}
  </div>
</template>

<script>
import { mapState } from 'vuex'

export default {
  name: 'vws-number-slot',
  props: {
    numberData: {
      type: String
    },
    duration: {
      type: Number,
      default: 500 // ms
    },
    size: {
      type: String,
      default: 'md'
    }
  },
  data () {
    return {
      localNumber: 0,
      intervalObj: null
    }
  },
  computed: {
    ...mapState({
      spinCounter: state => state.spinCounter
    }),
    slotClass () {
      return [
        'vws-number-slot',
        `vws-number-slot--${this.size}`
      ]
    }
  },
  watch: {
    spinCounter () {
      this.changeNumber()
    }
  },
  methods: {
    changeNumber () {
      // Clear interval
      clearInterval(this.intervalObj)

      // Start
      this.intervalObj = setInterval(function () {
        this.localNumber = this.getRandomInt(0, 9)
      }.bind(this), 30)

      // Turn off after ${duration}
      setTimeout(function () {
        // Stop interval
        clearInterval(this.intervalObj)

        // Set correct number
        this.localNumber = this.numberData
      }.bind(this), this.duration)
    }
  },
  mounted () {
    this.changeNumber()
  }
}
</script>

<style lang="scss" scoped>

.vws-number-slot {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 1.6em;
  height: 1.6em;
  font-weight: 700;
  font-size: 2.5rem;
  color: $color-white;
  border: 0.1em solid;
  border-radius: 0.5rem;

  &--lg {
    font-size: 4rem;

    @media screen and (max-width: 667px) {
      font-size: 3rem;
    }

    @media screen and (max-width: 480px) {
      font-size: 2.5rem;
    }

    @media screen and (max-width: 380px) {
      font-size: 2rem;
    }
  }
}
</style>
