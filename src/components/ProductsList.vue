<script setup>
import ProductDetails from "./ProductsDetails.vue";
</script>

<script>
export default {
  data() {
    return {
      title: "Liste de produits",
      productDetails: null,
     
        filterName: "",
        dir: "asc",
        sortName: "modifiedDate",
        currentPage: 1,
      
    };
  },

  components: {
    ProductDetails,
  },
  props: {
    products: {
      type: Array,
      default: () => [],
    },
    productsPage: {
      type: Number,
      default: 5,
    },
  },

  watch: {
    sortName: function (newPage, oldPage) {
      this.currentPage = 1;
    },
  },

  method: {
    sort(name) {
      if (this.sortName === name) {
          if (this.dir === "asc") {
            this.dir = "desc";
          } else {
            this.dir = "asc";
          }
        } else {
          this.dir = "asc";
        }

        this.sortName = name;
      
    },
    search() {
      this.currentPage = 1;
    },
    previousPage() {
      if (this.currentPage > 1) {
        this.currentPage--;
      }
    },
    nextPage() {
      if (this.currentPage < this.totalPages) {
        this.currentPage++;
      }
    },
  },

  computed: {
    filterProducts() {
      let filterReg = new RegExp(this.filterName, "i");
      return this.products.filter((elem) => elem.name.match(filterReg));
    },
    sortedFilteredProducts() {
      if (!this.sortName) {
        return this.filterProducts;
      }
      const sortedProducts = this.filterProducts.slice();

      if (this.dir === "desc") {
        sortedProducts.sort((a, b) => b[this.sortName] - a[this.sortName]);
      } else {
        sortedProducts.sort((a, b) => a[this.sortName] - b[this.sortName]);
      }
      return sortedProducts;
    },

    sortedFilteredPaginatedProducts() {
      const startPage = (this.currentPage - 1) * this.productsPage;
      const endPage = startPage + this.productsPage;
      return this.sortedFilteredProducts.slice(startPage, endPage);
    },
    totalPages() {
      return Math.ceil(
        this.sortedFilteredProducts.length / this.productsPage
      );
    },
  },
};

function afficherDetails(evenement) {
  console.log(evenement.target);
  let objCible = evenement.target;
  productDetails = objCible.value;
}
</script>

<template>
  <header>
    <h1>{{ title }}</h1>
  </header>

  <main>
    <section>
      <form @submit.prevent="onSubmit">
        <fieldset>
          <label>Trier par:</label>
          <button @click="sort('name')">Nom</button>
          <button @click="sort('price')">Prix</button>
          <button @click="sort('modifiedDate')">Date de modification</button>

          <label for="recherche">Recherche par nom:</label>
          <input
            name="recherche"
            v-model="filterName"
            placeholder="Rechercher un nom"
          />
        </fieldset>
      </form>

    </section>

    <ul>
      <li
        v-for="product in sortedFilteredPaginatedProducts"
        :key="product.id"
        @click="productDetails = product"
      >
        <p
          v-bind:class="{
            red: product.discontinued == true,
            selected: product === productDetails,
          }"
        >
          {{ product.name }}
        </p>
      </li>
    </ul>
    <div>
      <button @click="previousPage" :disabled="currentPage === 1">Précédent</button>
      <p>{{ currentPage }}</p>
      <button @click="nextPage" :disabled="currentPage === totalPages">Suivant</button>
    </div>

    <section v-if="productDetails != null">
      <ProductDetails :product="productDetails" />
    </section>
  </main>
</template>

<style>
.selected {
  font-weight: bolder;
  color: Yellow;
}
.red {
  color: red;
}
</style>
