import { Button } from "@mui/material"
import './SalesPoint.css'
import { useState } from "react"
import { useOnInit } from "src/customHooks/hooks"
import { useNavigate, useOutletContext } from "react-router-dom"
import { getSalesPoint } from "src/domain/services/salesPointService/SalesPointService"
import HandleError from "src/utils/handleError/HandleError"
import { Searchbar } from "src/components/Searchbar/Searchbar"
import { CustomSearch } from "src/domain/models/CustomSearch/CustomSearch"
import CustomSalesPointContent from "src/components/CustomContent/CustomSalesPointContent"
import { SalePointBase } from "src/components/salePointBase/SalePointBase"

const SalesPoint = () => {
  // @ts-ignore
  const [setHeaderTitle] = useOutletContext()
  const [salesPoint, setSalesPoint] = useState([])
  const navigate = useNavigate()
  
  useOnInit(async () => {
    try {
      setHeaderTitle('Puntos de venta')
      getCards(new CustomSearch())
    } catch (error) {
      HandleError(error, navigate)
    }
  })

  const getCards = async (filter) => {
    setSalesPoint(await getSalesPoint(filter))
  }

  const redirect = () => {
    navigate('/nuevo-punto-de-venta')
  }

  return (
    <>
      <div className="layout__content">
        <Searchbar getFilterCards={getCards} />
        {salesPoint.map((salePoint, index) =>
          <SalePointBase
            key={index}
            salePoint={salePoint}
            content={CustomSalesPointContent(salePoint)}
          />
        )}
        <Button className="salespoint__button" onClick={redirect}>+</Button>
      </div>
    </>
  )
}


export default SalesPoint