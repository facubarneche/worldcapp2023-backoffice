export class Card {
  VALOR_BASE = 100

  constructor(dataCard) {
    this.id = dataCard.id
    this.numero = dataCard.numero
    this.onFire = dataCard.onFire
    this.nivelImpresion = dataCard.nivelImpresion
    this.nombre = dataCard.nombre
    this.apellido = dataCard.apellido
    this.valoracion = dataCard.valoracion
  }

  static fromJson(dataCardDTO) {
    return new Card(dataCardDTO)
  }

  valoracionTotal(){
    return this.valoracion + this.valoracionBase 
  }

  valoracionBase(){
    return this.VALOR_BASE * 
    this.multiplicadorOnFire() * 
    this.multiplicadorEsPar() * 
    this.multiplicadorImpresion() 
  }

  multiplicadorOnFire(){
    return this.onFire ? 1.2 : 1.0
  }

  multiplicadorEsPar(){
    return this.numero % 2 == 0 ? 1.1 : 1.0
  }

  multiplicadorImpresion(){
    return this.nivelImpresion === 'bajo' ? 1.0 : 0.85
  }
}
