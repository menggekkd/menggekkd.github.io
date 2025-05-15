var grid = document.querySelector('.grid');
var msnry = new Masonry(grid, {
  itemSelector: '.grid-item',
  columnWidth: '.grid-sizer',
  gutter: 16,
  percentPosition: true
});