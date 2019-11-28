<template>
  <div class="vws-lucky-draw text-center">
    <div class="vws-lucky-draw__wrapper">
      <SlotMachine size="lg" :code="code" />
      <div class="vws-button__group text-center">
        <b-button class="vws-button vws-button--xl" size="lg" variant="success" @click="getRandomCandidate">Draw</b-button>
      </div>
    </div>
  </div>
</template>

<script>
import { getRandomCandidate } from '@/services/candidate'
import { mapActions } from 'vuex'

export default {
  name: 'vws-lucky-draw',
  components: {
    SlotMachine: () => import('@/components/SlotMachine.vue')
  },
  data () {
    return {
      code: '0000'
    }
  },
  methods: {
    ...mapActions({
      increaseSpinCounter: 'increaseSpinCounter'
    }),
    getRandomCandidate () {
      getRandomCandidate().then(response => {
        // Update code
        this.code = response.data.code
        // Increase spinCounter
        this.increaseSpinCounter()
      }).catch(error => {
        this.$bvToast.toast(error.response.data.message, {
          title: 'Error',
          variant: 'danger'
        })
      })
    }
  }
}
</script>

<style lang="scss" scoped>

.vws-lucky-draw {
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 2rem;
  margin: 2rem auto 0;
  max-width: 45rem;
  min-height: 30rem;
  border-radius: 0.5rem;
  background-image: linear-gradient(180deg, #6d2077, #d91c57);
}
</style>
