import { useState } from "react"

import DashboardBox from "components/dashboardBox/DashboardBox"
import { getStaticsDashboard } from "src/domain/services/Home.service"
import { useOnInit } from "src/customHooks/hooks"

import { SnackbarProvider, enqueueSnackbar } from "notistack"

import "./Home.css"

function Home() {
  const [itemsDashboardBox, setItemsDashboardBox] = useState(null)

  useOnInit(async ()=> {
    try {
      const dataDashboard = await getStaticsDashboard()
      const transformedData = dataDashboard.addIconsDashboardBox()
      
      setItemsDashboardBox(transformedData)
    } catch (error) {
      enqueueSnackbar(error.message)
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