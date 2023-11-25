import { Box, Button, TextField } from "@mui/material"
import SalesPointForm from "../../components/forms/salesPointForm/SalesPointForm"
import './SalesPoint.css'
import { useState } from "react"
import { useOnInit } from "src/customHooks/hooks"
import { useNavigate, useOutletContext } from "react-router-dom"
import { getSalesPoint } from "src/domain/services/salesPointService/SalesPointService"
import HandleError from "src/utils/handleError/HandleError"

const SalesPoint = () => {
  // @ts-ignore
  const [setHeaderTitle] = useOutletContext()
  const [salesPoint, setSalesPoint] = useState([])
  const [displayForm, setDisplayForm] = useState(false)
  const navigate = useNavigate()

  const changeDisplay = () => {
    setDisplayForm(!displayForm)
  }
  
  useOnInit(async () => {
    try {
      setHeaderTitle('Puntos de venta')
      setSalesPoint(await getSalesPoint())
    } catch (error) {
      HandleError(error, navigate)
    }
  })

  return (
    <>
      {
        !displayForm &&
        // TODO: Agregar la card, el resto de componentes vienen por layout
        <>
          <TextField id="outlined-search" label="Search field" type="search" />
          {
            salesPoint.map(salePoint =>
              <Box key={salePoint.id} className='card'>
                <div>{salePoint.name}</div>
                <div>{salePoint.type}</div>
                <div>{salePoint.streetName}</div>
                <div>{salePoint.streetNumber}</div>
                <div>{salePoint.envelopeStock}</div>
              </Box>
            )
          }
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