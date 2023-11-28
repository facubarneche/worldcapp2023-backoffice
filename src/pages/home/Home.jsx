import './Home.css'
import { useState } from 'react'
import { useNavigate, useOutletContext } from 'react-router-dom'
import { useOnInit } from 'src/customHooks/hooks'
import { DashboardCard } from 'src/components/DashboardCard/Dashboard'
import { HandleError } from 'src/utils/handleError/HandleError'
import { dashboardService } from 'src/domain/services/homeService/HomeService'

const Home = () => {
  const [itemsDashboardBox, setItemsDashboardBox] = useState([])
  const navigate = useNavigate()
  // @ts-ignore
  const [setHeaderTitle] = useOutletContext()

  useOnInit(async () => {
    setHeaderTitle('Dashboard')
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
      {itemsDashboardBox.map((itemBox) => 
        <DashboardCard key={itemBox.name} itemBox={itemBox} />
      )}
    </>
  )
}

export default Home
