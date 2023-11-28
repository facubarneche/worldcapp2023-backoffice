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
    console.log(id)
  }

  createMarket = async (market) => {
    console.log(market)
  }
}

export const marketService = new MarketService()
