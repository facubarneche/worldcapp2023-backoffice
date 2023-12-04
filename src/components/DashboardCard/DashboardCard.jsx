import { GentTestId } from 'src/utils/GenTestId/GenTestId'
import './DashboardCard.css'
import { Box } from '@mui/material'

export const DashboardCard = ({ itemBox }) => {
  return (
    <Box data-testid={`${GentTestId.generate(itemBox.name)}-box`} className="dashboard">
      {itemBox.icon}
      <section className="dashboard__info">
        <div data-testid={`${GentTestId.generate(itemBox.name)}-number`} className="dashboard__number">
          {itemBox.quantity}
        </div>
        <div data-testid={`${GentTestId.generate(itemBox.name)}-description`} className="dashboard__desc">
          {itemBox.name}
        </div>
      </section>
    </Box>
  )
}
