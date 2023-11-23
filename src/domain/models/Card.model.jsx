export class Card {
  constructor(dataCard) {
    this.dataCard = dataCard
  }

  static fromJson(dataCardDTO) {
    return new Card(dataCardDTO)
  }
}
