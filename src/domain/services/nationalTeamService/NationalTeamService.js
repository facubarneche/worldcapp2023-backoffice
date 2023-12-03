import axios from "axios"
import { REST_SERVER_URL } from "../constants"

class NationalTeamService {
  async getAll(){
    return (await axios.get(`${REST_SERVER_URL}/selecciones/pais`)).data
  }

}

export const nationalTeamService = new NationalTeamService()