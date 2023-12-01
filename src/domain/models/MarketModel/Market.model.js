export class Market {
  constructor(storedata) {
    this.id = storedata.id
    this.nombre = storedata.nombre
    this.tipoPuntoVenta = storedata.tipoPuntoDeVenta
    this.direccion = storedata.direccionPlana
    this.geoX = storedata.geoX
    this.geoY = storedata.geoY
    this.stock = storedata.stockSobres
    this.pedidosPendientes = storedata.pedidosPendientes
  }

  static fromJson = (storedata) => new Market(storedata)

  get title() {
    return this.nombre
  }

  get content() {
    return {
      direccion: this.direccion,
      stock: this.stock + ' sobres',
    }
  }

  get footer() {
    return 'Tipo ' + this.tipo
  }
  
  get tipo() {return this.tipoPuntoVenta}
}