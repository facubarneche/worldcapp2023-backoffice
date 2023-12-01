import './LayoutHeader.css'
import { useState } from "react"
import { Outlet, useOutletContext } from "react-router-dom"
import { Typography } from "@mui/material"
import { useOnInit } from "custom_hooks/hooks"
import { NavBar } from "components/Navbar/Navbar"

export const LayoutHeader = () => {
  const [headerTitle, setHeaderTitle] = useState('hola')
  // @ts-ignore
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