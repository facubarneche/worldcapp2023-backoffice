import axios from "axios"
import { API_URL } from "./config"
import { Dashboard } from "../models/Home.model"

class DashboardService {
  getStaticsDashboard = async () => Dashboard.fromJson((await axios.get(`${API_URL}/dashboard`)).data)
}

export const dashboardService = new DashboardService()
