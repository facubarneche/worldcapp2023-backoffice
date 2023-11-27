import axios from "axios"
import { REST_SERVER_URL } from "../constants"
import { Market } from "models/MarketModel/Market.model"

class MarketService {
  getMarkets = async (search) => {
    const salesPointJSON = await axios.get(`${REST_SERVER_URL}/puntos-de-venta`, {params: search})
    return salesPointJSON.data.map(market => Market.fromJson(market))
  }
}

export const marketService = new MarketService()