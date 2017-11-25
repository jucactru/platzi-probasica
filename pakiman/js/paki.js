/**
 * Clase pakiman
 */
class Pakiman {

  /**
   * constructor
   * @param  {String}   pNombre   Nombre que se le asignará al objeto
   * @param  {Number}   pVida     Cantidad de vida que tendrá el objeto
   * @param  {Number}   pAtaque   Ataque que tendrá el objeto
   * @return {none}               No hay retorno
   */
  constructor(pNombre, pVida, pAtaque) {
    //asigno el parametro a los atributos
    this.nombre = pNombre; //nombre
    this.vida = pVida; //vida
    this.ataque = pAtaque; //Ataque
  }

  /**
   * hablar función que mostrará
   * @return {[type]} [description]
   */
  hablar() {
    alert(this.nombre);
  }

}


//instancio los pakimanes
var objCauchin = new Pakiman("Cauchín", 100, 30);
var objPokacho = new Pakiman("Pokacho", 80, 50);
var objTocinauro = new Pakiman("Tocinauro", 120, 40);

console.log(objCauchin, objPokacho, objTocinauro);
