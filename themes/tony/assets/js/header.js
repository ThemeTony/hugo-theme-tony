var $header = $('#header-div'),
    $readingBar = $('#reading-bar'),
    $SY = $(window).scrollTop();
function setHeader(type) {
    $header.attr('class','tony-header-' + type);
}
$(window).scroll(function () {
    $SY = $(window).scrollTop();
    if ($readingBar) {
        $readingBar.attr('style', 'width: ' + $(document).scrollTop()/($(document).height()-$(window).height())*100 + '%');
    }
    if ($SY > 0) setHeader('scroll');
    else setHeader('fixed');
});
$header.hover(function () {
    setHeader('scroll');
});
$header.mouseout(function () {
    if($SY === 0) setHeader('fixed');
});