<template>
  <div class="lucky-spin text-center">
    <VWSSpin />
  </div>
</template>

<script>
export default {
  name: 'lucky-spin',
  components: {
    VWSSpin: () => import('@/components/Spin.vue')
  }
}
</script>
