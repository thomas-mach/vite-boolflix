<template>
    <div class="container">
        <AppHeader @search="fetchCards" />

        <div class="row">
            <AppCards v-for="el in store.cardsArray.results" :key="el.id" :item="el" class="card" />
            <AppCards v-for="el in store.cardsArrayTv.results" :key="el.id" :item="el" />
        </div>
    </div>
</template>

<script>
import axios from 'axios';
import AppCards from './AppCards.vue';
import AppHeader from './AppHeader.vue';
import { store } from '../store';
export default {
    components: {
        AppHeader,
        AppCards,

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
                // console.log('movie ' + this.store.cardsArray)
                // console.log('movie ' + JSON.stringify(this.store.cardsArray));
            })

            axios.get(`https://api.themoviedb.org/3/search/tv?api_key=0d8d11a36d6abe6250209e082c1dbb42&query=${this.store.searchResult}`).then((res) => {
                console.log(res.data)
                store.cardsArrayTv = res.data
                // console.log('tv ' + this.store.cardsArrayTv)
                // console.log('tv ' + JSON.stringify(this.store.cardsArrayTv));
            })
        }
    }
}
</script>

<style lang="scss" scoped>
@use '../style/partials/_appContent.scss'
</style>
