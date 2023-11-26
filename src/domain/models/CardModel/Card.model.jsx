export const BASE_VALUE = 100
export class Card {

  constructor(dataCard) {
    this.id = dataCard.id
    this.numero = dataCard.numero
    this.onFire = dataCard.onFire
    this.nivelImpresion = dataCard.nivelImpresion
    this.nombre = dataCard.nombre + " " + dataCard.apellido
    this.valoracion = dataCard.valoracion
  }

  static fromJson = (dataCardDTO) => new Card(dataCardDTO)

  totalValoration = () => this.valoracion + this.baseValoration()

  baseValoration = () => BASE_VALUE * this.onFireMultiplier() * this.evenMultiplier() * this.printMultiplier()

  onFireMultiplier = () => this.onFire ? 1.2 : 1.0

  evenMultiplier = () => this.numero % 2 == 0 ? 1.1 : 1.0

  printMultiplier = () => this.nivelImpresion.afectaValorEn


}
