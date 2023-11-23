import { Box } from "@mui/material"
import './SalesPoint.css'
import { useOnInit } from "src/customHooks/hooks"
import { useOutletContext } from "react-router-dom"

export default function SalesPoint() {
  const [setHeaderTitle] = useOutletContext()
  
  useOnInit(() => {
    setHeaderTitle('Puntos de venta')
  })

  return (
    <>
      <input placeholder="SEARCH"/>
      <Box className='salespoint-box'>
        <section className="salespoint-box__section">
          Mock
        </section>
        <section className="salespoint-box__section">
          <strong className="salespoint-box__quantity">20</strong>
          <h2>Mock</h2>
        </section>
      </Box>
      <Box className='salespoint-box'>
        <section className="salespoint-box__section">
          Mock2
        </section>
        <section className="salespoint-box__section">
          <strong className="salespoint-box__quantity">20</strong>
          <h2>Mock2</h2>
        </section>
      </Box>

    </>
  )
}