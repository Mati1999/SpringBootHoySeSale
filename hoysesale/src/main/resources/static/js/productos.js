$( window ).on( "load", function() {

  //FILTER-------------------------------------------------------------
  $(document).on("click", ".list-group-item", function(){
    if (this.id == 'Todos') {
      $('#grid > card-producto').fadeIn(500);
    } else {
      var $el = $('.' + this.id).fadeIn(500);
      $('#grid > card-producto').not($el).hide();
    }
    $(".list-group-item").removeClass('active');
    $(this).addClass('active');
  });

  //SEARCH-------------------------------------------------------------
  $(document).on("keyup", "#search", function(){
    var input, filter, grid, gridItems, title, i, txtValue;
    input = document.getElementById('search');
    filter = input.value.toUpperCase();
    grid = document.getElementById('grid');
    gridItems = grid.getElementsByClassName('grid-item');

    // Loop through all list items, and hide those who don't match the search query
    for (i = 0; i < gridItems.length; i++) {
      title = gridItems[i].getElementsByClassName('card-title')[0];
      txtValue = title.textContent || title.innerText;
      if (txtValue.toUpperCase().indexOf(filter) > -1) {
        gridItems[i].style.display = "";
      } else {
        gridItems[i].style.display = "none";
      }
    }
  });

});
