import { Box } from "@mui/material"
import "./Dashboard.css"

function DashboardBox({ itemsBox }) {
  return (
    <Box className='dashboard-box'>
      <section className="dashboard-box__section">
        {itemsBox.icon}
      </section>
      <section className="dashboard-box__section">
        <strong className="dashboard-box__quantity">{itemsBox.quantity}</strong>
        <h2>{itemsBox.name}</h2>
      </section>
    </Box>
  )
}

export default DashboardBox