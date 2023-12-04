import { Box, Button, Modal, TextField, Typography } from '@mui/material'
import { useState } from 'react'
import { Team } from 'src/domain/models/TeamModel/Team.model'

//TODO: Luego mover o pasar a css
const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
}

//TODO: mover y reutilizar
const InputType = {
  TextField: 'TextField',
  Select: 'Select',
}

const TeamsModal = () => {
  const handleClose = () => false
  const [team, setTeam] = useState(new Team())

  //   const fields = {
  //     nombre: {
  //       name: 'Nombre',
  //       type: InputType.TextField,
  //       value: team.nombre,
  //       className: 'field',
  //       elementProps: {},
  //       options: {},
  //     },
  //     confederacion: {
  //       name: 'Pedidos Pendientes',
  //       type: InputType.Select,
  //       value: team.tipoPuntoDeVenta,
  //       className: 'field',
  //       elementProps: { native: true },
  //       options: ['CONMEBOL', 'UEFA'], //TODO: traer del back las confederaciones
  //     },
  //     copasDelMundo: {
  //       name: 'Pedidos Pendientes',
  //       type: InputType.TextField,
  //       value: team.pedidosPendientes,
  //       className: 'field',
  //       elementProps: { type: 'number', min: 0 },
  //       options: {},
  //     },
  //     copasConfederacion: {
  //       name: 'Pedidos Pendientes',
  //       type: InputType.TextField,
  //       value: team.pedidosPendientes,
  //       className: 'field',
  //       elementProps: { type: 'number', min: 0 },
  //       options: {},
  //     }
  //   }
  
  return (
    <>
      <Button>Open modal</Button>
      <Modal
        open={true}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <TextField required label="Nombre" type="text" value={""} />
          <TextField
            className="figuritas-form__select"
            required
            select
            SelectProps={{ native: true }}
          >
            <option>lala</option>
            <option>lele</option>
            <option>lolo</option>
          </TextField>
          <TextField required label="Copas del mundo" type="number" value={0} />
          <TextField required label="Copas confederacion" type="number" value={0} />
        </Box>
      </Modal>
    </>
  )
}

export default TeamsModal