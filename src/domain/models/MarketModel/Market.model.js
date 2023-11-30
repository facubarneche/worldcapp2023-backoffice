export class Market {
  constructor(storedata) {
    this.id = storedata.id
    this.nombre = storedata.nombre
    this.tipoPuntoDeVenta = storedata.tipoPuntoDeVenta
    this.direccionPlana = storedata.direccionPlana        
    this.geoX = storedata.geoX
    this.geoY = storedata.geoY
    this.stockSobres = storedata.stockSobres
    this.pedidosPendientes = storedata.pedidosPendientes    
  }

  static fromJson = (storedata) => new Market(storedata)

  get title() {
    return this.nombre
  }

  get content() {
    return {
      direccion: this.direccionPlana,     
      stock: this.stockSobres + ' sobres'
    }
  }

  get footer() {
    return 'Tipo ' + this.tipoPuntoDeVenta
  }

  get tipo() {return this.tipoPuntoDeVenta}

  static toJson = (storedata) => {
    return {
      id: storedata.id,
      nombre: storedata.nombre,
      tipoPuntoDeVenta: storedata.tipoPuntoDeVenta,
      direccion: {
        calle: storedata.direccionPlana.split(' ')[0],
        altura: parseInt(storedata.direccionPlana.split(' ')[1], 10) || null,
        ubiGeografica: `${storedata.geoX} ${storedata.geoY}`
      },
      direccionPlana: storedata.direccionPlana,
      geoX: storedata.geoX,
      geoY: storedata.geoY,
      stockSobres: storedata.stockSobres,
      pedidosPendientes: storedata.pedidosPendientes,
    }
  }
}
