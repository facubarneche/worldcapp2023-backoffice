// import { Button } from '@mui/material'
import 'src/styles/addbutton.css'
import { useState } from 'react'
import { useOnInit } from 'customHooks/hooks'
import { useNavigate, useOutletContext } from 'react-router-dom'
import { HandleError } from 'src/utils/HandleError/HandleError'
import { Searchbar } from 'components/Searchbar/Searchbar'
import { CustomSearch } from 'models/CustomSearch/CustomSearch'
import { CustomMarketContent } from 'components/CustomContent/CustomMarketContent'
import { marketService } from 'services/MarketService/MarketService'
import { CardBase } from 'components/CardBase/CardBase'
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

  const redirect = (id = -1) => {    
    id === -1 ? navigate('/punto-de-venta-nuevo') : navigate(`/punto-de-venta/${id}/editar`)
  }

  const handleDelete = (id) => {
    console.log(id)
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
          onDeleteClick={handleDelete}
        />
      )}
      <Button className="add__button" onClick={() => redirect(-1)}>
        +
      </Button>
      
    </>
  )
}
