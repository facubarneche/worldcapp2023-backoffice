import axios from 'axios'
import { REST_SERVER_URL } from '../constants'
import { Player } from 'src/domain/models/PlayerModel/Player.model'

class PlayerService {
  getPlayers = async (search) => {
    const playersJson = await axios.get(`${REST_SERVER_URL}/jugadores`, { params: search })
    return playersJson.data.map((player) => Player.fromJson(player))
  }

  getPlayerById = async (id) => {
    const playerJson = await axios.get(`${REST_SERVER_URL}/jugador/${id}`)
    return Player.fromJson(playerJson.data)
  }

  updatePlayer = async (player) => {
    console.log(player)
  }

  deletePlayer = async (id) => {
    console.log(id)
  }

  createPlayer = async (player) => {
    console.log(player)
  }
}

export const playerService = new PlayerService()
