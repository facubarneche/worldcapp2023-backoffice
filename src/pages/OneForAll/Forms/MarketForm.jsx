import { TextField } from '@mui/material'
import { FormActions } from 'components/FormActions/FormActions'
import { useOnInit } from 'src/hooks/useOnInit'
import { useNavigate, useOutletContext, useParams } from 'react-router-dom'
import { Market } from 'models/MarketModel/Market.model'
import { marketService } from 'services/MarketService/MarketService'
import { useState } from 'react'
import { BusinessType } from 'services/constants'

export const MarketForm = ({ headerTitle }) => {
  const { id } = useParams()
  const [marketData, setMarketData] = useState(new Market())

  // @ts-ignore
  const [setHeaderTitle] = useOutletContext()
  const navigate = useNavigate()

  useOnInit(() => {
    setHeaderTitle(headerTitle)
    id && getCardToEdit()
  })

  const getCardToEdit = async () => {
    const card = await marketService.getById(id)
    setMarketData(card)
  }

  const handleChange = (key, value) => {
    marketData[key] = value
    generarNuevoMarket(marketData)
  }

  const generarNuevoMarket = (market) => {
    const nuevoMarket = Object.assign(new Market(market), market)
    setMarketData(nuevoMarket)
  }

  return (
    <>
      <TextField className="field" value={marketData.nombre} label="Nombre" onChange={(e) => handleChange('nombre', e.target.value)} />
      <TextField
        className="field"
        value={marketData.direccion}
        label="Dirección"
        onChange={(e) => handleChange('direccion', e.target.value)}
      />
      <TextField
        className="field"
        value={marketData.geoX}
        inputProps={{ type: 'number', step: 0.00001, min: -90, max: 90 }}
        label="Coordenada X"
        onChange={(e) => handleChange('geoX', e.target.value)}
      />
      <TextField
        className="field"
        value={marketData.geoY}
        inputProps={{ type: 'number', step: 0.00001, min: -90, max: 90 }}
        label="Coordenada Y"
        onChange={(e) => handleChange('geoY', e.target.value)}
      />
      <TextField
        className="field"
        value={marketData.stock}
        inputProps={{ type: 'number', min: 0 }}
        label="Sobres Disponibles"
        onChange={(e) => handleChange('stock', e.target.value)}
      />
      <TextField
        className="field"
        value={marketData.pedidosPendientes}
        inputProps={{ type: 'number', min: 0 }}
        label="Pedidos Pendientes"
        onChange={(e) => handleChange('pedidosPendientes', e.target.value)}
      />
      <TextField
        className="field"
        defaultValue={BusinessType.Kioscos}
        select
        SelectProps={{ native: true }}
        onChange={(e) => handleChange('tipoPuntoDeVenta', e.target.value)}
      >
        {Object.entries(BusinessType).map(([key, value]) => (
          <option key={key} value={value}>
            {value}
          </option>
        ))}
      </TextField>
      <FormActions
        leftButtonClick={() => {
          marketService.create(marketData)
        }}
        rightButtonClick={() => {
          //TODO: Handle clear of marketData
          navigate('/puntos-de-venta')
        }}
        rightButtonText="Volver"
        rightButtonProps={{
          variant: 'outlined',
        }}
      />
    </>
  )
}
