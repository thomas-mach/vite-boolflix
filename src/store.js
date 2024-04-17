import { reactive } from 'vue'

export const store = reactive({
    cardsArray: [],
    cardsArrayTv: [],
    searchResult: '',

})

console.log(store)
