/**
 * cajaAtm variable que contendrá la cantidad de billetes de cajero
 * @type {Array}
 */
var cajaAtm = [];

/**
 * cajaEntregado variable que contendrá la cantidad a entregar en la transacción
 * @type {Array}
 */
var cajaEntregado = [];

/**
 * valorRetirar variable que contendrá la cantidad a retirar
 * @type {Number}
 */
var valorRetirar;

/**
 * valorDivision variable que almacenará los billetes a entregar de cada tipo
 * @type {Number}
 */
var valorDivision = 0;

/**
 * valorCantidadBilletes variable que almacenará la cantidad de billetes a entregar en una transacción de cada billete
 * @type {Number}
 */
var valorCantidadBilletes = 0;

/**
 * btnExtraer
 * @type {button}
 */
var btnExtraer = document.getElementById('btn_extraer');

/**
 * contentResultado contenedor de resultados billetes
 * @type {Object}
 */
var contentResultado = document.getElementById('content_resultado');

//agrego los billetes a usar en el ATM y sus cantidades
cajaAtm.push(new Billete(50, 3));
cajaAtm.push(new Billete(20, 2));
cajaAtm.push(new Billete(10, 2));

//agrego los eventos
btnExtraer.addEventListener('click', extraerDinero);

/**
 * extraerDinero Función que inicia el proceso de extracción
 * @return  {none}     No hay retorno
 */
function extraerDinero() {
  //limpio el contenedor de resultados
  limpiarResultado();
  //Obtendo el valor del control de dinero
  var valorControlDinero = document.getElementById('ctrl_dinero');
  //asigno el valor del control a la variable a retirar
  valorRetirar = parseInt(valorControlDinero.value);
  //itero la data cajaAtm
  for (itemCaja of cajaAtm) {
    //valido si el valor a retirar
    if (valorRetirar > 0) {
      //realizo la división
      valorDivision = Math.floor(valorRetirar / itemCaja.VALOR);
      //asigno la cantidad de billetes
      valorCantidadBilletes = valorDivision;
      //valido si la diferencia es mayor que la cnatidad de billetes
      if (valorDivision > itemCaja.CANTIDAD) {
        //asigno la cantidad de billetes del item
        valorCantidadBilletes = itemCaja.CANTIDAD;
      }
      //asigno los billetes a cajaEntregado
      cajaEntregado.push(new Billete(itemCaja.VALOR, valorCantidadBilletes));
      //retiro los billetes de la caja
      //itemCaja.setCantidad((itemCaja.CANTIDAD - valorCantidadBilletes))
      //calculo el dinero faltante a entregar
      valorRetirar -= (valorCantidadBilletes * itemCaja.VALOR);
    }
  }
  //muestro el resultados
  mostrarResultado(valorRetirar);


}

/**
 * mostrarResultado función que muestra el resultado de la trasacción
 * @param  {number}       pValorRetirar     Valor como resultado de la extracción del dinero
 * @return {none}                           No hay retorno
 */
function mostrarResultado(pValorRetirar) {
  //valido si tengo los billetes necesarios
  if (valorRetirar > 0) {
    //no tenemos el dinero necesarios
    contentResultado.innerHTML = 'no tengo el dinero que solicitas :´(';
  } else {
    //itero los billetes a entregar
    for (itemEntregar of cajaEntregado) {
      if (itemEntregar.CANTIDAD > 0) {
        //agrego el item al resultado
        contentResultado.innerHTML += itemEntregar.CANTIDAD + ' - billetes de ' + itemEntregar.VALOR + '<br />';
      }
    }
  }
}

/**
 * limpiarResultado función que limpia el contenedor de resultados
 * @return {none}     No hay retorno
 */
function limpiarResultado() {
  //limpio el contenedor
  contentResultado.innerHTML = '';
  //limpio la caja entregado
  cajaEntregado = [];
}
