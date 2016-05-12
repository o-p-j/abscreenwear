/**
 * @author Cae Mostajo
 * @since 1.0
 */
function Animator()
{
    /**
     * Self reference.
     * @since 1.0
     */
    var self = this;

    /**
     * Animation Timelines
     * @since 1.0
     */
    self.timelines = {};

    /**
     * Animation Actors
     * @since.1.0
     */
    self.actors = {};

    /**
     * Identifies the current set in play.
     * @since 1.0
     */
    self.set = 0;

    /** 
     * Number of sets to play.
     * @since 1.0
     */
    self.setLimit = 3;

    /**
     * Gets all animation actors.
     * @since 1.0
     */
    self.getActors = function()
    {
        self.actors.front = {
            flipper:    $('.front-flipper'),
            back:       $('.front-flipper .back'),
        };
        self.actors.left = {
            flipper:    $('.left-flipper'),
            back:       $('.left-flipper .back'),
        };
        self.actors.right = {
            back:       $('.right-flipper .back'),
        };
        self.actors.big = {
            flipper:    $('.big-flipper'),
            back:       $('.big-flipper .back'),
        };
        self.actors.top = {
            flipper:    $('.top-flipper'),
            back:       $('.top-flipper .back'),
        };
        self.actors.bottom = {
            flipper:    $('.bottom-flipper'),
            back:       $('.bottom-flipper .back'),
        };
      
        self.actors.back = {
            back:       $('.back-flipper .back'),
        };
    };

    /**
     * Cube animation.
     * @since 1.0
     */
    self.cube = function()
    {
        if (self.timelines.cube != undefined
            && self.timelines.cube.progress() < 1
        ) return;

        // Increment set
        self.set++;
        if (self.set == self.setLimit)
            self.set = 0;

        self.timelines.cube = new TimelineMax();

        self.timelines.cube

            .to(self.actors.front.flipper, 0.7, {
                transform: "rotateY(90deg)",
                ease: Power0.easeNone,
            }, 1)

            .to(self.actors.left.flipper, 0.7, {
                transform: "rotateY(-90deg)",
                ease: Power0.easeNone,
            }, 1)

            .to(self.actors.big.flipper, 0.7, {
                transform: "rotateY(90deg)",
                ease: Power0.easeNone,
            }, 1)

            .to(self.actors.top.flipper, 0.7, {
                transform: "rotateX(90deg)",
                ease: Power0.easeNone,
            }, 1)

            .to(self.actors.bottom.flipper, 0.7, {
                transform: "rotateX(-90deg)",
                ease: Power0.easeNone,
            }, 1)

            /*
             * Cube closing 
             */
            .to(self.actors.front.flipper, 0.7, {
                transform: "rotateY(0deg)",
                ease: Power0.easeNone,
            }, 3)

            .to(self.actors.left.flipper, 0.7, {
                transform: "rotateY(0deg)",
                ease: Power0.easeNone,
            }, 3)

            .to(self.actors.big.flipper, 0.7, {
                transform: "rotateY(0deg)",
                ease: Power0.easeNone,
            }, 3)

            .to(self.actors.top.flipper, 0.7, {
                transform: "rotateX(0deg)",
                ease: Power0.easeNone,
            }, 3)

            .to(self.actors.bottom.flipper, 0.7, {
                transform: "rotateX(0deg)",
                ease: Power0.easeNone,
                onComplete: self.set == 0
                    ? self.firstset
                    : (self.set == 1
                        ? self.secondset
                        : self.thirdset
                    ),
            }, 3);
    };

    /**
     * First set of images.
     * @since 1.0
     */
    self.firstset = function()
    {
        // Modify images
        self.actors.front.back.css(
            'background-image',
            'url(img/first-front.jpg)'
        );
        self.actors.left.back.css(
            'background-image',
            'url(img/first-left.jpg)'
        );
        self.actors.right.back.css(
            'background-image',
            'url(img/first-right.jpg)'
        );
        self.actors.top.back.css(
            'background-image',
            'url(img/first-top.jpg)'
        );
        self.actors.bottom.back.css(
            'background-image',
            'url(img/first-bottom.jpg)'
        );
      
        self.actors.back.back.css(
            'background-image',
            'url(img/first-back.jpg)'
        );
        // Anim cube
        self.cube();
    };

    /**
     * Second set of images.
     * @since 1.0
     *
     * @param function handler On Complete.
     */
    self.secondset = function(handler)
    {
        // Modify images
        self.actors.front.back.css(
            'background-image',
            'url(img/second-front.jpg)'
        );
        self.actors.left.back.css(
            'background-image',
            'url(img/second-left.jpg)'
        );
        self.actors.right.back.css(
            'background-image',
            'url(img/second-right.jpg)'
        );
        self.actors.top.back.css(
            'background-image',
            'url(img/second-top.jpg)'
        );
        self.actors.bottom.back.css(
            'background-image',
            'url(img/second-bottom.jpg)'
        );
      
        self.actors.back.back.css(
            'background-image',
            'url(img/second-back.jpg)'
        );
        // Anim cube
        self.cube();
    };

    /**
     * Third set of images.
     * @since 1.0
     *
     * @param function handler On Complete.
     */
    self.thirdset = function(handler)
    {
        // Modify images
        self.actors.front.back.css(
            'background-image',
            'url(img/third-front.jpg)'
        );
        self.actors.left.back.css(
            'background-image',
            'url(img/third-left.jpg)'
        );
        self.actors.right.back.css(
            'background-image',
            'url(img/third-right.jpg)'
        );
        self.actors.top.back.css(
            'background-image',
            'url(img/third-top.jpg)'
        );
        self.actors.bottom.back.css(
            'background-image',
            'url(img/third-bottom.jpg)'
        );
      
        self.actors.back.back.css(
            'background-image',
            'url(img/third-back.jpg)'
        );
        // Anim cube
        self.cube();
    };

    /**
     * Play Scene.
     * @since 1.0
     */
    self.play = function()
    {
        self.firstset();
    };

    /**
     * On Ready
     * @since 1.0
     */
    $(document).ready(function() {
        // Get actors
        self.getActors();
        // Run intro
        self.play();
    });
}

/**
 * Run animator.
 * @since
 */
var animator = new Animator();