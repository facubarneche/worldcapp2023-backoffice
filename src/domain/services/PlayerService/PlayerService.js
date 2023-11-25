import axios from "axios"
import { REST_SERVER_URL } from "../constants"

class PlayerService{
  async getPlayer(playerID) {
    const response = axios.get(`${REST_SERVER_URL}/player/${playerID}`)
    return response
  }
}

export default PlayerService