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

  title = () => this.nombre
  
  content = () => { 
    return {
      direccion: this.direccionPlana,     
      stock: this.stockSobres + ' sobres'
    }
  }
  
  footer = () => "Tipo " + this.tipoPuntoDeVenta 

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


// // Dividir la cadena en dos partes
// const parts = cardStub.direccion.ubiGeografica.split(',');

// // Eliminar los caracteres no deseados y convertir en número
// const x = Number(parts[0].replace('x: ', ''));
// const y = Number(parts[1].replace(' y: ', ''));

// // Crear el nuevo objeto
// const ubiGeografica = { x, y };
