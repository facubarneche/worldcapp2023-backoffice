import axios from "axios"
import { API_URL } from "./config"

export const getStaticsDashboard = () => axios.get(`${API_URL}/dashboard`)
