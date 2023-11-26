export const BASE_VALUE = 100
export class Card {

  constructor(dataCard) {
    this.id = dataCard.id
    this.number = dataCard.numero
    this.onFire = dataCard.onFire
    this.printLevel = dataCard.nivelImpresion
    this.firstName = dataCard.nombre
    this.lastName = dataCard.apellido
    this.valoration = dataCard.valoracion
  }

  static fromJson = (dataCardDTO) => new Card(dataCardDTO)

  totalValoration = () => this.valoration + this.baseValoration()

  baseValoration = () => BASE_VALUE * this.onFireMultiplier() * this.evenMultiplier() * this.printMultiplier()

  onFireMultiplier = () => this.onFire ? 1.2 : 1.0

  evenMultiplier = () => this.number % 2 == 0 ? 1.1 : 1.0

  printMultiplier = () => this.printLevel.afectaValorEn


}
