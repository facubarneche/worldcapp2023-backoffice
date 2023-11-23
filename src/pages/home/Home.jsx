import { useState } from "react"
import { useNavigate } from "react-router-dom"
import { useOnInit } from "src/customHooks/hooks"

import DashboardBox from "components/dashboardBox/DashboardBox"
import HandleError from "src/utils/handleError/HandleError"
import { dashboardService } from "src/domain/services/homeService/HomeService"

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