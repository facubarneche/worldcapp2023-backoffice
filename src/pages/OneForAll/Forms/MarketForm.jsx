import { Box, TextField } from '@mui/material'
import { FormActions } from 'components/FormActions/FormActions'
import { useOnInit } from 'custom_hooks/hooks'
import { useNavigate, useOutletContext, useParams } from 'react-router-dom'
import { Market } from 'models/MarketModel/Market.model'
import { marketService } from 'services/MarketService/MarketService'
import { Fragment, useState } from 'react'

const BusinessesType = {
  Kioskos: 'Kioscos',
  Librerias: 'Librerias',
  Supermercados: 'Supermercados',
}

const InputType = {
  TextField: 'TextField',
  Select: 'Select',
}

export const MarketForm = ({ headerTitle }) => {
  const { id } = useParams()
  const [marketData, setMarketData] = useState(new Market())

  // @ts-ignore
  const [setHeaderTitle] = useOutletContext()
  const navigate = useNavigate()

  const inputs = {
    nombre: {
      name: 'Nombre',
      type: InputType.TextField,
      value: marketData.nombre,
      className: 'field',
      defaultValue: '',
      elementProps: {},
      error: '',
      options: {},
    },
    direccion: {
      name: 'Dirección',
      type: InputType.TextField,
      value: marketData.direccion,
      className: 'field',
      defaultValue: '',
      elementProps: {},
      error: 'SALIO MAL',
      options: {},
    },
    geoX: {
      name: 'Coordenada X',
      type: InputType.TextField,
      value: marketData.geoX,
      className: 'field',
      defaultValue: '',
      elementProps: { type: 'number', step: 0.00001, min: -90, max: 90 },
      error: '',
      options: {},
    },
    geoY: {
      name: 'Coordenada Y',
      type: InputType.TextField,
      value: marketData.geoY,
      className: 'field',
      defaultValue: '',
      elementProps: { type: 'number', step: 0.00001, min: -90, max: 90 },
      error: '',
      options: {},
    },
    stock: {
      name: 'Sobres Disponibles',
      type: InputType.TextField,
      value: marketData.stock,
      className: 'field',
      defaultValue: '',
      elementProps: { type: 'number', min: 0 },
      error: '',
      options: {},
    },
    pedidosPendientes: {
      name: 'Pedidos Pendientes',
      type: InputType.TextField,
      value: marketData.pedidosPendientes,
      className: 'field',
      defaultValue: '',
      elementProps: { type: 'number', min: 0 },
      error: '',
      options: {},
    },
    tipoPuntoDeVenta: {
      name: 'Pedidos Pendientes',
      type: InputType.Select,
      value: marketData.pedidosPendientes,
      className: 'field',
      defaultValue: marketData.tipoPuntoDeVenta,
      elementProps: { native: true },
      error: '',
      options: BusinessesType,
    },
  }

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

  const handleClickConfirm = () => {
    //marketService.create(marketData)
  }

  const renderError = (error) => error !== '' ? <span className="field__error">{error}</span> : null

  return (
    <>
      {Object.entries(inputs).map(([key, props], index) => 
        <Fragment key={index}>
          {props.type === InputType.TextField ? 
            <Box key={index} className="field__container">
              <TextField
                key={index}
                className={props.className}
                inputProps={{ ...props.elementProps }}
                value={props.value}
                label={props.name}
                onChange={(e) => handleChange(key, e.target.value)}
              />
              {renderError(props.error)}
            </Box>
            : props.type === InputType.Select ? 
              <TextField
                key={index}
                className={props.className}
                value={props.defaultValue}
                select
                SelectProps={{ ...props.elementProps }}
                onChange={(e) => handleChange(key, e.target.value)}
              >
                {Object.entries(props.options).map(([clave, value]) => 
                  <option key={clave} value={value}>
                    {value}
                  </option>
                )}
              </TextField>
              : 
              <></>
          }
        </Fragment>
      )}
      <FormActions
        handleLeftButtonClick={handleClickConfirm}
        handleRightButtonClick={() => {
          navigate('/puntos-de-venta')
        }}
      />
    </>
  )
}
