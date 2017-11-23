/**
 * [d elemento canvas donde se dibujará]
 * @type {canvas}
 */
var d = document.getElementById('canvas_dibujo');
/**
 * [lienzo lienzo tomado del elemento canvas]
 * @type {canvas}
 */
var lienzo = d.getContext('2d');

/**
 * [controlBoton elemento botón]
 * @type {input}
 */
var controlBoton = document.getElementById('btn_dibujar');
/**
 * [controlTexto elemento texto]
 * @type {input}
 */
var controlTexto = document.getElementById('inp_lineas');

//agrego el evento para click
agregarEventoElemento(controlBoton, 'click', validarLineas);

/**
 * [validarLineas Funcion que realiza la validación del control de texto y realiza el dibujo]
 * @return {none} [no hay retorno]
 */
function validarLineas() {
  //tomo el valor del control lineas
  if (controlTexto.value != '') {
    //limpio el lienzo
    limpiarLienzo();
    //realizo el dibujo
    realizarDibujo(controlTexto.value);
  } else {
    alert('chicho debes agregar una cantidad de líneas');
  }
}

/**
 * [limpiarLienzo function que limpia el contenedor]
 * @return {none} [no hay retorno]
 */
function limpiarLienzo() {
  lienzo.clearRect(0, 0, d.width, d.height);
}

/**
 * [realizarDibujo Función que realiza el dibujo en el elemento canvas]
 * @param  {int} pCantidadLineas [Cantidad de líneas en la que se realizará el dibujo]
 * @return {none}                 [no hay retorno]
 */
function realizarDibujo(pCantidadLineas) {
  //creo la variable de límete
  var limiteLinea = d.width;
  var valorLinea = 0;
  var valorMultiplicador = pCantidadLineas;
  var yI, xF
  var valorColor = "#CCC";
  //itero para dibujar
  while (valorLinea < limiteLinea) {
    //cambio el valor de las coordenadas
    yI = valorMultiplicador * valorLinea;
    xF = valorMultiplicador * (valorLinea + 1);
    yF = limiteLinea - (valorMultiplicador * valorLinea);
    //dibujo líneas
    dibujarLinea(valorColor, 300, yI, xF, 0);
    dibujarLinea(valorColor, 0, yI, xF, 300);
    dibujarLinea(valorColor, yF, 0, 0, xF);
    dibujarLinea(valorColor, yF, 300, 300, xF);
    //aumento el
    valorLinea++;
  }
  dibujarLinea(valorColor, 1, 1, 1, 300);
  dibujarLinea(valorColor, 1, 1, 300, 1);
  dibujarLinea(valorColor, 1, 299, 299, 299);
  dibujarLinea(valorColor, 299, 1, 299, 299);
}


/**
 * [dibujarLinea Función que realiza un trazo en un elemento canvas]
 * @param  {string} pColor      [color de la línea]
 * @param  {int}    pXinicial   [pocisión inicial en x]
 * @param  {int}    pYinicial   [pocision inicial en y]
 * @param  {int}    pXfinal     [posicion final en x]
 * @param  {int}    pYfinal     [posicion final en y]
 * @return {none}               [no hay retorno]
 */
function dibujarLinea(pColor, pXinicial, pYinicial, pXfinal, pYfinal) {
  //inicio el trazo
  lienzo.beginPath();
  //asigno el color a trazo
  lienzo.strokeStyle = pColor;
  //ubico el punto inicial
  lienzo.moveTo(pXinicial, pYinicial);
  //dibujo la línea
  lienzo.lineTo(pXfinal, pYfinal);
  //aplico el estilo
  lienzo.stroke();
  //cierro el trazo
  lienzo.closePath();
}

/**
 * [agregarEventoElemento Funcion que agrega un evento a cualquier elemento del DOM]
 * @param  {string}   pElemento   [nombre del elemento]
 * @param  {string}   pEvento     [nombre del elemento]
 * @param  {string}   pFuncion    [nombre de la función que ejecutará]
 * @return {none}                 [no hay retorno]
 */
function agregarEventoElemento(pElemento, pEvento, pFuncion){
  pElemento.addEventListener(pEvento, pFuncion);
}
