import { Box } from "@mui/material"
import AssignmentIndRoundedIcon from '@mui/icons-material/AssignmentIndRounded'
// import StorefrontIcon from '@mui/icons-material/Storefront'
// import StoreIcon from '@mui/icons-material/Store'
// import PeopleAltIcon from '@mui/icons-material/PeopleAlt'

import "./Dashboard.css"

function DashboardBox( ) {
  return (
    <Box className='dashboard-box'>
      <section className="dashboard-box__section">
        <AssignmentIndRoundedIcon className="dashboard-box__icon dashboard-box__icon--primary"/>
      </section>
      <section className="dashboard-box__section">
        <strong className="dashboard-box__quantity">13</strong>
        <h2>Figuritas ofrecidas</h2>
      </section>
    </Box>
  )
}

export default DashboardBox