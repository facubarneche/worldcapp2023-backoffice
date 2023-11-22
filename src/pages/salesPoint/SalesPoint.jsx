import { Box, Button, TextField } from "@mui/material"
import SalesPointForm from "../../components/salesPointForm/SalesPointForm"
import './SalesPoint.css'
import { useState } from "react"

export default function SalesPoint() {
  const [displayForm, setDisplayForm] = useState(false)

  const lalal = () => {
    setDisplayForm(true)
  }

  return (
    <>
      {
        !displayForm &&
        // TODO: Agregar la card, el resto de componentes vienen por layout
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
          <Button className="salespoint__button" onClick={lalal}>+</Button>
        </>
      }
      {
        displayForm && <SalesPointForm />
      }
    </>
  )
}