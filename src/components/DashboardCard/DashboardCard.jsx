import "./DashboardCard.css"
import { Box } from "@mui/material"

export const DashboardCard = ({ itemBox }) => {
  return (
    <Box className='dashboard-box'>
      <section data-testid='itembox-icon' className="dashboard-box__icon">
        {itemBox.icon}
      </section>
      <section className="dashboard-box__info">
        <div data-testid='itembox-quantity' className="dashboard-box__info-number">{itemBox.quantity}</div>
        <div data-testid='itembox-name' className="dashboard-box__info-desc">{itemBox.name}</div>
      </section>
    </Box>
  )
}