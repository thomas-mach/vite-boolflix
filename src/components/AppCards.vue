<template>
    <div class="card">
        <img class="image" :src="'https://image.tmdb.org/t/p/w342/' + item.poster_path" alt="">
        <div class="description">
            <p>Titolo: {{ item.title }} {{ item.name }}</p>
            <p>Titolo Originale: {{ item.original_title }} {{ item.original_name }}</p>
            <p v-if="item.original_language === 'en'"><img src="../../public/united_kingdom_round_icon_64.png" alt="">
            </p>
            <p v-else-if="item.original_language === 'fr'"><img src="../../public/france_round_icon_64.png" alt=""></p>
            <p v-else-if="item.original_language === 'it'"><img src="../../public/italy_round_icon_64.png" alt=""></p>
            <p v-else>Lingua: {{ item.original_language }}</p>
            <div>
                <font-awesome-icon class="stars" v-for="n in 5" :key="n"
                    :icon="n <= voto ? ['fas', 'star'] : ['far', 'star']" />
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        const voto = this.item.vote_average / 2
        return {
            voto: Math.round(voto)
        }
    },
    props: {
        item: {
            type: Object,
            required: true
        }
    }
}
</script>

<style lang="scss" scoped>
@use '../style/partials/appCards'
</style>