import axios from "axios"
import { REST_SERVER_URL } from "../constants"
import { Dashboard } from "models/HomeModel/Home.model"

class DashboardService {
  getStaticsDashboard = async () => Dashboard.fromJson((await axios.get(`${REST_SERVER_URL}/dashboard`)).data)
}

export const dashboardService = new DashboardService()
