<script setup lang="ts">
import Navbar from './components/Navbar.vue'
</script>

<template>
  <main>
    <Navbar></Navbar>
    <article class="article app-background">
      <div class="app-background__img-container">
        <img class="img" id="home-logo-light" alt="popcorn and corn draw" src="./assets/img/corn-and-popcorn.png"/>
        <img class="img" id="home-logo-dark" alt="popcorn and corn draw" src="./assets/img/home-logo-dark.png"/>
      </div>
    </article>
  </main>
</template>

<style>
@import url('./assets/css/style.css');
</style>


