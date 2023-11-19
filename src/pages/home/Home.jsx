import { useState } from "react"

import DashboardBox from "components/dashboardBox/DashboardBox"
import { useOnInit } from "src/customHooks/hooks"


import "./Home.css"
import { useNavigate } from "react-router-dom"
import { dashboardService } from "src/domain/services/homeService/Home.service"
import HandleError from "src/components/handleError/HandleError"

const Home = () => {
  const [itemsDashboardBox, setItemsDashboardBox] = useState(null)
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
        itemsDashboardBox && itemsDashboardBox.map( itemBox => <DashboardBox key={itemBox.name} itemBox={itemBox} />)
      }
    </>
  )
}

export default Home