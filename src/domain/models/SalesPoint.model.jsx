export class SalesPoint {

  constructor(dataSalesPoint) {
    this.id = dataSalesPoint.id
    this.name = dataSalesPoint.nombre
    this.type = dataSalesPoint.tipoPuntoDeVenta
    this.streetName = dataSalesPoint.calle
    this.streetNumber = dataSalesPoint.altura
    this.envelopeStock = dataSalesPoint.stockSobres
  }

  static fromJson = (dataSalesPoint) => new SalesPoint(dataSalesPoint)
}
