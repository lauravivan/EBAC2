<template>
    <article class="about">
        <div class="about__main">
            <div class="about__img-container" id="movie-poster-cont"></div>

            <div class="about__info">
                <h3 class="about__title" id="movie-title"></h3><br>
                <div class="about__genres" id="movie-genres"></div><br>
                <p class="about__item about__main-plot" id="movie-main-plot">Main plot: </p>
                <br><hr><br>
                <p class="about__item about__director" id="movie-director">Directed by: </p><br>
                <p class="about__item about__date" id="movie-date">Release date: </p><br>
                <p class="about__item about__runtime" id="movie-runtime">Runtime: </p><br>
            </div>
        </div>

        <div class="about__btn-container">
            <a class="about__btn" href="../movies-list.html">Go back</a>
            <a class="about__btn" href="../movies-list.html" id="btn-delete">Delete</a>
        </div>
    </article>
</template>