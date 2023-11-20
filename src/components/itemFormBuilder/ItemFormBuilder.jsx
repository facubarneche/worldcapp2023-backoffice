import { Button, TextField, Checkbox, FormControlLabel } from "@mui/material"
import './ItemFormBuilder.css'

const renderInput = (input, index) => {
  const commonProps = {
    key: index,
    className: input.type === 'checkbox' ? "item-form-builder__checkbox" : "item-form-builder__input",
  }

  if (input.type === 'checkbox') {
    return <FormControlLabel control={<Checkbox defaultChecked={input.defaultValue} />} label={input.label} {...commonProps} />
  } else {
    return (
      <TextField
        required
        label={input.label}
        type={input.type}
        defaultValue={input.defaultValue}
        select={input.type === 'select'}
        SelectProps={{ native: true }}
        {...commonProps}
      >
        {input.type === 'select' &&
          input.options.map((option) => 
            <option key={option} value={option}>
              {option}
            </option>
          )}
      </TextField>
    )
  }
}

const ItemFormBuilder = ({ inputs }) => 
  <div className="item-form-builder">
    {inputs.map((input, index) => 
      <div key={index}>{renderInput(input, index)}</div>
    )}
    <Button className="item-form-builder__button" variant="contained">
      Guardar
    </Button>
    <Button className="item-form-builder__button" variant="outlined">
      Volver
    </Button>
  </div>


export default ItemFormBuilder
