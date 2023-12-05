import './NavBar.css'
import { useState, useEffect } from 'react'
import { useNavigate, useLocation } from 'react-router-dom'
import { BottomNavigation, BottomNavigationAction, Box } from '@mui/material'

const iconSize = 30

const navigationButtons = [
  { path: '/dashboard', icon: <Box className="fas fa-house-chimney" sx={{ fontSize: iconSize }}/> },
  { path: '/figuritas', icon: <Box className="fas fa-id-badge" sx={{ fontSize: iconSize }}/> },
  { path: '/jugadores', icon: <Box className="fas fa-shirt" sx={{ fontSize: iconSize }} /> },
  { path: '/puntos-de-venta', icon: <Box className="fas fa-store" sx={{ fontSize: iconSize }} /> },
  { path: '/login', icon: <Box className="fas fa-right-from-bracket" sx={{ fontSize: iconSize }} /> },
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
    <BottomNavigation className="navbar" component="nav" data-testid="navbar" value={value} onChange={handleChange}>
      {navigationButtons.map((route, index) => 
        <BottomNavigationAction data-testid="figuritas-button" className="navbar-buttons" key={index} value={route.path} icon={route.icon} />
      )}
    </BottomNavigation>
  )
}

