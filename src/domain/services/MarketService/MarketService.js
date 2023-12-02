import axios from 'axios'
import { REST_SERVER_URL } from '../constants'
import { Market } from 'models/MarketModel/Market.model'
import { HandleError } from 'src/utils/HandleError/HandleError'

class MarketService {
  getAll = async (search) => {
    const marketsJson = await axios.get(`${REST_SERVER_URL}/puntos-de-venta`, { params: search })
    return marketsJson.data.map((market) => Market.fromJson(market))
  }

  getById = async (id) => {
    const marketJson = await axios.get(`${REST_SERVER_URL}/punto-de-venta/${id}`)
    return Market.fromJson(marketJson.data)
  }

  delete = async (id) => {
    try {      
      const response$ = await axios.delete(`${REST_SERVER_URL}/punto-de-venta/${id}/eliminar`)
      console.log('Elemento eliminado correctamente', response$.data)
    } catch (err) {
      HandleError(err)      
    }
  }

  create = async (market) => {
    try {
      const MarketJSON = Market.toJson(market)
      const response = await axios.post(`${REST_SERVER_URL}/punto-de-venta/nuevo`, MarketJSON)
      console.log('Market created successfully', response.data)

    } catch (error) {
      console.error('Error creating market:', error.message)
    }
  }

  update = async (market) => {
    console.log(market)
  }
}

export const marketService = new MarketService()
