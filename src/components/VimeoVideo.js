import React, { Component } from 'react'
import Vimeo from '@vimeo/player'
import cls from 'classnames'

const setCursorUrl = (url) => `url(${url}) 15 15, auto`
const DEFAULT_RATIO = (16 / 9)

// TODO: Use this component in Kahn and Postmasters
class VimeoVideo extends Component {
    componentDidMount() {
        const { $el, $video } = this;
        let {
            ratio = DEFAULT_RATIO,
            auto = false,
            tall = !auto,
            resizeContainer = false,
            autoVolume = false,
            cursorPause = '',
            volume = 0.5
        } = this.props

        let volumeInterval = null
        let volumeFrame = null
        let ratioFrame = null

        const player = new Vimeo($video)
        $el.style.cursor = setCursorUrl(cursorPause)

        if (ratio) {
            keepRatio()
            window.addEventListener('resize', keepRatio, false)
        }

        if (autoVolume) {
            player.setVolume(volume)
            volumeInterval = setInterval(() => {
                volumeFrame = window.requestAnimationFrame(() => {
                    const rect = $el.getBoundingClientRect()
                    let top = rect.top + rect.bottom

                    if (
                        top >= 0 &&
                        rect.top < window.innerHeight &&
                        volume <= 0.5
                    ) {
                        volume += 0.05
                        player.setVolume(volume)
                    } else if (volume >= 0) {
                        volume -= 0.05
                        player.setVolume(volume)
                    }
                })
            }, 200)
        }

        function keepRatio() {
            let { width, height } = $el.getBoundingClientRect()
            tall = auto ? height > width : tall
            width = tall ? '' : (width * ratio) + 'px'
            height = !tall ? '' : (height / ratio) + 'px'

            ratioFrame = window.requestAnimationFrame(() => {
                if (resizeContainer) {
                    $el.style.height = height
                    $el.style.width = width
                }

                $video.style.height = height
                $video.style.width = width
            })
        }

        this.player = player
        this.cleanup = () => {
            window.addEventListener('resize', keepRatio, false)
            window.clearInterval(volumeInterval)
            window.cancelAnimationFrame(volumeFrame)
            window.cancelAnimationFrame(ratioFrame)
        }
    }

    togglePlayState () {
        const { $el, player } = this
        let { cursorPlay = '', cursorPause = '' } = this.props

        if (!$el.dataset.paused) {
            player.pause()
            $el.style.cursor = setCursorUrl(cursorPlay)
            $el.dataset.paused = true
        } else {
            player.play()
            $el.style.cursor = setCursorUrl(cursorPause)
            delete $el.dataset.paused
        }
    }

    componentWillUnmount () {
        this.cleanup()
    }

    render() {
        const { className, width = 640, height = 320, src } = this.props

        return (
            <div
                className={cls(className, 'c-vimeo-video')}
                onClick={() => this.togglePlayState()}
                ref={(ref) => this.$el = ref}
            >
                <iframe
                    ref={(ref) => this.$video = ref}
                    src={src}
                    width={width}
                    height={height}
                    frameBorder='0'
                    webkitallowFullScreen
                    mozallowFullScreen
                    allowFullScreen
                />
            </div>
        )
    }
}

export default VimeoVideo
