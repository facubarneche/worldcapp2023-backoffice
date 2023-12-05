import axios from "axios"
import { REST_SERVER_URL } from "../constants"
import { Team } from "src/domain/models/TeamModel/Team.model"
import { HandleError } from "src/utils/HandleError/HandleError"

class NationalTeamService {
  
  async getAllNames(){
    return (await axios.get(`${REST_SERVER_URL}/selecciones/pais`)).data
  }

  getAll = async (search) => {
    const teamsJson = await axios.get(`${REST_SERVER_URL}/selecciones`, { params: search })
    return teamsJson.data.map((team) => Team.fromJson(team))
  }
  
  // getById = async (id) => {
  //   const teamsJson = await axios.get(`${REST_SERVER_URL}/selecciones/${id}`)
  //   return Team.fromJson(teamsJson.data)
  // }

  delete = async (id) => {
    try {      
      const response = await axios.delete(`${REST_SERVER_URL}/selecciones/${id}/eliminar`)
      console.log('Elemento eliminado correctamente', response.data)
    } catch (err) {
      HandleError(err)      
    }
  }

  create = async (team) => {
    try {
      const teamJSON = Team.toJson(team)
      console.log(teamJSON)
      await axios.post(`${REST_SERVER_URL}/selecciones/crear`, teamJSON)
    } catch (err) {
      HandleError(err) 
    }
  }

  // update = async (market) => {
  //   try {
  //     const MarketJSON = Market.toJson(market)
  //     console.log('editado', market.id)
  //     const response = await axios.put(`${REST_SERVER_URL}/punto-de-venta/editar`, MarketJSON)
  //     console.log('Market updated successfully', response.data)

  //   } catch (err) {
  //     HandleError(err) 
  //   }
  // }

  getConfederaciones = async () => (await axios.get(`${REST_SERVER_URL}/confederaciones`)).data
}

export const nationalTeamService = new NationalTeamService()