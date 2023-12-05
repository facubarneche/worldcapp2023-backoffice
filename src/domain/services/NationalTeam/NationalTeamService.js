import axios from 'axios'
import { REST_SERVER_URL } from 'domain/constants'


class NationalTeamService {
  async getAllNames() {
    return (await axios.get(`${REST_SERVER_URL}/selecciones/pais`)).data
  }
}

export const nationalTeamService = new NationalTeamService()