import { useState } from "react"
import { Outlet } from "react-router-dom"
import './LayoutHeader.css'
import { Typography } from "@mui/material"

const LayoutHeader = () => {
  const [headerTitle, setHeaderTitle] = useState('hola')
  return <>
    <header className="layoutHeader">
      <Typography className="layoutHeader_title" variant="h2">{headerTitle}</Typography>
    </header>
    <Outlet context={[setHeaderTitle]}/>
  </>
}

export default LayoutHeader