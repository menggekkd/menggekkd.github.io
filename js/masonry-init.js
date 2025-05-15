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

$(document).ready(function() {
    lightbox.option({
        'resizeDuration': 200,
        'wrapAround': true,
        'albumLabel': 'Image %1 of %2',
        'disableScrolling': true,
        'fadeDuration': 300,
        'imageFadeDuration': 300
    });
});
