<template>
    <div>
        <p>Titolo: {{ props.title }}</p>
        <p>Titolo Originale: {{ props.original_title}}</p>
        <p>Lingua: {{ props.original_language }}</p>
        <p>Voto:{{ props.vote_average }}</p>
    </div>
</template>

<script>
   
    export default {
        props: ['props']
    }
</script>

<style lang="scss" scoped>

</style>