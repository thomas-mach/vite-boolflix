<template>
  <div>
    <!-- <div>{{ store.searchResult }}</div> -->
    <AppHeader @search="fetchCards" />
    <AppCards v-for="(el, i) in store.cardsArray.results" key="i" :props="el" />
  </div>
</template>

<script>
import AppHeader from './components/AppHeader.vue';
import AppCards from './components/AppCards.vue';
import axios from 'axios';
import { store } from './store';

export default {
  components: {
    AppHeader,
    AppCards
  },
  data() {
    return {
      store: store
    }
  },
  methods: {
    fetchCards() {
      console.log(this.store.searchResult)
      axios.get(`https://api.themoviedb.org/3/search/movie?api_key=0d8d11a36d6abe6250209e082c1dbb42&query=${this.store.searchResult}`).then((res) => {
        console.log(res.data)
        store.cardsArray = res.data
      })
    }
  },
  created() {

  }
}
</script>

<style lang="scss" scoped></style>