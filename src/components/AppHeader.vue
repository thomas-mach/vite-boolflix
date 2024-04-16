<template>
  <div>
    <input type="text" name="" id="" v-model="store.searchResult">
    <button @click="$emit('search')">Search</button>

  </div>
</template>

<script>
import { store } from '../store.js'

export default {
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

<style lang="scss" scoped></style>