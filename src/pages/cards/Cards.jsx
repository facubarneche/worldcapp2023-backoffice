import { Box, Button, TextField } from "@mui/material"
import { useState } from "react"
import FiguritasForm from "src/components/forms/figuritasForm/figuritasForm"

const Cards = () => {
  const [displayForm, setDisplayForm] = useState(false)

  const changeDisplay = () => {
    setDisplayForm(!displayForm)
  }

  return (
    <>
      <h1>FIGURITAS PAGE</h1>
      {
        !displayForm &&
        // TODO: Agregar la card, el resto de componentes vienen por layout
        <>
          <TextField id="outlined-search" label="BUSCADOR Q" type="search" placeholder="BUSCADOR" />
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
          <Button className="salespoint__button" onClick={changeDisplay}>+</Button>
        </>
      }
      {
        displayForm && <FiguritasForm />
      }
    </>
  )
}

export default Cards