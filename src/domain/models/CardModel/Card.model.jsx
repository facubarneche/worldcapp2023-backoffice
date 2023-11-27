export const BASE_VALUE = 100.0
export class Card {

  constructor(data) {
    this.id = data.id
    this.numero = data.numero
    this.onFire = data.onFire
    this.nivelImpresion = data.nivelImpresion
    this.nombre = data.nombre
    this.apellido = data.apellido
    this.valoracion = data.valoracion    
  }

  static fromJson = (cardata) => new Card(cardata)  

  title = () => this.nombre + " " + this.apellido
  
  content = () => { 
    return {
      numero: this.numero,
      onFire: this.onFire,
      cantidadImpresa: this.nivelImpresion 
    }
  }
  
  footer = () => "Valoración: " + this.totalValoration()

  totalValoration = () => this.valoracion + this.baseValoration()

  baseValoration = () => BASE_VALUE * this.onFireMultiplier() * this.evenMultiplier() * this.printMultiplier()

  onFireMultiplier = () => this.onFire ? 1.2 : 1.0

  evenMultiplier = () => this.numero % 2 == 0 ? 1.1 : 1.0

  printMultiplier = () => this.nivelImpresion.toLowerCase() === 'bajo' ? 1.0 : 0.85
}