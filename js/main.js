(function() {
  var scroller = document.querySelector('.scroller'),
      scrollerParent = scroller.parentElement,
      scrollWrapper = document.createElement('div'),
      head = document.head,
      styleSheeet = document.createElement('style'),
      scrollOffset = scrollerParent.getBoundingClientRect().right;

  // css
  var css = [
    '.scroll-wrapper {position: relative;}',
    '.scroller {opacity: 0; position: absolute; white-space: nowrap; animation: 57.52s linear 1s infinite scrollWrapperSlide; margin-left: '+scrollOffset+'px;}',
    '.scroll-wrapper .scroller {opacity: 1;}'
  ].join(' ');

  styleSheeet.innerHTML = css;
  head.appendChild(styleSheeet);

  scrollWrapper.classList.add('scroll-wrapper');
  scrollWrapper.appendChild(scroller);
  scrollerParent.appendChild(scrollWrapper);

  var scrollerWidth = scrollOffset - scroller.getBoundingClientRect().right;

  var keyframes = [
    '@keyframes scrollWrapperSlide {from {margin-left: '+scrollOffset+'px;} to {margin-left: '+scrollerWidth+'px;}} '
  ].join('');

  styleSheeet.innerHTML = keyframes + styleSheeet.innerHTML;
})();
