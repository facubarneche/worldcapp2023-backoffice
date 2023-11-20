import { Button, TextField } from "@mui/material"
import './ItemFormBuilder.css'

const ItemFormBuilder = ({ inputs }) => {
  return (
    <div className="item-form-builder">
      {inputs.map((input, index) =>
        <TextField
          key={index}
          className="item-form-builder__input"
          required
          label={input.label}
          type={input.type}
          defaultValue={input.defaultValue}
          select={input.type === 'select'}
          SelectProps={{
            native: true,
          }}
        >
          {input.type === 'select' &&
            input.options.map((option) =>
              <option key={option} value={option}>
                {option}
              </option>
            )}
        </TextField>
      )}

      <Button className="item-form-builder__button" variant="contained">
        Guardar
      </Button>
      <Button className="item-form-builder__button" variant="outlined">
        Volver
      </Button>
    </div>
  )
}

export default ItemFormBuilder
