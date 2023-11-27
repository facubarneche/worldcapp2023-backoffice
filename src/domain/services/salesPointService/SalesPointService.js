import axios from "axios"
import { REST_SERVER_URL } from "../constants"
import { SalesPoint } from "src/domain/models/SalesPoint.model"

export const getSalesPoint = async (search) => {
  const salesPointJSON = await axios.get(`${REST_SERVER_URL}/puntosDeVenta/index`, {params: search})
  return salesPointJSON.data.map(salesPointDTO => SalesPoint.fromJson(salesPointDTO))
}