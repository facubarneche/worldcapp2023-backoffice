export class Market {

  constructor(storedata) {
    this.id = storedata.id
    this.nombre = storedata.nombre
    this.tipo = storedata.tipoPuntoDeVenta
    this.calle = storedata.direccion.calle
    this.altura = storedata.direccion.altura
    this.stock = storedata.stockSobres
    this.valoracion = storedata.valoracion
    this.ubiGeografica = storedata.direccion.ubiGeografica    
    this.pedidosPendientes = storedata.pedidosPendientes    
  }

  static fromJson = (storedata) => new Market(storedata)  

  title = () => this.nombre
  
  content = () => { 
    return {
      direccion: this.calle + ' ' + this.altura,      
      stock: this.stock + ' sobres'
    }
  }
  
  footer = () => "Tipo " + this.tipo  
}