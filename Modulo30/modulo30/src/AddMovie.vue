<script setup lang="ts">
import Navbar from './components/Navbar.vue'
</script>

<template>
    <main>
        <Navbar></Navbar>
        <article class="article add-movie-bg">
            <div class="add-movie-bg__title-container">
                <h2 class="add-movie-bg__page-title">Add movie</h2>
                <p class="add-movie-bg__page-subtitle">please fill the fields below</p>
            </div>
            <form class="form" id="form" method="POST">

                <div class="form__title form__item">
                    <label class="form__label" for="title">Title</label>
                    <input type="text" class="form__text" placeholder="title" name="title" id="title" maxlength="80" required/>
                </div>
                
                <div class="form__genres">
                    <span class="form__label">Genres</span>
                    <div class="form__genre">
                        <div class="form__checkbox-container">
                            <input type="checkbox" class="form__checkbox" name="fantasy" id="fantasy" value="fantasy"/>
                            <label class="form__genre-label" for="fantasy">Fantasy</label>
                        </div>
                        <div class="form__checkbox-container">
                            <input type="checkbox" class="form__checkbox" name="comedy" id="comedy" value="comedy"/>
                            <label class="form__genre-label" for="comedy">Comedy</label>
                        </div>
                        <div class="form__checkbox-container">
                            <input type="checkbox" class="form__checkbox" name="romance" id="romance" value="romance"/>
                            <label class="form__genre-label" for="romance">Romance</label>
                        </div>
                        <div class="form__checkbox-container">
                            <input type="checkbox" class="form__checkbox" name="adventure" id="adventure" value="adventure"/>
                            <label class="form__genre-label" for="adventure">Adventure</label>
                        </div>
                        <div class="form__checkbox-container">
                            <input type="checkbox" class="form__checkbox" name="drama" id="drama" value="drama"/>
                            <label class="form__genre-label" for="drama">Drama</label>
                        </div>
                        <div class="form__checkbox-container">
                            <input type="checkbox" class="form__checkbox" name="thriller" id="thriller" value="thriller"/>
                            <label class="form__genre-label" for="thriller">Thriller</label>
                        </div>
                    </div>
                </div>

                <div class="form__main-plot form__item">
                    <label class="form__label" for="main-plot">Main plot</label>
                    <textarea placeholder="main plot" class="form__text" name="main-plot" id="main-plot" rows="8" cols="10"></textarea>
                </div>

                <div class="form__director form__item">
                    <label class="form__label" for="director">Directed by</label>
                    <input type="text" class="form__text" placeholder="director" name="director" id="director" maxlength="50"/>
                </div>

                <div class="form__release-date form__item">
                    <label class="form__label" for="release-date">Release date</label>
                    <input type="date" class="form__text" name="release-date" id="release-date"/>
                </div>
                
                <div class="form__runtime form__item">
                    <label class="form__label">Runtime</label>
                    <div class="form__runtime-container">
                        <input type="number" class="form__text" min="1" max="4" placeholder="hours" name="hours" id="hours" required/>
                        <input type="number" class="form__text" min="0" max="59" placeholder="minutes" name="minutes" id="minutes" required/>
                    </div>
                </div>

                <div class="form__poster form__item">
                    <label class="form__label" for="poster">Poster</label>
                    <input type="text" class="form__text" name="poster" id="poster" placeholder="image path" required/>
                    <span id="invalid-msg"></span>
                </div>

                <div class="form__btn-container">
                    <button class="form__btn" type="submit">Add</button>
                </div>
            </form>
        </article>
    </main>
</template>