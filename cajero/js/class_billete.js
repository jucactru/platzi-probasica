/**
 * Clase Billete
 */
class Billete {

  /**
   * constructor
   * @param  {int}      pValor          Valor del billete
   * @param  {int}      pCantidad       Cantidad de billetes
   * @return {none}                     No hay retorno
   */
  constructor(pValor, pCantidad) {
    //asigno los atributos
    this.VALOR = pValor;
    this.CANTIDAD = pCantidad;
  }


  /**
   * setCantidad Método que cambiará la cantidad de un billete
   * @param {number}    pCantidad       Cantidad para el billete
   */
  setCantidad(pCantidad) {
    //valido si es un numero
    if (Number.isInteger(pCantidad)) {
      //parseo el valor
      var cantidad = parseInt(pCantidad);
      //asigno la cantidad al atributo
      this.CANTIDAD = cantidad;
    }
  }

}
