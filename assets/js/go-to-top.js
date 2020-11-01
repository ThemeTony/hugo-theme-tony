// @ts-check
window.addEventListener("DOMContentLoaded", event => {
  var backToTop = document.getElementById('go-top-button');
  var getCurrentScrollTop = function () {
    if (typeof window.scrollY !== "undefined" && window.scrollY >= 0) {
        return window.scrollY;
    }
    if (typeof window.pageYOffset !== "undefined" && window.pageYOffset >= 0) {
        return window.pageYOffset;
    }
    if (typeof document.body.scrollTop !== "undefined" && document.body.scrollTop >= 0) {
        return document.body.scrollTop;
    }
    if (typeof document.documentElement.scrollTop !== "undefined" && document.documentElement.scrollTop >= 0) {
        return document.documentElement.scrollTop;
    }
    return 0;
  };
  var hideBtn = function () {
    backToTop.style.display = "none";
  };
  var showBtn = function () {
    backToTop.style.display = null;
  }
  backToTop.addEventListener("click", function () {
    var initialSpeed = 70;
    var timerID = setInterval(function() {
        window.scrollBy(0, -initialSpeed);
        initialSpeed = initialSpeed + 8;
        if (getCurrentScrollTop() === 0){
            clearInterval(timerID);
            timerID = null;
        }
    }, 15);
  });
  window.addEventListener('scroll', function () {
    if (window.scrollY <= 0) {
      hideBtn();
    } else if (window.scrollY >= 0) {
      showBtn ()
    }
  });
  hideBtn();
}, { once: true });