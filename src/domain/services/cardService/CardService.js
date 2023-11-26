import axios from "axios"
import { REST_SERVER_URL } from "../constants"
import { Card } from "src/domain/models/Card.model"


class CardService {
  getCards = async () =>
    (await axios.get(`${REST_SERVER_URL}/figuritas/index`)).data.map(figurita => Card.fromJson(figurita))

  getDataCreateCards = async () => (await axios.get(`${REST_SERVER_URL}/figuritas/data-create-figurita`)).data
}

export const cardService = new CardService()
