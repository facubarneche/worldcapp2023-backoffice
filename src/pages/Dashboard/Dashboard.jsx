import './Dashboard.css'
import { HandleError } from 'utils/HandleError/HandleError'
import { dashboardService } from 'services/HomeService/HomeService'
import { DashboardCard } from 'components/DashboardCard/DashboardCard'
import { useNavigate } from 'react-router-dom'
import { useState } from 'react'
import { useOnInit } from 'hooks/useOnInit'

export const Dashboard = () => {
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
      {itemsDashboardBox.map((itemBox) => 
        <DashboardCard key={itemBox.name} itemBox={itemBox} />
      )}
    </>
  )
}
