import { Box, Modal, TextField } from '@mui/material'
// import { Team } from 'src/domain/models/TeamModel/Team.model'
import './TeamsModal.css'
import { FormActions } from 'src/components/FormActions/FormActions'
import { useOnInit } from 'src/hooks/useOnInit'
import { nationalTeamService } from 'src/domain/services/NationalTeamService/NationalTeamService'
import { useState } from 'react'

//TODO: mover y reutilizar
// const InputType = {
//   TextField: 'TextField',
//   Select: 'Select',
// }

const TeamsModal = ({ onClose }) => {
  // const [team, setTeam] = useState(new Team())
  const [confederaciones, setConfederaciones] = useState([])

  useOnInit(async()=>{
    const data = await nationalTeamService.getConfederaciones()
    setConfederaciones(data)
  })

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


  const handleSave = () => {
    // card.isNew ? saveFunc(card) : saveFunc(card, card.id)
    onClose()
  }
  
  return (
    <>
      <Modal
        open={true}
        onClose={onClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box className='teams-modal'>
          <TextField required label="Nombre" type="text"/>
          <TextField
            className="figuritas-form__select"
            required
            select
            SelectProps={{ native: true }}
          >
            {
              confederaciones.map( confederacion =>
                <option key={confederacion}>{confederacion}</option>
              )
            }
          </TextField>
          <TextField required label="Copas del mundo" type="number" />
          <TextField required label="Copas confederacion" type="number" />
          <FormActions handleLeftButtonClick={handleSave} handleRightButtonClick={onClose} />
        </Box>
      </Modal>
    </>
  )
}

export default TeamsModal