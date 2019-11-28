<template>
  <div class="vws-slot-machine">
    <div class="vws-slot-machine__inner">
      <div class="vws-slot-machine__slot" v-for="(item, idx) in codeArr" :key="idx">
        <NumberSlot :size="size" :numberData="item" :duration="500 * (idx + 2)" />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'vws-slot-machine',
  props: {
    code: {
      type: String,
      default: '0000'
    },
    size: {
      type: String,
      default: 'md'
    }
  },
  components: {
    NumberSlot: () => import('./NumberSlot.vue')
  },
  data () {
    return {
    }
  },
  computed: {
    codeArr () {
      return this.code.split('')
    }
  }
}
</script>

<style lang="scss" scoped>
.vws-slot-machine {
  &__inner {
    display: flex;
    justify-content: center;
  }
  &__slot {
    margin: 0 0.5rem;
  }
}
</style>
