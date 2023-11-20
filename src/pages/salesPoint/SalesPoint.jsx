import { Box, Button, TextField } from "@mui/material"
import './SalesPoint.css'
import { useNavigate } from "react-router-dom"

export default function SalesPoint() {
  const navigate = useNavigate()

  const goToLocation = () => {
    navigate('/puntos-de-venta/new')
  }
  return (
    <>
      <TextField id="outlined-search" label="Search field" type="search" />
      <Box className='salespoint'>
        <section className="salespoint__section">
          Mock
        </section>
        <section className="salespoint__section">
          <strong className="salespoint__quantity">20</strong>
          <h2>Mock</h2>
        </section>
      </Box>
      <Box className='salespoint'>
        <section className="salespoint__section">
          Mock2
        </section>
        <section className="salespoint__section">
          <strong className="salespoint__quantity">20</strong>
          <h2>Mock2</h2>
        </section>
      </Box>
      <Button className="salespoint__button" onClick={goToLocation}>+</Button>
    </>
  )
}