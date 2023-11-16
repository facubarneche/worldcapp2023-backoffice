import AssignmentIndRoundedIcon from '@mui/icons-material/AssignmentIndRounded'
import StoreIcon from '@mui/icons-material/Store'
import PeopleAltIcon from '@mui/icons-material/PeopleAlt'
import ShieldIcon from '@mui/icons-material/Shield'

export class Dashboard {
  constructor(dataDashboard){
    this.dataDashboard = dataDashboard
  }

  static fromJson(dataDashboardDTO) {
    return new Dashboard(dataDashboardDTO)
  }

  iconsDashboardBox = {
    "Figuritas Ofrecidas": <AssignmentIndRoundedIcon key={1} className="dashboard-box__icon dashboard-box__icon--primary" />,
    "Figuritas Faltantes": <AssignmentIndRoundedIcon key={2} className="dashboard-box__icon dashboard-box__icon--secondary" />,
    "Puntos de Ventas" :<StoreIcon key={3} className="dashboard-box__icon" />,
    "Usuarios Activos": <PeopleAltIcon key={4} className="dashboard-box__icon" />,
    "Selecciones Activas":<ShieldIcon key={5} className="dashboard-box__icon" />
  }
  
  addIconsDashboardBox = () => {
    return this.dataDashboard.map( itemBox => ({
      ...itemBox,
      icon: this.iconsDashboardBox[itemBox.name]
    }))
  } 

}
