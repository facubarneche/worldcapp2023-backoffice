import { TextField } from "@mui/material"
import './SalesPointForm.css'
import FormActions from "src/components/FormActions/FormActions"
import { useOnInit } from "src/customHooks/hooks"
import { useNavigate, useOutletContext } from 'react-router-dom'


const SalesPointForm = ({headerTitle}) => {
  // @ts-ignore
  const [setHeaderTitle] = useOutletContext()
  const businessesType = ['Kiosko', 'Libreria', 'Supermercado']
  const navigate = useNavigate()

  useOnInit(() => {
    setHeaderTitle(headerTitle)
  })

  return (
    <div className="sales-point-form">
      <TextField required label="Nombre"/>
      <TextField required label="Dirección"/>
      <TextField required label="Coordenada X" type="number"/>
      <TextField required label="Coordenada Y" type="number"/>
      <TextField required label="Sobres Disponibles" type="number"/>
      <TextField required label="Pedidos Pendientes" type="number"/>
      <TextField className="figuritas-form__select"
        required
        select
        SelectProps={{ native: true }}
      >
        {
          businessesType.map( businessType =>
          //TODO: Ver bien lo del value luego
            <option key={businessType} value={businessType}>
              {businessType}
            </option>
          )
        }
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
    </div>
  )
}

export default SalesPointForm


