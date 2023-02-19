import '../scss/style.scss'

jQuery (function($) {
    const videoElement = $('#video')
    const video = $('#video').get(0)
    const button = $('#btn-play')

    let faPause = $('.fa-pause')
    let faPlay = $('.fa-play')

    faPause.css('display', 'none')

    const play = (e) => {
        if (video.paused) {
            faPlay.css('display','none')
            faPause.css('display','block')
            video.play()
        } else {
            faPlay.css('display','block')
            faPause.css('display','none')
            video.pause()
        }
    }

    button.click((e) => {
        play(e)
    })

    videoElement.click((e) => {
        play(e)
    })

    videoElement.on('timeupdate', () => {
        let current = (video.currentTime / video.duration) * 100

        if (video.ended) {
            faPlay.css('display', 'block')
            faPause.css('display', 'none')
        }

        $('#inner').css('width', `${current}%`)
    })
})