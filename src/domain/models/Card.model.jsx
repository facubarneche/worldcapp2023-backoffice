export class Card {
  BASE_VALUE = 100

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

  baseValoration = () => this.BASE_VALUE * this.onFireMultiplier() * this.evenMultiplier() * this.printMultiplier()

  onFireMultiplier = () => this.onFire ? 1.2 : 1.0

  evenMultiplier = () => this.number % 2 == 0 ? 1.1 : 1.0

  printMultiplier = () => this.printLevel.afectaValorEn


}
