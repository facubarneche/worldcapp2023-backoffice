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
    try {
      const MarketJSON = Market.toJson(market)
      const response = await axios.post(`${REST_SERVER_URL}/punto-de-venta/nuevo`, MarketJSON)
      console.log('Market created successfully', response.data)

    } catch (error) {
      console.error('Error creating market:', error.message)
    }
  }
}

export const marketService = new MarketService()
