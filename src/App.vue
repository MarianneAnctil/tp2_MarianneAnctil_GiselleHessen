<script setup>
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
  <header>
      <nav>
        <RouterLink to="/">Accueil</RouterLink>
      </nav>
    <h1>Site de Critiques de Films</h1>
    <img class="img_header" src="@/components/images/fond_header.webp">
  </header>
  <RouterView />
</template>



