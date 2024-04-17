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
            <div class="stars">
                <div v-for="n in 5" :key="n" :class="{ 'star-yellow': n <= voto }">*</div>
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
.star-yellow {
    color: yellow;
}


.card {
    width: 342px;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    position: relative;


}

.description {
    position: absolute;
    padding: 12px;
    top: 0;
    left: 0;
}

.description p {
    color: aliceblue;
    font-weight: 100;
    line-height: 24px;
    font-size: 14px;
    user-select: none;
}

p>img {
    width: 40px;
}

.card:hover .image {
    display: none;
}

.image {
    z-index: 1;
}

.stars {
    font-size: 80px;
    display: flex;
    gap: 5px;
    user-select: none;
}

.stars p {
    margin-top: 10px;
    font-size: 40px;
}
</style>