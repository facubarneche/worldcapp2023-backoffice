import axios from 'axios'
import { REST_SERVER_URL } from '../constants'
import { Market } from 'models/MarketModel/Market.model'

class MarketService {
  getMarkets = async (search) => {
    const marketsJson = await axios.get(`${REST_SERVER_URL}/puntos-de-venta`, { params: search })
    return marketsJson.data.map((market) => Market.fromJson(market))
  }

  getMarketById = async (id) => {
    const marketJson = await axios.get(`${REST_SERVER_URL}/punto-de-venta/${id}`)
    return Market.fromJson(marketJson.data)
  }

  updateMarket = async (market) => {
    console.log(market)
  }

  deleteMarket = async (id) => {
    try {
      const response$ = await axios.delete(`${REST_SERVER_URL}/punto-de-venta/eliminar/${id}`)
      console.log('Elemento eliminado correctamente', response$.data)
    } catch (e) {
      console.error('Error al eliminar el elemento')      
    }
  }

  createMarket = async (market) => {
    //TODO: Pasar market con formato CardMarketDTO
    // {
    //   "nombre": "Nombre fafa",
    //   "tipoPuntoDeVenta": "Kioscos",
    //   "direccion": {
    //     "calle": "Urquiza",
    //     "altura": 31,
    //     "ubiGeografica": "x: -34.11119065556780327597152790986001491546630859375, y: -58.1111189167800006316610961221158504486083984375"
    //   }, 
    //   "stockSobres": 20,
    //   "pedidosPendientes": 2
    // }
    await axios.post(`${REST_SERVER_URL}/punto-de-venta/nuevo`, market)
  }
}

export const marketService = new MarketService()
