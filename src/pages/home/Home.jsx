import DashboardBox from "components/dashboardBox/DashboardBox"
import { useOnInit } from "src/customHooks/hooks"
import axios from "axios"
import { API_URL } from "src/domain/services/config"
import { useState } from "react"
import { iconsDashboardBox } from "src/domain/services/Home.service"
import { Alert, Snackbar } from "@mui/material"
import "./Home.css"
import { useNavigate } from "react-router-dom"

function Home() {
  const [itemsDashboardBox, setItemsDashboardBox] = useState(null)
  const [snackbarOpen, setSnackbarOpen] = useState(null)
  const navigate = useNavigate()
  
  useOnInit(async ()=> {
    try {
      const {data} = await axios.get(`${API_URL}/dashboard`)
      const transformedData = data.map((itemBox) => ({
        ...itemBox,
        icon: iconsDashboardBox[itemBox.name],
      }))
      setItemsDashboardBox(transformedData)
    } catch (error) {
      //TODO: Hacer un helper global
      navigate('/error', {state: {errorData: error.response?.data ?? {status: 500}}} )
    }
  })
  const handleClose = () => {
    setSnackbarOpen(null)
  }
  
  return (
    <>
      {
        itemsDashboardBox && itemsDashboardBox.map( itemBox => <DashboardBox key={itemBox.name} itemBox={itemBox} />)
      }
      <Snackbar className="snackbar" open={snackbarOpen} autoHideDuration={6000} onClose={handleClose}>
        <Alert onClose={handleClose} severity="error" sx={{ width: '100%' }}>
          {snackbarOpen}
        </Alert>
      </Snackbar>
    </>
  )
}

export default Home