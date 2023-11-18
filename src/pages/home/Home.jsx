import { useState } from "react"

import DashboardBox from "components/dashboardBox/DashboardBox"
import { useOnInit } from "src/customHooks/hooks"

import { SnackbarProvider, enqueueSnackbar } from "notistack"

import "./Home.css"
import { useNavigate } from "react-router-dom"
import { dashboardService } from "src/domain/services/Home.service"

const Home = () => {
  const [itemsDashboardBox, setItemsDashboardBox] = useState(null)
  const navigate = useNavigate()
  
  useOnInit(async ()=> {
    try {
      const dataDashboard = await dashboardService.getStaticsDashboard()
      const transformedData = dataDashboard.addIconsDashboardBox()
      
      setItemsDashboardBox(transformedData)
    } catch (error) {
      //TODO: Hacer un helper global
      enqueueSnackbar('lala')
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