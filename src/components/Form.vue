<template>
  <div class="vws-form">
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
          <span v-show="!$v.formData.phone.phone">This phone number is not valid.</span>
        </b-form-invalid-feedback>
      </b-form-group>

      <div class="vws-button__group text-center">
        <b-button class="vws-button" type="submit" size="lg" :variant="$v.formData.$invalid ? 'secondary' : 'primary'" :disabled="$v.formData.$invalid">Submit</b-button>
        <b-button class="vws-button" type="reset" size="lg" variant="danger" v-show="showReset">Reset</b-button>
      </div>
    </b-form>
  </div>
</template>

<script>
import { email, numeric, required } from 'vuelidate/lib/validators'
import { createCandidate } from '@/services/candidate'

export default {
  name: 'vws-form',
  data () {
    return {
      formData: {
        name: 'John Doe',
        email: 'johndoe@gmail.com',
        phone: '0123456789'
      },
      placeholder: {
        name: '',
        email: '',
        phone: ''
      },
      showReset: true
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
    handleSubmit () {
      this.$v.formData.$touch()
      // Validate form
      if (this.$v.formData.$anyError) {
        return
      }
      // Save info to db
      createCandidate(this.formData).then(response => {
        this.$bvToast.toast(response, {
          title: 'Success',
          autoHideDelay: 5000
        })
      }).catch(error => {
        this.$bvToast.toast(error.response.data.message, {
          title: 'Error',
          autoHideDelay: 5000
        })
      })
    },
    handleReset () {
      this.formData = {
        name: '',
        email: '',
        phone: ''
      }

      this.$v.formData.$reset()
    }
  }
}
</script>

<style lang="scss" scoped>
.vws-form {
  margin: 0 auto;
  max-width: 50rem;
}

.vws-button {
  + .vws-button {
    margin-left: 1rem;
  }
}
</style>
