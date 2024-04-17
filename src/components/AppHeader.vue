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
.container {
  height: 100px;
  border-bottom: 1px solid rgb(81, 81, 81);
  display: flex;
  align-items: center;
}

.row {
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 10px;
  flex-grow: 1;
  padding: 12px;
}

img {
  width: 200px;
}
</style>