document.addEventListener('DOMContentLoaded', function() {
    const botonesAñadirCarrito = document.getElementsByClassName('boton-carrito');
    const botonesEliminarCarrito = document.getElementsByClassName('boton-carrito-eliminar');
    const contadorCarrito = document.getElementById('contador-carrito');
    let contador = 0;
  
    Array.from(botonesAñadirCarrito).forEach(function(boton) {
      boton.addEventListener('click', function() {
        contador++;
        contadorCarrito.innerText = contador;
      });
    });
  
    Array.from(botonesEliminarCarrito).forEach(function(boton) {
      boton.addEventListener('click', function() {
        if (contador > 0) {
          contador--;
          contadorCarrito.innerText = contador;
        }
      });
    });
  });