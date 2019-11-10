/*     _                 _   _                _        _    _                      
  ___ | | ___ _ __   ___| |_| |_ ___ _ __ ___| |_ ___ | | _| | _____   _ __   ___  
 / _ \| |/ _ \ '_ \ / _ \ __| __/ _ \ '__/ __| __/ _ \| |/ / |/ / _ \ | '_ \ / _ \ 
| (_) | |  __/ |_) |  __/ |_| ||  __/ |  \__ \ || (_) |   <|   <  __/_| | | | (_) |
 \___/|_|\___| .__/ \___|\__|\__\___|_|  |___/\__\___/|_|\_\_|\_\___(_)_| |_|\___/ 
             |_|                                                                   */

//fatnav.js
$.fatNav();

//typeit.js
$('#typed-header-text').typeIt({
    strings: [
        "og jeg er <span class='color-p'>journalist</span>.",
        "og jeg <span class='color-p'>utvikler</span> ting og tang.",
        "og jeg lager <span class='color-p'>video</span>.",
        "og jeg tar mange <span class='color-p'>bilder</span>.",
        "og jeg spiller <span class='color-p'>pingpong</span>.",
        "og jeg lager <span class='color-p'>tullete</span> musikk.",
        "og jeg kommer fra <span class='color-p'>Porsgrunn</span>.",
        "og jeg kan <span class='color-p'>ikke</span> gå på ski.",
        "og jeg bruker <span class='color-p'>briller</span>."
    ],
    speed: 50,
    autoStart: false,
    breakLines: false,
    deleteSpeed: 20,
    deleteDelay: 2000,
    loop: true,
    loopDelay: 2000,
    breakDelay: 2000
});

$('.typed-text').typeIt();

//swiper.js
$(document).ready(function () {
    var mySwiper = new Swiper ('.swiper-container', {
            direction: 'horizontal',
            loop: true,
            pagination: {
            el: '.swiper-pagination'
        },
        
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        }
    });
});

//modalVideo.js
$(".js-video-button").modalVideo({
    channel: 'youtube',
    youtube: {
      autoplay: 1,
      cc_load_policy: 1,
      color: null,
      controls: 1,
      disablekb: 0,
      enablejsapi: 0,
      end: null,
      fs: 1,
      h1: null,
      iv_load_policy: 1,
      list: null,
      listType: null,
      loop: 0,
      modestbranding: null,
      origin: null,
      playlist: null,
      playsinline: null,
      rel: 0,
      showinfo: 1,
      start: 0,
      wmode: 'transparent',
      theme: 'dark'
    },
    ratio: '16:9',
    vimeo: {
      api: false,
      autopause: true,
      autoplay: true,
      byline: true,
      callback: null,
      color: null,
      height: null,
      loop: false,
      maxheight: null,
      maxwidth: null,
      player_id: null,
      portrait: true,
      title: true,
      width: null,
      xhtml: false
    },
  });