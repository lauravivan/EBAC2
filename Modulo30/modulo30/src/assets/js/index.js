jQuery (function( $ ) {

    let movieList = JSON.parse(localStorage.getItem('movieList')) || []

    //form page
    const form = $('#form')

    if (form) {
        form.on('submit', function ( e ) {
            e.preventDefault()
            e.stopPropagation()

            let formData = new FormData(this)

            let title = ''
            let genres = []
            let mainPlot = ''
            let director = ''
            let releaseDate = ''
            let runtime = []
            let poster = ''

            for (let [key, value] of formData) {
                if (key == 'title') {
                    title = value
                } else if (key == 'main-plot') {
                    mainPlot = value
                } else if (key == 'director') {
                    director = value
                } else if (key == 'release-date') {
                    releaseDate = value
                } else if (key == 'hours' || key == 'minutes') {
                    runtime.push(key, value)
                } else if (key == 'poster') {
                    let img = new Image()
                    img.src = value
                    let invalidMsg = $('#invalid-msg')

                    img.addEventListener('error', () => {
                        invalidMsg.text('Please provide a valide image')
                    })

                    img.addEventListener('load', () => {
                        invalidMsg.text('')
                        poster = value

                        let movieObj = {
                            id: Math.floor(Math.random() * 10000 + 1),
                            title: title,
                            genres: genres,
                            mainPlot: mainPlot,
                            director: director,
                            releaseDate: releaseDate,
                            runtime: runtime,
                            poster: poster
                        }
            
                        movieList.push(movieObj)
                        localStorage.setItem('movieList', JSON.stringify(movieList))
        
                        this.submit()
                    })
                } else {
                    genres.push(value)
                }
            }
        })
    }


    //search page
    let moviesContainer = $('#movies-container')
    let searched = $('#search').val()

    if (searched == '') {
        for (let movie of movieList) {
            buildMovieStructure( movie )
        }
    }

    $('#search').keyup( () => {
        let flag = 0
        let auxArray = []
        let searched = $('#search').val()
        moviesContainer.html('')

        for (let movie of movieList) {
            if (movie.title.toLowerCase().includes(searched.toLowerCase())) {
                flag = 1
                auxArray.push(movie)
            } 
        }

        if (flag == 0) {
            moviesContainer.html('<span class="movies__no-results">No results found</span>')
        } else if (flag == 1) {
            for (let movie of auxArray) {
                buildMovieStructure( movie )
            }
        }
    })

    function buildMovieStructure( obj ) {
        moviesContainer.append(`
            <div class="movies__movie-container">
                <a class="movies__link" href="../../about.html" id="${obj.id}">
                    <div class="movies__img-container">
                        <img class="movies__img img" src="${obj.poster}"/>
                    </div>
                    <span class="movies__title">${obj.title}</span>
                </a>
            </div> 
        `)

        let movieClicked = '#' + obj.id

        $(movieClicked).click( () => {
            localStorage.setItem('movieID', obj.id)
        })
    }


    //about page
    let chosenMovie = localStorage.getItem('movieID')
    let chosenMovieObj = []

    for (let movie of movieList) {
        if (movie.id == chosenMovie) {
            chosenMovieObj.push(movie)
        }
    }

    if (chosenMovieObj.length >= 1) {
        chosenMovieObj = chosenMovieObj[0]

        $('#movie-poster-cont').html(
            `<img class="about__movie-img" src="${chosenMovieObj.poster}"/>`
        )
        $('#movie-title').text(chosenMovieObj.title.toUpperCase())

        for (let genre of chosenMovieObj.genres) {
            $('#movie-genres').append(`<span class="about__genre">${genre}</span>`)
        }
        $('#movie-main-plot').append(chosenMovieObj.mainPlot)
        $('#movie-director').append(chosenMovieObj.director)
        $('#movie-date').append(chosenMovieObj.releaseDate)
        $('#movie-runtime').append(chosenMovieObj.runtime[1] + ' hours and ' + chosenMovieObj.runtime[3] + ' minutes')

        let chosenMovieObjID = chosenMovieObj.id

        $('#btn-delete').click( () => {
            movieList = movieList.filter( movie => {
                return movie.id != chosenMovieObjID
            })

            localStorage.setItem('movieList', JSON.stringify(movieList))
        })
    }


    //settings page
    const btnLight = $('#light')
    const btnDark = $('#dark')
    let imgTheme = localStorage.getItem('img-theme') || ''

    if (localStorage.getItem('theme')) {
        $(document.body).addClass(localStorage.getItem('theme'))
    }

    if (imgTheme == 'dark-img') {
        changeDark()
    } else if (imgTheme == 'light-img') {
        changeLight()
    }

    btnLight.click( () => {
        changeDark()
        localStorage.setItem('theme', 'dark')
        localStorage.setItem('img-theme', 'dark-img')
        $(document.body).addClass(localStorage.getItem('theme'))
    })

    btnDark.click( () => {
        changeLight()
        $(document.body).removeClass('dark')
        localStorage.setItem('theme', '')
        localStorage.setItem('img-theme', 'light-img')
    })

    function changeDark() {
        btnLight.css('visibility', 'hidden')
        btnDark.css('visibility', 'visible')
    }

    function changeLight() {
        btnDark.css('visibility', 'hidden')
        btnLight.css('visibility', 'visible')
    }


    //navbar responsive
    $('#burger').click( () => {
        let asideDiv = $('#aside')

        if (asideDiv.hasClass('aside-show')) {
            asideDiv.css('display','block')
            asideDiv.removeClass('aside-show')
        } else {
            asideDiv.addClass('aside-show')
            asideDiv.css('display','none')
        }
    })
})