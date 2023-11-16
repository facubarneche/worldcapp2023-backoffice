import { Box } from "@mui/material"
import "./Dashboard.css"

function DashboardBox({ itemBox }) {
  return (
    <Box className='dashboard-box'>
      <section data-testid='itembox-icon' className="dashboard-box__section">
        {itemBox.icon}
      </section>
      <section className="dashboard-box__section">
        <strong data-testid='itembox-quantity' className="dashboard-box__quantity">{itemBox.quantity}</strong>
        <h2 data-testid='itembox-name'>{itemBox.name}</h2>
      </section>
    </Box>
  )
}

export default DashboardBox