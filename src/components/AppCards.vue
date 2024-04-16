<template>
    <div>
        <p>Titolo: {{ props.title }}</p>
        <p>Titolo Originale: {{ props.original_title }}</p>
        <p v-if="props.original_language === 'en'"><img src="../../public/united_kingdom_round_icon_64.png" alt=""></p>
        <p v-else-if="props.original_language === 'fr'"><img src="../../public/france_round_icon_64.png" alt=""></p>
        <p v-else-if="props.original_language === 'it'"><img src="../../public/italy_round_icon_64.png" alt=""></p>
        <p v-else>Lingua: {{ props.original_language }}</p>
        <p>Voto:{{ props.vote_average }}</p>










    </div>
</template>

<script>

export default {
    props: ['props']
}
</script>

<style lang="scss" scoped></style>