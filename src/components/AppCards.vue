<template>
    <div class="card">
        <img class="image" :src="'https://image.tmdb.org/t/p/w342/' + item.poster_path" alt="">
        <div class="description">
            <p>Titolo: {{ item.title }} {{ item.name }}</p>
            <p>Titolo Originale: {{ item.original_title }} {{ item.original_name }}</p>
            <img class="flag_img" :src="imageFlag" alt="">
            <div> {{ langString }}</div>
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
        return {
            imageFlag: '',
            langString: '',
            voto: 0,
            language: [
                { lang: 'en', flag: "../../public/united_kingdom_round_icon_64.png" },
                { lang: 'fr', flag: "../../public/france_round_icon_64.png" },
                { lang: 'it', flag: "../../public/italy_round_icon_64.png" },
                { lang: 'ja', flag: "../../public/japan_round_icon_64.png" },
                { lang: 'es', flag: "../../public/spain_round_icon_64.png" },
            ]
        }
    },
    props: {
        item: {
            type: Object,
            required: true
        }
    },
    methods: {
        checLanguage() {
            for (let i = 0; i < this.language.length; i++) {
                if (this.language[i].lang === this.item.original_language) {
                    this.imageFlag = this.language[i].flag
                    return this.imageFlag
                }
            }
            this.langString = 'language: ' + this.item.original_language
            return this.langString
        },
        votoCalc() {
            this.voto = this.item.vote_average / 2
            this.voto = Math.round(this.voto)
            return this.voto
        }

    },
    created() {
        this.checLanguage()
        this.votoCalc()
    }

}

</script>

<style lang="scss" scoped>
.stars {
    font-size: 20px;
    user-select: none;
    color: red;
}

.star-yellow {
    color: yellow;
}

.card {
    width: 342px;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    position: relative;
    cursor: pointer;
}

.description {
    position: absolute;
    padding: 12px;
    top: 0;
    left: 0;
    color: aliceblue;
    font-weight: 100;
    line-height: 24px;
    font-size: 14px;
    user-select: none;
}

.card:hover .image {
    display: none;
}

.image {
    z-index: 1;
}

.flag_img {
    width: 35px;
}
</style>