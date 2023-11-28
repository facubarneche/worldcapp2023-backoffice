import './NavBar.css'
import { useState, useEffect } from 'react'
import { useNavigate, useLocation } from 'react-router-dom'
import { BottomNavigation, BottomNavigationAction } from '@mui/material'
import { HomeRounded, LogoutRounded, DirectionsRunRounded, StoreRounded, AssignmentIndRounded } from '@mui/icons-material'

const iconSize = 30

const navigationButtons = [
  { path: '/home', icon: <HomeRounded sx={{ fontSize: iconSize }} /> },
  { path: '/figuritas', icon: <AssignmentIndRounded sx={{ fontSize: iconSize }} /> },
  { path: '/jugadores', icon: <DirectionsRunRounded sx={{ fontSize: iconSize }} /> },
  { path: '/puntos-de-venta', icon: <StoreRounded sx={{ fontSize: iconSize }} /> },
  { path: '/login', icon: <LogoutRounded sx={{ fontSize: iconSize }} /> },
]

export const NavBar = () => {
  const navigate = useNavigate()
  const location = useLocation()
  const [value, setValue] = useState(location.pathname)

  const handleChange = (event, newValue) => {
    setValue(newValue)
    navigate(newValue)
  }

  useEffect(() => {
    setValue(location.pathname)
  }, [location.pathname])

  return (
    <BottomNavigation className="navbar" component="nav" value={value} onChange={handleChange}>
      {navigationButtons.map((route, index) => 
        <BottomNavigationAction className="navbar-buttons" key={index} value={route.path} icon={route.icon} />
      )}
    </BottomNavigation>
  )
}
