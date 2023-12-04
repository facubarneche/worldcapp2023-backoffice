import { NavBar } from '../Navbar/Navbar'
import { Typography } from '@mui/material'

export const Layout = ({ content, headerTitle = 'Sin título' }) => {
  return (
    <main className="layout">
      <header className="layout__header">
        <Typography className="layout__header-title" variant="h2">
          {headerTitle}
        </Typography>
      </header>
      {content}
      <footer className="layout__footer">
        <NavBar />
      </footer>
    </main>
  )
}
