import { useState } from "react"
import { Outlet, useOutletContext } from "react-router-dom"
import './LayoutHeader.css'
import { Typography } from "@mui/material"
import { useOnInit } from "src/customHooks/hooks"
import NavBar from "../navbar/Navbar"

const LayoutHeader = () => {
  const [headerTitle, setHeaderTitle] = useState('hola')
  const [setFoterContent] = useOutletContext()
  
  useOnInit(()=> {
    setFoterContent(<NavBar/>)
  })

  return <>
    <header className="layout-header">
      <Typography className="layout-header__title" variant="h2">{headerTitle}</Typography>
    </header>
    <article className="layout__content">
      <Outlet context={[setHeaderTitle]}/>
    </article>
  </>
}

export default LayoutHeader