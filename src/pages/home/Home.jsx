import DashboardBox from "components/dashboardBox/DashboardBox"
import { useOnInit } from "src/customHooks/hooks"
import axios from "axios"
import { API_URL } from "src/domain/services/config"
import { useState } from "react"
import { iconsDashboardBox } from "src/domain/services/Home.service"

function Home() {
  const [itemsDashboardBox, setItemsDashboardBox] = useState(null)

  useOnInit(async ()=> {
    try {
      const {data} = await axios.get(`${API_URL}/dashboard`)
      const transformedData = data.map((itemBox) => ({
        ...itemBox,
        icon: iconsDashboardBox[itemBox.name],
      }))
      setItemsDashboardBox(transformedData)
    } catch (error) {
      console.error(error)
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