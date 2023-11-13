import { useState, useEffect } from 'react'
import { useNavigate, useLocation } from 'react-router-dom'
import BottomNavigation from '@mui/material/BottomNavigation'
import BottomNavigationAction from '@mui/material/BottomNavigationAction'
import { HomeRounded, LogoutRounded, DirectionsRunRounded, StoreRounded, AssignmentIndRounded } from '@mui/icons-material'

const routes = [
  { path: '/home', index: 0 },
  { path: '/figuritas', index: 1 },
  { path: '/jugadores', index: 2 },
  { path: '/puntos-de-venta', index: 3 },
  { path: '/login', index: 4 },
]

const findRouteIndex = (currentPath) => {
  const route = routes.find(route => route.path === currentPath)
  return route ? route.index : -1
}

const NavBar = () => {
  const navigate = useNavigate()
  const location = useLocation()
  
  // Estado para mantener el índice de la ruta seleccionada
  const [value, setValue] = useState(findRouteIndex(location.pathname))

  // Manejador de cambios al seleccionar un ícono en BottomNavigation
  const handleChange = (event, newValue) => {
    setValue(newValue)
  }
  
  // Función para navegar a una ubicación (ruta)
  const goToLocation = (location) => {
    navigate(location)
  }

  // Efecto secundario para actualizar el índice cuando cambia la ruta
  useEffect(() => {
    setValue(findRouteIndex(location.pathname))
  }, [location.pathname])

  return (
    <BottomNavigation value={value} onChange={handleChange}>
      <BottomNavigationAction
        icon={<HomeRounded sx={{ fontSize: 30 }} />}
        onClick={() => goToLocation('/home')}
      />
      <BottomNavigationAction
        icon={<AssignmentIndRounded sx={{ fontSize: 30 }} />}
        onClick={() => goToLocation('/figuritas')}
      />
      <BottomNavigationAction
        icon={<DirectionsRunRounded sx={{ fontSize: 30 }} />}
        onClick={() => goToLocation('/jugadores')}
      />
      <BottomNavigationAction
        icon={<StoreRounded sx={{ fontSize: 30 }} />}
        onClick={() => goToLocation('/puntos-de-venta')}
      />
      <BottomNavigationAction
        icon={<LogoutRounded sx={{ fontSize: 30 }} />}
        onClick={() => goToLocation('/login')}
      />
    </BottomNavigation>
  )
}

export default NavBar



