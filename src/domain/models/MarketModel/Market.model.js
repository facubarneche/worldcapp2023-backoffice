import { BusinessType } from "services/constants"

export class Market {
  constructor(storedata = {}) {
    this.id = storedata.id ?? -1
    this.nombre = storedata.nombre ?? ''
    this.tipoPuntoDeVenta = storedata.tipoPuntoDeVenta ?? BusinessType.Kioscos
    this.direccion = storedata.direccionPlana ?? ''
    this.geoX = storedata.geoX ?? 0
    this.geoY = storedata.geoY ?? 0
    this.stock = storedata.stockSobres ?? 0
    this.pedidosPendientes = storedata.pedidosPendientes ?? 0
  }

  static fromJson = (storedata) => new Market(storedata)

  get title() {
    return this.nombre
  }

  get content() {
    return {
      direccion: this.direccion,     
      stock: this.stock + ' sobres'
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
