<template>
  <div id="app">
    <VWSHeader></VWSHeader>
    <main>
      <transition name="fade" mode="out-in">
        <router-view/>
      </transition>
    </main>
  </div>
</template>

<script>
export default {
  components: {
    VWSHeader: () => import('@/components/Header.vue')
  }
}
</script>

<style lang="scss" scoped>
#app {
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 2rem;
  min-height: 100vh;
  background-image: url('./assets/images/cover-01.jpg');
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  @media screen and (max-width: 375px) {
    padding: 2rem 1rem;
  }
}

.fade {
  &-enter {
    opacity: 0;

    &-active {
      transition: opacity 0.3s;
    }
  }
  &-leave {
    &-active {
      transition: opacity 0.3s;
    }

    &-to {
      opacity: 0;
    }
  }
}
</style>
