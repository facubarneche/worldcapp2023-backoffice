import axios from "axios"
import { API_URL } from "./config"
import { Dashboard } from "../models/Home.model"

export const getStaticsDashboard = async () => Dashboard.fromJson((await axios.get(`${API_URL}/dashboard`)).data)
