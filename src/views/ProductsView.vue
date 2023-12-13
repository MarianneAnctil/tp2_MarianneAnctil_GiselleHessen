<script setup>
import ProductsList from '../components/ProductsList.vue'
</script>

<template>
  <div>
<ProductsList :products='products' :productsPage="5" />
  </div>
</template>

<script>

  export default {
  data(){
    return{
      products:null
  }
  },

  methods: {
    async fetchData(){
      const response = await fetch('https://storerestservice.azurewebsites.net/api/products/');
      this.products = await response.json()
    }
  },

  created(){
    this.fetchData();
  }
}
</script>

<style lang="scss" scoped>

</style>
