/*------------------------------------------------*/
/* Variables
/*------------------------------------------------*/

/**
 * [VP Contenedor del juego]
 * @type {canvas}
 */
var VP = document.getElementById('villa_platzi');

/**
 * [lienzo contexto del canvas donde se ubicará todo]
 * @type {canvas}
 */
var lienzo = VP.getContext("2d");

/**
 * [fondo objeto literal del fondo ]
 * @type {Object}
 */
var fondo = {
  url: "img/tile.png",
  cargaOK: false
};

/**
 * [vaca objeto literal de la vaca]
 * @type {Object}
 */
var vaca = {
  url: "img/vaca.png",
  cargaOK: false,
  cantidad: enteroAleatorio(3, 10)
};

/**
 * [pollo objeto literal del pollo]
 * @type {Object}
 */
var pollo = {
  url: "img/pollo.png",
  cargaOK: false,
  cantidad: enteroAleatorio(10, 15)
};

/**
 * [cerdo objeto literal del cerdo]
 * @type {Object}
 */
var cerdo = {
  url: "img/cerdo.png",
  cargaOK: false,
  identificador: 'imgCerdo'
};
/**
 * [limX Límite de área de dibujo del eje X]
 * @type {Number}
 */
var limX = 0;
/**
 * [limY Límite de área de dibujo del eje Y]
 * @type {Number}
 */
var limY = 420;

/*------------------------------------------------*/
/* Objetos
/*------------------------------------------------*/

//creo el objeto fondo y le agrego propiedades y eventos
fondo.imagen = new Image();
fondo.imagen.src = fondo.url;
agregarEventoElemento(fondo.imagen, 'load', cargarFondo);

//creo el objeto vaca y le agrego propiedades y eventos
vaca.imagen = new Image();
vaca.imagen.src = vaca.url;
agregarEventoElemento(vaca.imagen, 'load', cargarVaca);

//creo el objeto cerdo y le agrego propiedades y eventos
cerdo.imagen = new Image();
cerdo.imagen.src = cerdo.url;
cerdo.imagen.id = cerdo.identificador;
agregarEventoElemento(cerdo.imagen, 'load', cargarCerdo);
//agregarEventoElemento(document.getElementById(cerdo.imagen.id), 'click', clickCerdo);
//creo el objeto cerdo y le agrego propiedades y eventos
pollo.imagen = new Image();
pollo.imagen.src = pollo.url;
agregarEventoElemento(pollo.imagen, 'load', cargarPollo);


/*------------------------------------------------*/
/* Funciones
/*------------------------------------------------*/

/**
 * [dibujar Función que dibuja todos los elementos]
 * @return {none} [no hay retorno]
 */
function dibujar() {
  //valido que el fondo esté cargado
  if (fondo.cargaOK) {
    dibujarFondo();
  }
  //valido que la vaca esté cargada
  if (vaca.cargaOK) {
    dibujarVacas();
  }
  //valido que el pollo esté cargado
  if (pollo.cargaOK) {
    dibujarPollos();
  }
  //valido que el cerdo esté cargado
  if (cerdo.cargaOK) {
    dibujarCerdo();
  }
}
/**
 * [dibujarFondo Función que dibuja el fondo]
 * @return {none} [No hay retorno]
 */
function dibujarFondo() {
  //dibujo en el lienzo todas las imágnes
  lienzo.drawImage(fondo.imagen, 0, 0);
}

/**
 * [dibujarVacas Función que dibuja las vacas]
 * @return {none} [No hay retorno]
 */
function dibujarVacas() {
  //itero la cantidad para crear las vacas
  for (var v = 0; v < vaca.cantidad; v++) {
    //creo las variables de ubicación
    var x = enteroAleatorio(limX, limY);
    var y = enteroAleatorio(limX, limY);
    //dibujo en el lienzo todas las imágnes
    lienzo.drawImage(vaca.imagen, x, y);
  }
}
/**
 * [dibujarCerdo Función que dibuja el cerdo]
 * @return {none} [No hay retorno]
 */
function dibujarCerdo() {
  //creo las variables de ubicación
  var x = enteroAleatorio(limX, limY);
  var y = enteroAleatorio(limX, limY);
  //dibujo en el lienzo todas las imágnes
  lienzo.drawImage(cerdo.imagen, x, y);
}

/**
 * [dibujarPollos Función que dibuja los pollos]
 * @return {none} [No hay retorno]
 */
function dibujarPollos() {
  //itero la cantidad para crear las vacas
  for (var p = 0; p < pollo.cantidad; p++) {
    //creo las variables de ubicación
    var x = enteroAleatorio(limX, limY);
    var y = enteroAleatorio(limX, limY);
    //dibujo en el lienzo todas las imágnes
    lienzo.drawImage(pollo.imagen, x, y);
  }
}

function clickCerdo() {
  alert('¡oinc, oinc!');
}


/**
 * [cargarFondo Función que cambia el estado de carga del fondo y redibuja ]
 * @return {none} [no hay retorno]
 */
function cargarFondo() {
  fondo.cargaOK = true;
  dibujar();
}
/**
 * [cargarVaca Función que cambia el estado de carga de la vaca y redibuja]
 * @return {[type]} [description]
 */
function cargarVaca() {
  vaca.cargaOK = true;
  dibujar();
}
/**
 * [cargarCerdo Función que cambia el estado de carga del cerdo y redibuja]
 * @return {[type]} [description]
 */
function cargarCerdo() {
  cerdo.cargaOK = true;
  dibujar();
}
/**
 * [cargarPollo Función que cambia el estado de carga del pollo y redibuja]
 * @return {[type]} [description]
 */
function cargarPollo() {
  pollo.cargaOK = true;
  dibujar();
}

/**
 * [enteroAleatorio función que obtiene un valor randomico en un intervalo de numeros]
 * @param  {int} pRangoMin [valor mínimo]
 * @param  {int} pRangoMax [valor máximo]
 * @return {int}           [valor calculado en la formula]
 */
function enteroAleatorio(pRangoMin, pRangoMax) {
  //creo el valor retorno
  var valorRetorno = 0;
  //valido que el mínimo sea menor
  if (pRangoMin < pRangoMax) {
    //calculo el valor retorno y lo asigno a la variable
    valorRetorno = Math.floor(Math.random() * pRangoMax - pRangoMin + 1) + pRangoMin;
  }
  //devuelvo el valor
  return valorRetorno;
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
