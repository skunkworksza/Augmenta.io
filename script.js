// This selects all anchor tags <a> that have an href attribute starting with '#', 
// which denotes an internal page link
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  // For each anchor, we add a 'click' event listener
  anchor.addEventListener('click', function (e) {
    // This prevents the default jump-to action when the anchor is clicked
    e.preventDefault();

    // Retrieve the target element's ID from the anchor's href attribute
    const targetId = this.getAttribute('href');
    const targetElement = document.querySelector(targetId);

    // This is where the smooth scrolling behavior is initiated
    targetElement.scrollIntoView({
      behavior: 'smooth'
    });

    // If the page has a fixed header, we can adjust the scroll position 
    // so the content is not hidden behind it
    const fixedHeaderHeight = document.querySelector('nav').offsetHeight;
    const scrolledY = window.scrollY;

    if(scrolledY){
      // This scrolls up by the height of the fixed header so the target element 
      // is not hidden behind the header after scrolling
      window.scroll(0, scrolledY - fixedHeaderHeight);
    }
  });
});
