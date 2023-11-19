import { useState } from "react"
import { useNavigate } from "react-router-dom"
import { useOnInit } from "src/customHooks/hooks"

import DashboardBox from "components/dashboardBox/DashboardBox"
import { dashboardService } from "src/domain/services/homeService/Home.service"
import HandleError from "src/components/handleError/HandleError"

import "./Home.css"

const Home = () => {
  const [itemsDashboardBox, setItemsDashboardBox] = useState([])
  const navigate = useNavigate()
  
  useOnInit(async ()=> {
    try {
      const dataDashboard = await dashboardService.getStaticsDashboard()
      const transformedData = dataDashboard.addIconsDashboardBox()
      
      setItemsDashboardBox(transformedData)
    } catch (error) {
      HandleError(error, navigate)
    }
  })
  
  return (
    <>
      {
        itemsDashboardBox.map( itemBox => <DashboardBox key={itemBox.name} itemBox={itemBox} />)
      }
    </>
  )
}

export default Home