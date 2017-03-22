var NewsScroller = function(obj) {
  // default settings
  var settings = {
    scrollerItem: obj,
    speed: 1,
    delay: 0,
    iteration: 'infinite',
    swing: 'linear'
  };

  // update default settings
  function updateSettings(newSettings) {
    for (var newSetting in newSettings) {
      if (newSettings.hasOwnProperty(newSetting)) {
        settings[newSetting] = newSettings[newSetting];
      }
    }

    init(settings);
  }

  function init(settings) {
    var scroller = settings.scrollerItem,
        scrollerParent = scroller.parentElement,
        scrollWrapper = document.createElement('div'),
        speed = settings.speed,
        delay = settings.delay,
        iteration = settings.iteration,
        swing = settings.swing,
        head = document.head,
        styleSheeet = document.createElement('style'),
        scrollOffset = scrollerParent.getBoundingClientRect().right,
        css = [
          '.scroll-wrapper {position: relative;}',
          '.scroller {opacity: 0; position: absolute; white-space: nowrap;}',
          '.scroll-wrapper .scroller {opacity: 1;}'
        ].join('');

    scroller.classList.add('scroller');
    scrollWrapper.classList.add('scroll-wrapper');
    scrollWrapper.appendChild(scroller);
    scrollerParent.appendChild(scrollWrapper);

    styleSheeet.innerHTML = css;
    head.appendChild(styleSheeet);

    var scrollerWidth = -Math.abs(scroller.getBoundingClientRect().right),
        animationTime = Math.abs(scrollerWidth / (100 * speed)),
        keyframes = [
          '@keyframes tickerWrapperSlide {from {margin-left: '+scrollOffset+'px;} to {margin-left: '+scrollerWidth+'px;}}'
        ],
        scrollerAnimation = [
          '.scroller {animation: '+animationTime+'s '+swing+' '+delay+'s '+iteration+' tickerWrapperSlide; margin-left: '+scrollOffset+'px;}'
        ];

    styleSheeet.innerHTML = [
      keyframes,
      scrollerAnimation,
      styleSheeet.innerHTML
    ].join('');
  }

  return {
    ticker: updateSettings
  };
};
