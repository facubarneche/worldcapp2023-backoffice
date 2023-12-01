import axios from 'axios'
import { REST_SERVER_URL } from '../constants'
import { Card } from 'src/domain/models/CardModel/Card.model'

class CardService {
  getAll = async (search) => {
    const figuritasJSON = await axios.get(`${REST_SERVER_URL}/figuritas`, { params: search })
    return figuritasJSON.data.map((figurita) => Card.fromJson(figurita))
  }

  getById = async (id) => {
    const figuritasJSON = await axios.get(`${REST_SERVER_URL}/punto-de-venta/${id}`)
    return Card.fromJson(figuritasJSON.data)
  }

  update = async (card) => {
    console.log(card)
  }

  delete = async (id) => {
    try {
      const response$ = await axios.delete(`${REST_SERVER_URL}/figurita/eliminar/${id}`)
      console.log('Elemento eliminado correctamente', response$.data)
    } catch (err) {
      console.error('Error al eliminar el elemento')      
    }
  }

  create = async (card) => {
    console.log(card)
  }

  getDataCreateCards = async () => (await axios.get(`${REST_SERVER_URL}/figuritas/data-create-figurita`)).data
}

export const cardService = new CardService()
