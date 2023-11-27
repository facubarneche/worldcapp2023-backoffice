import './MarketForm.css'
import { TextField } from '@mui/material'
import { FormActions } from 'components/FormActions/FormActions'
import { useOnInit } from 'src/customHooks/hooks'
import { useNavigate, useOutletContext } from 'react-router-dom'

export const MarketForm = ({ headerTitle }) => {
  // @ts-ignore
  const [setHeaderTitle] = useOutletContext()
  const businessesType = ['Kiosko', 'Libreria', 'Supermercado']
  const navigate = useNavigate()

  useOnInit(() => {
    setHeaderTitle(headerTitle)
  })

  return (
    <>
      <TextField className="field" label="Nombre" />
      <TextField className="field" label="Dirección" />
      <TextField inputProps={{ type:'number', step: 0.00001, min: -90, max: 90 }} className="field" label="Coordenada X" type="number" />
      <TextField inputProps={{ type:'number', step: 0.00001, min: -90, max: 90 }} className="field" label="Coordenada Y" type="number" />
      <TextField inputProps={{ type:'number', min: 0 }} className="field" label="Sobres Disponibles" type="number" />
      <TextField inputProps={{ type:'number', min: 0 }} className="field" label="Pedidos Pendientes" type="number" />
      <TextField className="field" select SelectProps={{ native: true }}>
        {businessesType.map((businessType) =>           
          <option key={businessType} value={businessType}>
            {businessType}
          </option>
        )}
      </TextField>
      <FormActions
        leftButtonClick={() => {
          console.log('Guardar')
        }}
        rightButtonClick={() => {
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
