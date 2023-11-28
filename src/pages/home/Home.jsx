import './Home.css'
import { useState } from 'react'
import { useNavigate, useOutletContext } from 'react-router-dom'
import { useOnInit } from 'customHooks/hooks'
import { HandleError } from 'utils/HandleError/HandleError'
import { dashboardService } from 'services/HomeService/HomeService'
import { DashboardCard } from 'components/DashboardCard/Dashboard'

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
