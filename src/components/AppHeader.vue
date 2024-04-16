<template>
    <div>
        <input type="text" name="" id="" v-model="searchValue">
        <button @click="search">Search</button>
        <div>{{ searchResult }}</div>
    </div>
</template>

<script>

    export default {
        data(){
      return{
        searchValue: '',
        searchResult: ''
        
      }
    },
    methods: {
      search(){
        const query = this.searchValue 
        this.searchResult = query
      }
    },
  }
 
</script>

<style lang="scss" scoped>

</style>