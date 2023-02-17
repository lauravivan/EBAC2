<script setup lang="ts">
import Navbar from './components/Navbar.vue'
</script>

<template>
    <main>
        <Navbar></Navbar>
        <article class="article settings-bg">
            <div class="settings-bg__container">
                <p class="settings-bg__desc">Change theme: </p>
                <button class="settings-bg__btn">
                    <img alt="black circle" class="settings-bg__btn-img" id="light" src="../src/assets/img/new-moon.png"/>
                    <img alt="black circle" class="settings-bg__btn-img" id="dark" src="../src/assets/img/new-moon.png"/>
                </button>
            </div>
        </article>
    </main>
</template>