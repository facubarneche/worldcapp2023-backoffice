import DashboardBox from "components/dashboardBox/DashboardBox"
import { itemsDashboardBoxMock } from "src/domain/mocks/ItemsDashboardBox.mock"

function Dashboard() {
  
  return (
    <>
      {
        itemsDashboardBoxMock.map( (itemBox, index) => <DashboardBox key={index} itemsBox={itemBox} />)
      }
    </>
  )
}

export default Dashboard