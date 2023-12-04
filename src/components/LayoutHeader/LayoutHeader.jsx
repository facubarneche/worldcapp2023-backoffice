import './LayoutHeader.css'
import { useState } from 'react'
import { Outlet, useOutletContext } from 'react-router-dom'
import { Typography } from '@mui/material'
import { useOnInit } from 'custom_hooks/hooks'
import { NavBar } from 'components/Navbar/Navbar'

export const LayoutHeader = () => {
  const [title, setTitle] = useState('sin título')  
  // @ts-ignore
  const [setFooterContent] = useOutletContext() || []

  useOnInit(() => {
    setFooterContent(<NavBar />)
  })

  return (
    <>
      <header data-testid="dashboard_header" className="layout-header">
        <Typography className="layout-header__title" variant="h2">
          {title}
        </Typography>
      </header>
      <article className="layout__content">
        <Outlet context={{setTitle}} />
      </article>
    </>
  )
}
