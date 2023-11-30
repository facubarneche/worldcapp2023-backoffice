import axios from 'axios'
import { REST_SERVER_URL } from '../constants'
import { Card } from 'src/domain/models/CardModel/Card.model'

class CardService {
  getAll = async (search) => {
    const figuritasJSON = await axios.get(`${REST_SERVER_URL}/figuritas`, { params: search })
    return figuritasJSON.data.map((figurita) => Card.fromJson(figurita))
  }

  getById = async (id) => {
    console.log(id)
  }

  update = async (card) => {
    console.log(card)
  }

  delete = async (id) => {
    try {
      console.log(id)
    } catch (err) {
      console.log(err)
    }
  }

  create = async (card) => {
    console.log(card)
  }

  getDataCreateCards = async () => (await axios.get(`${REST_SERVER_URL}/figuritas/data-create-figurita`)).data
}

export const cardService = new CardService()
