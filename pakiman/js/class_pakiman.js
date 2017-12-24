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
    this.imagen = new Image();
    this.imagen.src = DIR_IMAGENES + '/' + dataImagenes[this.nombre];
  }

  /**
   * hablar función que mostrará
   * @return {none}           No hay retorno
   */
  hablar() {
    alert(this.nombre);
  }

  /**
   * mostrar Imprime la imagen del pakiman
   * @return {none}           No hay retorno
   */
  mostrar() {
    document.body.appendChild(this.imagen);
    document.write('<p>');
    document.write('<strong>' + this.nombre + '</strong><br>');
    document.write('<strong>Vida:</strong> ' + this.vida + '<br>');
    document.write('<strong>Ataque:</strong> ' + this.ataque + '<br>');
    document.write('</p>');
    document.write('<hr>');
    //agrego la imagen

  }

}
