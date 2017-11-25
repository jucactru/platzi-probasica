/**
 * [teclas Variable que almacena la colección de datos de las teclas para ser usadas en el programa]
 * @type {Object}
 */
var teclas = {
  UP: 38,
  DOWN: 40,
  LEFT: 37,
  RIGTH: 39
};
/**
 * [d Elemento que contendrá el dibujo]
 * @type {canvas}
 */
var d = document.getElementById('area_de_dibujo');

/**
 * [lienzo contexto de dibujo del canvas]
 * @type {Object}
 */
var lienzo = d.getContext("2d");

/**
 * [posicionXInicial variable que almacena el punto inicial en X]
 * @type {int}
 */
var posicionXInicial = d.width / 2;
console
/**
 * [posicionYInicial variable que almacena el punto inicial en Y]
 * @type {int}
 */
var posicionYInicial = d.height / 2;

/**
 * [valorColor valor del color de las líneas que se dibujarán]
 * @type {String}
 */
var valorColor = '#AAF';

/**
 * [valorDesplazamiento valor de desplazamiento de la línea]
 * @type {Number}
 */
var valorDesplazamiento = 10;


//agrego el evento de las flechas
//agregarEventoElemento(document, 'click', dibujarMouse);
agregarEventoElemento(document, 'mouseover', dibujarMouse);

/**
 * [dibujarTeclado Función que determina que tipo de línea hay que realizar]
 * @param  {Object} e [objeto completo de la tecla que se oprime y suelta]
 * @return {none}   [no hay retorno]

function dibujarTeclado(e) {
  switch (e.keyCode) {
    case teclas.UP:
      //dibujo la línea
      dibujarLinea(lienzo, valorColor, posicionXInicial, posicionYInicial, posicionXInicial, (posicionYInicial - valorDesplazamiento));
      //cambio la posicion de y
      posicionYInicial = posicionYInicial - valorDesplazamiento;
      break;
    case teclas.DOWN:
      //dibujo la línea
      dibujarLinea(lienzo, valorColor, posicionXInicial, posicionYInicial, posicionXInicial, (posicionYInicial + valorDesplazamiento));
      //cambio la posicion de y
      posicionYInicial = posicionYInicial + valorDesplazamiento;
      break;
    case teclas.LEFT:
      //dibujo la línea
      dibujarLinea(lienzo, valorColor, posicionXInicial, posicionYInicial, (posicionXInicial - valorDesplazamiento), posicionYInicial);
      //cambio la posicion de x
      posicionXInicial = posicionXInicial - valorDesplazamiento;
      break;
    case teclas.RIGTH:
      //dibujo la línea
      dibujarLinea(lienzo, valorColor, posicionXInicial, posicionYInicial, (posicionXInicial + valorDesplazamiento), posicionYInicial);
      //cambio la posicion de x
      posicionXInicial = posicionXInicial + valorDesplazamiento;
      break;
    default:
      console.log('es otra tecla');
  }
}
*/


function dibujarMouse(e){
  console.log(e);
}

/**
 * [dibujarLinea Función que realiza un trazo en un elemento canvas]
 * @param  {string} pLiezo      [contexto del cambas en 2d donde se dibujará]
 * @param  {string} pColor      [color de la línea]
 * @param  {int}    pXinicial   [pocisión inicial en x]
 * @param  {int}    pYinicial   [pocision inicial en y]
 * @param  {int}    pXfinal     [posicion final en x]
 * @param  {int}    pYfinal     [posicion final en y]
 * @return {none}               [no hay retorno]
 */
function dibujarLinea(pLienzo, pColor, pXinicial, pYinicial, pXfinal, pYfinal) {
  //inicio el trazo
  pLienzo.beginPath();
  //asigno el color a trazo
  pLienzo.strokeStyle = pColor;
  //asigno el grosor de la línea
  pLienzo.lineWidth = 3;
  //ubico el punto inicial
  pLienzo.moveTo(pXinicial, pYinicial);
  //dibujo la línea
  pLienzo.lineTo(pXfinal, pYfinal);
  //aplico el estilo
  pLienzo.stroke();
  //cierro el trazo
  pLienzo.closePath();
}

/**
 * [agregarEventoElemento Funcion que agrega un evento a cualquier elemento del DOM]
 * @param  {string}   pElemento   [nombre del elemento]
 * @param  {string}   pEvento     [nombre del elemento]
 * @param  {string}   pFuncion    [nombre de la función que ejecutará]
 * @return {none}                 [no hay retorno]
 */
function agregarEventoElemento(pElemento, pEvento, pFuncion) {
  pElemento.addEventListener(pEvento, pFuncion);
}
