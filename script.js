document.addEventListener('scroll', function(e) {
    var scrolled = window.pageYOffset;
    var parallaxElements = document.querySelectorAll('.parallax');
    for (var i = 0; i < parallaxElements.length; i++) {
        var elem = parallaxElements[i];
        var parallaxRate = elem.getAttribute('data-parallax-rate') || 0.5;
        elem.style.backgroundPositionY = (scrolled * parallaxRate) + 'px';
    }
});
