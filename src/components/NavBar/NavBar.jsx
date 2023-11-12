import BottomNavigation from '@mui/material/BottomNavigation'
import BottomNavigationAction from '@mui/material/BottomNavigationAction'
import { HomeRounded , LogoutRounded , DirectionsRunRounded , StoreRounded , AssignmentIndRounded} from '@mui/icons-material'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

export const NavBar = () => {
  const [value, setValue] = useState(0)
  const navigate = useNavigate()

  const handleChange = (event, newValue) => {
    setValue(newValue)
  }

  const goToLocation = (location) => {
    navigate(location)
  }
  

  return(
    <BottomNavigation value={value} onChange={handleChange}>
      <BottomNavigationAction
        icon={<HomeRounded />}
        onClick={() => goToLocation('/home')}
      />
      <BottomNavigationAction
        icon={<AssignmentIndRounded />}
        onClick={() => goToLocation('/figuritas')}
      />
      <BottomNavigationAction
        icon={<DirectionsRunRounded />}
        onClick={() => goToLocation('/jugadores')}
      />
      <BottomNavigationAction
        icon={<StoreRounded />}
        onClick={() => goToLocation('/puntos-de-venta')}
      />
      <BottomNavigationAction
        icon={<LogoutRounded />}
        onClick={() => goToLocation('/login')}
      />
    </BottomNavigation>
  )
}

export default NavBar


