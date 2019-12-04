<template>
  <div class="vws-form">
    <!-- Form -->
    <b-form @submit.stop.prevent="handleSubmit" @reset.stop.prevent="handleReset">
      <b-form-group
        id="input-group-name"
        label="Full name"
        label-for="input-name">
        <b-form-input
          id="input-name"
          v-model="$v.formData.name.$model"
          :state="$v.formData.name.$dirty ? !$v.formData.name.$error : null"
          aria-describedby="input-name-feedback"
          required
          :placeholder="placeholder.name"></b-form-input>
        <b-form-invalid-feedback id="input-name-feedback">This is a require field.</b-form-invalid-feedback>
      </b-form-group>

      <b-form-group
        id="input-group-email"
        label="Email address"
        label-for="input-email">
        <b-form-input
          id="input-email"
          v-model="$v.formData.email.$model"
          :state="$v.formData.email.$dirty ? !$v.formData.email.$error : null"
          aria-describedby="input-email-feedback"
          required
          :placeholder="placeholder.email"></b-form-input>
        <b-form-invalid-feedback id="input-email-feedback">
          <span v-show="!$v.formData.email.required">This is a required field.</span>
          <span v-show="!$v.formData.email.email">This email address is not valid.</span>
        </b-form-invalid-feedback>
      </b-form-group>

      <b-form-group
        id="input-group-phone"
        label="Phone number"
        label-for="input-phone">
        <b-form-input
          id="input-phone"
          v-model="$v.formData.phone.$model"
          :state="$v.formData.phone.$dirty ? !$v.formData.phone.$error : null"
          aria-describedby="input-phone-feedback"
          required
          :placeholder="placeholder.phone"></b-form-input>
        <b-form-invalid-feedback id="input-phone-feedback">
          <span v-show="!$v.formData.phone.required">This is a required field.</span>
          <span v-show="!$v.formData.phone.numeric">This phone number is not valid.</span>
        </b-form-invalid-feedback>
      </b-form-group>

      <div class="vws-button__group text-center">
        <b-button :class="submitBtnClass" type="submit" size="lg" :variant="$v.formData.$invalid ? 'secondary' : 'primary'" :disabled="$v.formData.$invalid">
          <span v-if="!isSending">Submit</span>
          <b-spinner small label="Sending..." v-else></b-spinner>
        </b-button>
        <b-button class="vws-button" size="lg" variant="info" @click="generateData" v-show="showGenerate">Generate</b-button>
        <b-button class="vws-button" type="reset" size="lg" variant="danger" v-show="showReset">Reset</b-button>
      </div>
    </b-form>

    <!-- Modal -->
    <b-modal
      id="code-modal"
      centered
      hide-footer
      no-close-on-backdrop
      title="Thank you! Here is your lucky number"
      header-class="vws-modal__header"
      body-class="vws-modal__content"
      @hidden="clearData">
      <SlotMachine :code="code" />
    </b-modal>
  </div>
</template>

<script>
import { email, numeric, required } from 'vuelidate/lib/validators'
import { createCandidate } from '@/services/candidate'
import { nameArr } from '@/utils/fake'
import axios from 'axios'

const CancelToken = axios.CancelToken
const source = CancelToken.source()

export default {
  name: 'vws-form',
  components: {
    SlotMachine: () => import('./SlotMachine.vue')
  },
  data () {
    return {
      formData: {
        name: '',
        email: '',
        phone: ''
      },
      placeholder: {
        name: 'E.g. John Doe',
        email: 'E.g. johndoe@gmail.com',
        phone: 'E.g. 0123456789'
      },
      code: '',
      showReset: false,
      showGenerate: false,
      isSending: false
    }
  },
  computed: {
    submitBtnClass () {
      return {
        'vws-button': true,
        'vws-button vws-button--disabled': this.isSending
      }
    }
  },
  validations: {
    formData: {
      name: {
        required
      },
      email: {
        email,
        required
      },
      phone: {
        numeric,
        required
      }
    }
  },
  methods: {
    handleSubmitWithCancelRequest () {
      this.$v.formData.$touch()
      // Validate form
      if (this.$v.formData.$anyError) {
        return
      }

      axios.post('http://localhost:712/candidates/create', this.formData, {
        cancelToken: source.token
      }).then(response => {
        // Update code
        this.code = response.data.code

        // Show code
        this.$bvModal.show('code-modal')
      }).catch(error => {
        if (axios.isCancel(error)) {
          console.log('Request canceled', error.message)
        } else {
          // handle error
          this.$bvToast.toast(error.response.data.message, {
            title: 'Error',
            variant: 'danger'
          })
        }
      })
      // Cancel request
      source.cancel('Operation canceled by the user.')
    },

    handleSubmit () {
      this.$v.formData.$touch()
      // Validate form
      if (this.$v.formData.$anyError) {
        return
      }

      // Active indicator
      this.isSending = true

      // Save info to db
      createCandidate(this.formData).then(response => {
        // Update code
        this.code = response.data.code

        // Show code
        this.$bvModal.show('code-modal')

        // Deactive indicator
        this.isSending = false
      }).catch(error => {
        this.$bvToast.toast(error.response.data.message, {
          title: 'Error',
          variant: 'danger'
        })
      })
    },

    handleReset () {
      this.clearData()
    },

    clearData () {
      this.formData = {
        name: '',
        email: '',
        phone: ''
      }
      this.$v.formData.$reset()
    },

    generateData () {
      let radIdx = this.getRandomInt(0, 200)
      let name = nameArr[radIdx]
      let email = name.split(' ').join('').toLowerCase() + '@gmail.com'
      this.formData = {
        name: name,
        email: email,
        phone: '0' + this.getRandomInt(1e8, 1e9)
      }
    }
  }
}
</script>

<style lang="scss">
.vws-form {
  margin: 0 auto;
  max-width: 45rem;
}

.vws-modal {
  &__header {
    position: relative;
    padding: 1rem 2rem;
    text-align: center;
    justify-content: center;

    .close {
      position: absolute;
      z-index: 1;
      top: 1rem;
      right: 1rem;
    }
  }
  &__content {
    padding: 2rem 1rem;
    background-image: linear-gradient(180deg, #6d2077, #d91c57);
  }
}
</style>
