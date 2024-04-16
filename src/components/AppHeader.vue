<template>
    <div>
        <input type="text" name="" id="" v-model="searchValue">
        <button @click="search">Search</button>
    </div>
</template>

<script>
    import {store} from '../store.js'
    
    export default {
        data(){
      return{
        searchValue: '',
        store: store,
        
      }
    },
    methods: {
      search(){
        const query = this.searchValue 
        store.searchResult = query
      }
    },
  }
 
</script>

<style lang="scss" scoped>

</style>