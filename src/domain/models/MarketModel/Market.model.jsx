export class Market {

  constructor(storedata) {
    this.id = storedata.id
    this.nombre = storedata.nombre
    this.tipo = storedata.tipoPuntoDeVenta
    this.direccion = storedata.direccion        
    this.geoX = storedata.geoX
    this.geoY = storedata.geoY
    this.stock = storedata.stockSobres
    this.pedidosPendientes = storedata.pedidosPendientes    
  }

  static fromJson = (storedata) => new Market(storedata)  

  title = () => this.nombre
  
  content = () => { 
    return {
      direccion: this.direccion,     
      stock: this.stock + ' sobres'
    }
  }
  
  footer = () => "Tipo " + this.tipo 
}


// // Dividir la cadena en dos partes
// const parts = cardStub.direccion.ubiGeografica.split(',');

// // Eliminar los caracteres no deseados y convertir en número
// const x = Number(parts[0].replace('x: ', ''));
// const y = Number(parts[1].replace(' y: ', ''));

// // Crear el nuevo objeto
// const ubiGeografica = { x, y };
