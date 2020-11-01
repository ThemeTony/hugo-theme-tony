// @ts-check
window.addEventListener("DOMContentLoaded", function () {
  var translateX = 0;
  var list = document.getElementById('post-tags');
  var scrollLeftBtn = document.getElementById('tags-scroll-left');
  var scrollRightBtn = document.getElementById('tags-scroll-right');
  var scrollTags = function (direction) {
    if (direction === 'right') {
      if (translateX >= 0 && translateX < list.scrollWidth - list.clientWidth) {
        scrollLeftBtn.setAttribute('style', null);
        translateX += 60;
      } else {
        scrollRightBtn
          .style
          .display = 'none';
      }
    } else {
      if (translateX - 60 >= 0) {
        translateX -= 60;
        scrollRightBtn.setAttribute('style', null);
      } else {
        translateX = 0;
        scrollLeftBtn
          .style
          .display = 'none';
      }
    }
    let k = list.children;
    for (let i = 0; i < k.length; ++i) {
      k[i].setAttribute(
        'style',
        'transform:translateX(-' + translateX + 'px)'
      );
    }
  };
  scrollLeftBtn.addEventListener('click', function () {
    scrollTags('left')
  });
  scrollRightBtn.addEventListener('click', function () {
    scrollTags('right')
  });
  scrollLeftBtn
    .style
    .display = 'none';
}, { once: true });