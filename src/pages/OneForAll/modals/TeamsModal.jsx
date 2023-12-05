import { Box, Modal, TextField } from '@mui/material'
import './TeamsModal.css'
import { FormActions } from 'src/components/FormActions/FormActions'
import { useOnInit } from 'src/hooks/useOnInit'
import { nationalTeamService } from 'src/domain/services/NationalTeamService/NationalTeamService'
import { useState } from 'react'
import { Team } from 'src/domain/models/TeamModel/Team.model'

//TODO: mover y reutilizar
// const InputType = {
//   TextField: 'TextField',
//   Select: 'Select',
// }

const TeamsModal = ({ onClose }) => {
  const [team, setTeam] = useState(new Team())
  const [confederaciones, setConfederaciones] = useState([])

  useOnInit(async()=>{
    const data = await nationalTeamService.getConfederaciones()
    setConfederaciones(data)
  })

  const handleChange = (key, value) => {
    team[key] = value
    generarNuevoTeam(team)
  }

  const generarNuevoTeam = (team) => {
    const nuevoteam = Object.assign(new Team(), team)
    setTeam(nuevoteam)
  }

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


  const handleSave = async () => {
    // card.isNew ? saveFunc(card) : saveFunc(card, card.id)
    await nationalTeamService.create(team)
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
          <TextField required label="Nombre" type="text" onChange={(e) => handleChange('nombre', e.target.value)}/>
          <TextField
            required
            select
            SelectProps={{ native: true }}
            onChange={(e) => handleChange('confederacion', e.target.value)}
          >
            <option>Confederación</option>
            {
              confederaciones.map( confederacion =>
                <option key={confederacion}>{confederacion}</option>
              )
            }
          </TextField>
          <TextField required label="Copas del mundo" type="number" onChange={(e) => handleChange('copasDelMundo', e.target.value)} />
          <TextField required label="Copas confederacion" type="number" onChange={(e) => handleChange('copasConfederacion', e.target.value)}/>
          <FormActions handleLeftButtonClick={handleSave} handleRightButtonClick={onClose} />
        </Box>
      </Modal>
    </>
  )
}

export default TeamsModal