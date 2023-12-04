import './Home.css'
import { useOnInit } from 'src/hooks/useOnInit'
import { HandleError } from 'utils/HandleError/HandleError'
import { dashboardService } from 'services/HomeService/HomeService'
import { DashboardCard } from 'src/components/DashboardCard/DashboardCard'
import { useNavigate } from 'react-router-dom'
import { useState } from 'react'

export const Home = () => {
  const [itemsDashboardBox, setItemsDashboardBox] = useState([])
  const navigate = useNavigate()

  useOnInit(async () => {
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
      {itemsDashboardBox.map((itemBox) => (
        <DashboardCard key={itemBox.name} itemBox={itemBox} />
      ))}
    </>
  )
}
