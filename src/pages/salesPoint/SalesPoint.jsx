import { Box, Button, TextField } from "@mui/material"
import SalesPointForm from "../../components/forms/salesPointForm/SalesPointForm"
import './SalesPoint.css'
import { useState } from "react"
import { useOnInit } from "src/customHooks/hooks"
import { useOutletContext } from "react-router-dom"

const SalesPoint = () => {
  const [displayForm, setDisplayForm] = useState(false)
  const [setHeaderTitle] = useOutletContext()

  const changeDisplay = () => {
    setDisplayForm(!displayForm)
  }
  
  useOnInit(() => {
    setHeaderTitle('Puntos de venta')
  })

  return (
    <>
      <h1>FIGURITAS PAGE</h1>
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
          <Button className="salespoint__button" onClick={changeDisplay}>+</Button>
        </>
      }
      {
        displayForm && <SalesPointForm />
      }
    </>
  )
}


export default SalesPoint