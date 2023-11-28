import 'src/styles/button.css'
import { useState } from 'react'
import { useOnInit } from 'customHooks/hooks'
import { useNavigate, useOutletContext } from 'react-router-dom'
import { Searchbar } from 'components/Searchbar/Searchbar'
import { CustomSearch } from 'models/CustomSearch/CustomSearch'
import { CustomMarketContent } from 'components/CustomContent/CustomMarketContent'
import { marketService } from 'services/MarketService/MarketService'
import { CardBase } from 'components/CardBase/CardBase'
import { Button } from '@mui/material'
import { HandleError } from 'src/utils/handleError/HandleError'

export const Markets = () => {
  // @ts-ignore
  const [setHeaderTitle] = useOutletContext()
  const [markets, setMarkets] = useState([])
  const navigate = useNavigate()

  const getMarkets = async (filter = new CustomSearch()) => {
    try {
      const markets$ = await marketService.getMarkets(filter)
      setMarkets(markets$)
    } catch (e) {
      HandleError(e, navigate)
    }
  }

  useOnInit(() => {
    setHeaderTitle('Puntos de venta')
    getMarkets()
  })

  const redirect = (id = -1) => {
    id === -1 ? navigate('/punto-de-venta/nuevo') : navigate(`/punto-de-venta/${id}/editar`)
  }

  const handleDelete = async (id) => {
    try {
      await marketService.deleteMarket(id)
      await getMarkets()
    } catch (e) {
      console.error('Salió mal,', e)
    }
  }

  return (
    <>
      <Searchbar getFilterCards={getMarkets} />
      {markets.map((market, index) => 
        <CardBase
          key={index}
          card={market}
          contentComponent={CustomMarketContent(market.content())}
          onEditClick={redirect}
          onDelete={handleDelete}
        />
      )}
      <Button className="add__button" onClick={() => redirect(-1)}>
        +
      </Button>
    </>
  )
}
