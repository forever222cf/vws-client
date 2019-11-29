<template>
  <div class="home">
    <VWSForm />
    <VWSQRCode v-show="false" />
  </div>
</template>

<script>
export default {
  name: 'home',
  components: {
    VWSForm: () => import('@/components/Form.vue'),
    VWSQRCode: () => import('@/components/QRCode.vue')
  }
}
</script>

<style lang="scss" scoped>
</style>
