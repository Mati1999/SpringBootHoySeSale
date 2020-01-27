//CARD PRODUCTO------------------------//
class CardProducto extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    this.innerHTML = `
    <div class="card" style="width: 18rem;">
      <img src="" class="card-img-top" alt="...">
      <div class="card-body">
        <h5 class="card-title"></h5>
        <p class="card-text"></p>
        <p class="card-price"></p>
        <a class="btn btn-primary agregar-quitar agregar">Agregar al carro</a>
      </div>
    </div>
    `
  }
};

window.customElements.define('card-producto', CardProducto);

//ITEM CARRITO-------------------------//
class ItemCarrito extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    this.innerHTML = `
    <li class="list-group-item">
      <button class="btn quitar-item-carrito" style="position: absolute; right: 0">
        <ion-icon name="close"></ion-icon>
      </button>
      <h5 class="item-title"></h5>
      <p class="item-description"></p>
      <p class="item-price"></p>
      <input class="form-control item-amount" type="number" value=1 placeholder="cantidad">
    </li>
    `
  }
};

window.customElements.define('item-carrito', ItemCarrito);


$( window ).on( "load", function() {

  //Para poder servir los Jsons:
  //1- Descargar la extension "Moesif Orign & CORS Changer" de Chrome
  //2- Descargar XAMPP o cualquier servidor Apache.
  //3- Copiar los archivos json dentro del directorio htdocs de XAMPP
  //4- Iniciar XAMPP, buscar la URL para acceder a esos archivos y armar el request

  //GET CATEGORIES ------------------------------------------------------------
  const requestCategorias = new XMLHttpRequest();

  requestCategorias.open('GET', 'http://localhost:8080/mockdata/categorias.json', true);
  requestCategorias.send();
  requestCategorias.onreadystatechange = function () {
    if(this.readyState == 4 && this.status == 200) {

      var categoriasJson = JSON.parse(this.response);
      var categorias = document.querySelector(".filtros-lista");

      //Create component for each product in the repsonse
      for(var i=0; i < categoriasJson.length; i++) {
        //Create a new category
        let category = document.createElement("a");

        category.classList.add("list-group-item");
        category.classList.add("list-group-item-action");
        category.setAttribute("data-filter", "." + categoriasJson[i].descripcion);
        category.setAttribute("id", categoriasJson[i].descripcion);
        category.innerText = categoriasJson[i].descripcion;
        categorias.appendChild(category);
      }

    }
  }

  //GET PRODUCTOS -------------------------------------------------------------
  const requestProductos = new XMLHttpRequest();
  requestProductos.open('GET', 'http://localhost:8080/mockdata/productos.json', true);
  requestProductos.send();
  requestProductos.onreadystatechange = function () {
    if(this.readyState == 4 && this.status == 200) {

      var productosJson = JSON.parse(this.response);
      var grid = document.getElementById("grid");

      //Create component for each product in the repsonse
      for(var i=0; i < productosJson.length; i++) {
        //Create a new card-producto
        let card = document.createElement("card-producto");
        card.setAttribute("id", productosJson[i].id_producto);
        card.classList.add(productosJson[i].categoria.descripcion);
        card.classList.add("grid-item");
        grid.appendChild(card);

        card.getElementsByClassName("card-img-top")[0].setAttribute('src', productosJson[i].imagen);
        card.getElementsByClassName("card-title")[0].innerText = productosJson[i].titulo;
        card.getElementsByClassName("card-text")[0].innerText = productosJson[i].descripcion;
        card.getElementsByClassName("card-price")[0].innerText = "$" + productosJson[i].precio;
      }

    }
  }

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

  var carritoArray = [];

  //CALCULAR TOTAL E ITEMS COUNT----------------------------------------------
  function calcularItemCountYTotal() {
    let items = document.querySelectorAll('.lista-carrito item-carrito');
    let count = document.querySelectorAll('.lista-carrito item-carrito').length;
    document.querySelector('.item-count').innerHTML = count;

    let total = 0;
    for (var i = 0; i < count; i++) {
      let price =  $(items[i]).find('.item-price').text();
      price = price.replace('$', "");
      let amount = $(items[i]).find('.item-amount').val();
      let totalItem = Number(price) * Number(amount);
      total = total + totalItem;
    }

    document.querySelector('.precio-total').innerText = "Total $" + total;
  };

  //QUITAR PRODUCTO DEL CARRITO----------------------------------------------
  $(document).on("click", ".quitar-item-carrito", function(){
    let removeItem = this.closest('item-carrito');
    let removeItemId = removeItem.getAttribute('iditemcarrito');
    document.querySelector('.lista-carrito ul').removeChild(removeItem);

    let enableAddButton = $("card-producto#"+removeItemId).find(".agregar");
    console.log(enableAddButton);
    enableAddButton.text("Agregar al carro");
    enableAddButton.removeClass("disabled");

    calcularItemCountYTotal();
  });

  //AGREGAR PRODUCTO AL CARRITO----------------------------------------------
  $(document).on("click", ".card .agregar", function(){
    let card = this.closest('card-producto');
    let item = document.createElement("item-carrito");
    item.setAttribute("idItemCarrito", card.getAttribute("id"));

    document.querySelector('.lista-carrito ul').appendChild(item);
    item.getElementsByClassName("item-title")[0].innerText = $(card).find(".card-title").text();
    item.getElementsByClassName("item-price")[0].innerText = $(card).find(".card-price").text();
    this.innerHTML = "Agregado";
    this.classList.add('disabled');

    calcularItemCountYTotal();
  });

  //CALCULAR TOTAL CUANDO SE CAMBIA LA CANTIDAD -----------------------------
  $(document).on("keyup", ".item-amount", function(){
    calcularItemCountYTotal();
  });
});
