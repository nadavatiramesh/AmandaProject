//init Masonry
function myFunction() {
    var x = document.getElementById("myTopnav");
    if (x.className === "topnav") {
        x.className += " responsive";
    } else {
        x.className = "topnav";
    }
}

//Layout Masonry after each image loads

/*
$(document).ready(function () { //Wait for document to be ready
    var$grid = $('grid');

    $grid.imagesLoaded(function () { //Wait for images to load
        $grid.masonry({ //Init masonry
            itemSelector: '.item',
            colummnWidth: 'grid-sizer'
        }); 
    });
});*/


var $grid = $('.grid').imagesLoaded( function() {
  // init Masonry after all images have loaded
  $grid.masonry({
        itemSelector: '.item',
        columnWidth: '.grid-sizer', 
        percentPosition: true
  });
}); 

