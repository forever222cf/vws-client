<template>
  <header class="vws-header text-center">
    <div class="vws-header__logo-wrapper">
      <img class="vws-header__logo" alt="Mantu logo" src="../assets/images/mantu-logo.png">
    </div>
    <div class="vws-header__nav" v-show="showNav">
      <router-link class="vws-header__nav-link" exact-active-class="vws-header__nav-link--active" to="/">Form</router-link>
      <span class="vws-header__nav-separtor">|</span>
      <router-link class="vws-header__nav-link" exact-active-class="vws-header__nav-link--active" to="/lucky-draw">Lucky Draw</router-link>
      <span class="vws-header__nav-separtor">|</span>
      <router-link class="vws-header__nav-link" exact-active-class="vws-header__nav-link--active" to="/list">List</router-link>
    </div>
  </header>
</template>

<script>
export default {
  name: 'vws-header',
  data () {
    return {
      showNav: true
    }
  }
}
</script>

<style lang="scss" scoped>
.vws-header {
  &__logo {
    max-width: 25rem;

    @media screen and (max-width: 480px) {
      max-width: 20rem;
    }

    @media screen and (max-width: 375px) {
      max-width: 16rem;
    }
  }

  &__nav {
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 2rem 0;
    font-weight: 700;
    font-size: 1.5rem;

    &-link {
      margin: 0 1rem;
      color: $color-text;

      &--active {
        color: $color-mantu;
        text-decoration: underline;
      }
    }
  }
}
</style>
