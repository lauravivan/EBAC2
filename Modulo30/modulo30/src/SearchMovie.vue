<script setup lang="ts">
import Navbar from './components/Navbar.vue'
</script>

<template>
    <main>
        <Navbar></Navbar>
        <article class="article movie-list-bg">
            <div class="form-search" id="form-search">
                <input type="text" class="form-search__search" name="search" id="search" placeholder="search"/>
                <div class="form-search__img-container">
                    <img class="img" id="loupe-light" src="../src/assets/img/search.png" alt="search icon"/>
                    <img class="img" id="loupe-dark" src="../src/assets/img/loupe.png" alt="search icon"/>
                </div>
            </div>
            <div class="movies" id="movies-container"></div>
        </article>
    </main>
</template>