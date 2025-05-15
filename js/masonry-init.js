$(document).ready(function(){
var $grid = $('.grid');
    $grid.imagesLoaded(function(){
        $grid.masonry({
            itemSelector: '.grid-item',
            gutter: 16,
            percentPosition: true
        });
    });

    $grid.imagesLoaded().progress( function() {
        $grid.masonry('layout');
    });
});
