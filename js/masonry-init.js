/* masonry */
var $grid = $('.grid').masonry({
    itemSelector: '.grid-item',
    columnWidth: '.grid-item',
    gutter: 16,
    percentPosition: true
});

/* imagesLoaded */
$grid.imagesLoaded().progress( function() {
    $grid.masonry('layout');
});
