import { TextField } from "@mui/material"
import './SalesPointForm.css'

const SalesPointForm = () => {
  
  const businessesType = ['Kiosko', 'Libreria', 'Supermercado']

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
    </div>
  )
}

export default SalesPointForm


