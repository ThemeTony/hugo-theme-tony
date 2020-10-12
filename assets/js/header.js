window.addEventListener("DOMContentLoaded", function () {
  window.addEventListener("scroll", function () {
    var header = document.getElementById('header-div');
    var viewDiv = document.getElementById('view-div');
    if (document.documentElement.scrollTop <= 0) {
      header.className = "tony-header-fixed";
      viewDiv.style.display = "none";
      // $("#view-div").css("display", "none");
      header.addEventListener("mouseover", function () {
        header.className = "tony-header-scroll";
      });
      header.addEventListener("mouseleave", function () {
        header.className = "tony-header-fixed";
      });
    } else {
      header.className = "tony-header-scroll";
      viewDiv.style.display = null;
      // $("#view-div").css("display", "block");
      header.addEventListener("mouseover", function () {
        header.className = "tony-header-scroll";
      });
      header.addEventListener("mouseleave", function () {
        header.className = "tony-header-scroll";
      });
    }
  });
}, { once: true });