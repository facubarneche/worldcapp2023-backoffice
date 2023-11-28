export class Player {

  constructor(playerdata) {
    this.id = playerdata.id
    this.nombre = playerdata.nombre
    this.apellido = playerdata.apellido
    this.fechaNacimiento = playerdata.fechaNacimiento        
    this.altura = playerdata.altura
    this.peso = playerdata.peso
    this.nroCamiseta = playerdata.nroCamiseta
    this.seleccion = playerdata.seleccion 
    this.anioDebut = playerdata.anioDebut
    this.posicion = playerdata.posicion
    this.esLider = playerdata.esLider
    this.cotizacion = playerdata.cotizacion

  }

  static fromJson = (playerdata) => new Player(playerdata)  

  title = () => this.nombre + " " + this.apellido
  
  content = () => { 
    return {
      anioDebut: this.anioDebut,     
      nroCamiseta: this.nroCamiseta,
      seleccion: this.seleccion,     
      posicion: this.posicion,
      altura: this.altura,     
      peso: this.peso,
    }
  }
  
  footer = () => "U$S " + this.cotizacion 
}