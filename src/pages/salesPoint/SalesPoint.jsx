import { Box, Button, TextField } from "@mui/material"
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
  const navigate = useNavigate()
  
  useOnInit(async () => {
    try {
      setHeaderTitle('Puntos de venta')
      setSalesPoint(await getSalesPoint())
    } catch (error) {
      HandleError(error, navigate)
    }
  })

  const redirect = () => {
    navigate('/nuevo-punto-de-venta')
  }

  return (
    <>
      {
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
          <Button className="salespoint__button" onClick={redirect}>+</Button>
        </>
      }
    </>
  )
}


export default SalesPoint