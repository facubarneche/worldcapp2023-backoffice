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
// useOnInit(() => {
//   id && getCardToEdit()
// })

// const getCardToEdit = async () => {
//   const card = await marketService.getById(id)
//   setMarket(card)
// }
const TeamsModal = ({ onClose, action }) => {
  const [team, setTeam] = useState(new Team())
  const [confederaciones, setConfederaciones] = useState([])

  useOnInit(async()=>{
    const data = await nationalTeamService.getConfederaciones()
    setConfederaciones(data)
    if(action.id !== -1){
      setTeam(await nationalTeamService.getById(action.id))
    }
  })

  const handleChange = (key, value) => {
    team[key] = value
    generarNuevoTeam(team)
    console.log(team)
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
    action.newEntity ? await nationalTeamService.create(team) : await nationalTeamService.update(team, action.id)
    onClose({ refresh: true })
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
          <TextField required label="Nombre" type="text" value={team.nombre} onChange={(e) => handleChange('nombre', e.target.value)}/>
          <TextField
            required
            select
            SelectProps={{ native: true }}
            value={team.confederacion}
            onChange={(e) => handleChange('confederacion', e.target.value)}
          >
            {
              confederaciones.map( confederacion =>
                <option key={confederacion}>{confederacion}</option>
              )
            }
          </TextField>
          <TextField required label="Copas del mundo" type="number" value={team.copasDelMundo} onChange={(e) => handleChange('copasDelMundo', e.target.value)} />
          <TextField required label="Copas confederacion" type="number" value={team.copasConfederacion} onChange={(e) => handleChange('copasConfederacion', e.target.value)}/>
          <FormActions handleLeftButtonClick={handleSave} handleRightButtonClick={onClose} />
        </Box>
      </Modal>
    </>
  )
}

export default TeamsModal