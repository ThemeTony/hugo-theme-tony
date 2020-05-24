var $tsl = $('#tags-scroll-left'),
    $tsr = $('#tags-scroll-right'),
    $tags = $('#post_tags .cat-real'),
    deg = 0,
    tagsWidth = 0;
for (let i = 0;i < $tags.length;i++){
    tagsWidth += $tags[i].scrollWidth;
}
function tagsTransform(d) {
    deg += d;
    $tags.each(function(){
        $(this).attr('style','transform:translateX('+ deg + 'px)');
    });
}
$tsl.click(function () {
    if (deg < 0) tagsTransform(60);
});
$tsr.click(function(){
    if (deg >= -tagsWidth-36) tagsTransform(-60);
    if(deg < -tagsWidth-36) {
        deg = -tagsWidth-36;
        $tags.each(function(){
        $(this).attr('style','transform:translateX('+ deg + 'px)');
        });
    }
});