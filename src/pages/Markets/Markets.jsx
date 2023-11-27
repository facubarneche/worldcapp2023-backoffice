// import { Button } from '@mui/material'
import './Markets.css'
import 'src/styles/addbutton.css'
import { useState } from 'react'
import { useOnInit } from 'src/customHooks/hooks'
import { useNavigate, useOutletContext } from 'react-router-dom'
import { HandleError } from 'src/utils/handleError/HandleError'
import { Searchbar } from 'components/Searchbar/Searchbar'
import { CustomSearch } from 'models/CustomSearch/CustomSearch'
import { CustomMarketContent } from 'src/components/CustomContent/CustomMarketContent'
import { marketService } from 'src/domain/services/MarketService/MarketService'
import { CardBase } from 'src/components/CardBase/CardBase'
import { Button } from '@mui/material'

export const Markets = () => {
  // @ts-ignore
  const [setHeaderTitle] = useOutletContext()
  const [markets, setMarkets] = useState([])
  const navigate = useNavigate()

  useOnInit(async () => {
    try {
      setHeaderTitle('Puntos de venta')
      getMarkets(new CustomSearch())
    } catch (error) {
      HandleError(error, navigate)
    }
  })

  const getMarkets = async (filter) => {
    setMarkets(await marketService.getMarkets(filter))
  }

  const redirect = () => {
    navigate('/nuevo-punto-de-venta')
  }

  return (
    <>
      <div className="layout__content">
        <Searchbar getFilterCards={getMarkets} />
        {markets.map((market, index) => 
          <CardBase
            key={index}
            card={market}
            contentComponent={CustomMarketContent(market.content())}
          />
        )}
        <Button className="add__button" onClick={redirect}>
          +
        </Button>
      </div>     
    </>
  )
}

