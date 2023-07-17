var className = "no-background";
var scrollTrigger = 60;

window.onscroll = function () {
    // We add pageYOffset for compatibility with IE.
    if (window.scrollY >= scrollTrigger || window.pageYOffset >= scrollTrigger) {
        document.getElementsByTagName("nav")[0].classList.remove(className);
    } else {
        document.getElementsByTagName("nav")[0].classList.add(className);
    }
};