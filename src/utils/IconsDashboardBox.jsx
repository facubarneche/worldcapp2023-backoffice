import { PeopleAlt, Shield, Store, SwitchAccount } from "@mui/icons-material"

export const iconsDashboardBox = {
  "Figuritas Ofrecidas": <SwitchAccount key={1} className="dashboard-box__icon" />,
  "Figuritas Faltantes": <SwitchAccount key={2} className="dashboard-box__icon" />,
  "Puntos de Ventas" :<Store key={3} className="dashboard-box__icon" />,
  "Usuarios Activos": <PeopleAlt key={4} className="dashboard-box__icon" />,
  "Selecciones Activas":<Shield key={5} className="dashboard-box__icon" />
}