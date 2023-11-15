import { useState } from "react"

import DashboardBox from "components/dashboardBox/DashboardBox"
import { iconsDashboardBox } from "src/domain/models/Home.model"
import { getStaticsDashboard } from "src/domain/services/Home.service"
import { useOnInit } from "src/customHooks/hooks"

import { SnackbarProvider, enqueueSnackbar } from "notistack"

import "./Home.css"

function Home() {
  const [itemsDashboardBox, setItemsDashboardBox] = useState(null)

  useOnInit(async ()=> {
    try {
      const {data} = await getStaticsDashboard()

      const transformedData = data.map((itemBox) => ({
        ...itemBox,
        icon: iconsDashboardBox[itemBox.name],
      }))
      
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