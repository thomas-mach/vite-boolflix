<template>
  <div>
    <header class="container">
      <div class="row">
        <img src="../../public/Netflix_Logo_CMYK.png" alt="">
        <div>
          <input type="text" name="" id="" v-model="store.searchResult">
          <button @click="$emit('search')">Search</button>
        </div>
      </div>
    </header>
  </div>
</template>

<script>
import { store } from '../store.js'

export default {
  // inheritAttrs: false,
  data() {
    return {
      store: store,
    }
  },
  methods: {
    search() {

    }
  },
}

</script>

<style lang="scss" scoped>
@use '../style/partials/_appHeader.scss'
</style>