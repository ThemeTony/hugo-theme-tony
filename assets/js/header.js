// @ts-check
window.addEventListener("DOMContentLoaded", function () {
  window.addEventListener("scroll", function () {
    var header = document.getElementById('header-div');
    if (document.documentElement.scrollTop <= 0) {
      header.className = "tony-header-fixed";
      header.addEventListener("mouseover", function () {
        header.className = "tony-header-scroll";
      });
      header.addEventListener("mouseleave", function () {
        header.className = "tony-header-fixed";
      });
    } else {
      header.className = "tony-header-scroll";
      header.addEventListener("mouseover", function () {
        header.className = "tony-header-scroll";
      });
      header.addEventListener("mouseleave", function () {
        header.className = "tony-header-scroll";
      });
    }
  });
}, { once: true });