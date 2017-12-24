/**
 * [DIR_IMAGENES Constante para el directorio de imagenes]
 * @type {String}
 */
var DIR_IMAGENES = 'img';

/**
 * dataImagenes contiene los nombres de imagenes de los pakimanes
 * @type {Array}
 */
var dataImagenes = [];
//asigno los nombres de imagenes
dataImagenes['Cauchin'] = 'vaca.png';
dataImagenes['Pokacho'] = 'pollo.png';
dataImagenes['Tocinauro'] = 'cerdo.png';

/**
 * dataColeccion - Array que contendrá la colección de pakimanes
 * @type {Array}
 */
var dataColeccion = [];
//agrego los pakimanes a colección
dataColeccion.push(new Pakiman("Cauchin", 100, 30));
dataColeccion.push(new Pakiman("Pokacho", 80, 50));
dataColeccion.push(new Pakiman("Tocinauro", 120, 40));

//itero la data para mostrarla en pantalla
for (var itemPakiman of dataColeccion) {
  itemPakiman.mostrar();
}
