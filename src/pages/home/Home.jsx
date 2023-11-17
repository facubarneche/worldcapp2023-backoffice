import { useState } from "react"
import axios from "axios"

import DashboardBox from "components/dashboardBox/DashboardBox"
import { useOnInit } from "src/customHooks/hooks"
import { iconsDashboardBox } from "src/domain/services/Home.service"
import { API_URL } from "src/domain/services/config"

import { SnackbarProvider, enqueueSnackbar } from "notistack"

import "./Home.css"
import { useNavigate } from "react-router-dom"

function Home() {
  const [itemsDashboardBox, setItemsDashboardBox] = useState(null)
  const navigate = useNavigate()
  
  useOnInit(async ()=> {
    try {
      const {data} = await axios.get(`${API_URL}/dashboard`)
      const transformedData = data.map((itemBox) => ({
        ...itemBox,
        icon: iconsDashboardBox[itemBox.name],
      }))
      setItemsDashboardBox(transformedData)
    } catch (error) {
      //TODO: Hacer un helper global
      navigate('/error', {state: {errorData: error.response?.data ?? {status: 500}}} )
    }
  })

  
  return (
    <>
      {
        itemsDashboardBox && itemsDashboardBox.map( itemBox => <DashboardBox key={itemBox.name} itemBox={itemBox} />)
      }
      <SnackbarProvider />
    </>
  )
}

export default Home