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
    this.debut = playerdata.debut
    this.posicion = playerdata.posicion
    this.posiciones = playerdata.posiciones
    this.esLider = playerdata.esLider
    this.cotizacion = playerdata.cotizacion
  }

  static fromJson = (playerdata) => new Player(playerdata)

  get objectCreateModifyPlayer() {
    return {
      nombre: this.nombre,
      apellido: this.apellido,
      fechaNacimiento: this.fechaNacimiento,
      altura: this.altura,
      peso: this.peso,
      nroCamiseta: this.nroCamiseta,
      seleccion: this.seleccion,
      debut: this.debut,
      posicion: this.posicion,
      posiciones: this.posiciones,
      esLider: this.esLider,
      cotizacion: this.cotizacion 
    }
  }

  get JSONCreateModifyPlayer() {
    return JSON.stringify(this.objectCreateModifyPlayer)
  }

  get title() {
    return this.nombre + ' ' + this.apellido
  }

  get content() {
    return {
      fechaNacimiento: this.formatDate(this.fechaNacimiento),
      nroCamiseta: this.nroCamiseta,
      seleccion: this.seleccion,
      posicion: this.posicion,
      altura: this.altura,
      peso: this.peso,
    }
  }

  get footer() {
    return 'U$S ' + this.cotizacion
  }

  get tipo() {
    return 'Jugadores'
  }

  formatDate = (date) => {
    const date$ = date.split('-')
    return date$[2] + '-' + date$[1] + '-' + date$[0]
  }
}
