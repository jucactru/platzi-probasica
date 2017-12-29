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

  setCantidad(pValor) {
    //valido si es un numero
    if (Number.isInteger(pValor)) {
      //parseo el valor
      var cantidad = parseInt(pValor);
      //asigno la cantidad al atributo
      this.CANTIDAD = cantidad;
    }
  }

}
