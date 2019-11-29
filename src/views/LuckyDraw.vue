<template>
  <div class="vws-lucky-draw text-center">
    <div class="vws-lucky-draw__wrapper">
      <SlotMachine size="lg" :code="selectedCandidate.code" />
      <div class="vws-button__group text-center">
        <b-button :class="drawBtnClass" size="lg" variant="success" @click="getRandomCandidate">
          <span v-if="!isSending">Draw</span>
          <b-spinner label="Sending..." v-else></b-spinner>
        </b-button>
        <b-button class="vws-button vws-button--xl" size="lg" variant="info" @click="showCandidateInfo">Show Info</b-button>
      </div>
    </div>
    <b-modal
      id="info-modal"
      centered
      hide-footer
      title="Congratulation!"
      ok-only>
      <div class="vws-info">
        <div class="vws-info__item">Full name: {{ selectedCandidate.name }}</div>
        <div class="vws-info__item">Email: {{ selectedCandidate.email }}</div>
        <div class="vws-info__item">Phone: {{ selectedCandidate.phone }}</div>
        <div class="vws-info__item">Code: {{ selectedCandidate.code }}</div>
      </div>
    </b-modal>
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
      selectedCandidate: {},
      isSending: false
    }
  },
  computed: {
    drawBtnClass () {
      return {
        'vws-button vws-button--xl': true,
        'vws-button--disabled': this.isSending
      }
    }
  },
  methods: {
    ...mapActions({
      increaseSpinCounter: 'increaseSpinCounter'
    }),
    getRandomCandidate () {
      // Active indicator
      this.isSending = true
      getRandomCandidate().then(response => {
        // Update selected candidate
        this.selectedCandidate = response.data

        // Increase spinCounter
        this.increaseSpinCounter()

        // Deactive indicator
        this.isSending = false
      }).catch(error => {
        this.$bvToast.toast(error.response.data.message, {
          title: 'Error',
          variant: 'danger'
        })
      })
    },
    showCandidateInfo () {
      this.$bvModal.show('info-modal')
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
  margin: 0 auto;
  max-width: 45rem;
  min-height: 30rem;
  border-radius: 0.5rem;
  background-image: linear-gradient(180deg, #6d2077, #d91c57);

  @media screen and (max-width: 667px) {
    min-height: 20rem;
  }

  @media screen and (max-width: 380px) {
    min-height: 15rem;
  }
}
</style>
