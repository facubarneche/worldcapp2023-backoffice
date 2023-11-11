import AssignmentIndRoundedIcon from '@mui/icons-material/AssignmentIndRounded'
import StoreIcon from '@mui/icons-material/Store'
import PeopleAltIcon from '@mui/icons-material/PeopleAlt'

export const itemsDashboardBox = [
  {
    name: 'Figuritas ofrecidas',
    quantity: 13,
    icon: <AssignmentIndRoundedIcon className="dashboard-box__icon dashboard-box__icon--primary" />
  },
  {
    name: 'Figuritas faltantes',
    quantity: 9,
    icon: <AssignmentIndRoundedIcon className="dashboard-box__icon dashboard-box__icon--secondary" />
  },
  {
    name: 'Puntos de ventas',
    quantity: 20,
    icon: <StoreIcon className="dashboard-box__icon" />
  },
  {
    name: 'usuarios activos',
    quantity: 10,
    icon: <PeopleAltIcon className="dashboard-box__icon" />
  }
]