import DashboardBox from "../../components/dashboardBox/DashboardBox"
import { itemsDashboardBox } from "../../domain/mocks/ItemsDashboardBox.mock"

function Dashboard() {
  return (
    <>
      {
        itemsDashboardBox.map( (itemBox, index) => <DashboardBox key={index} itemsBox={itemBox} />)
      }
    </>
  )
}

export default Dashboard