import { useNavigate, useOutletContext, useParams } from 'react-router-dom'
import { FormActions } from 'src/components/FormActions/FormActions'
import './FormPlayer.css'
import { Checkbox, FormControlLabel, MenuItem, TextField } from '@mui/material'
import { useState } from 'react'
import { nationalTeamService } from 'src/domain/services/nationalTeamService/NationalTeamService'
import { playerService } from 'src/domain/services/PlayerService/PlayerService'
import { Player } from 'src/domain/models/PlayerModel/Player.model'
import { useOnInit } from 'src/custom_hooks/hooks'

const FormPlayer = ({ headerTitle, saveInfoSvFunc }) => {
  // @ts-ignore
  const [setHeaderTitle] = useOutletContext()
  const [player, setPlayer] = useState(
    new Player({
      nombre: '',
      apellido: '',
      fechaNacimiento: 'mm/dd/yyyy',
      altura: '',
      peso: '',
      nroCamiseta: '',
      seleccion: '',
      debut: '',
      posicion: '',
      posiciones: [],
      esLider: '',
      cotizacion: '',
    }),
  )
  //TODO: realizar
  const [nationalTeamOptions, setNationalTeamOptions] = useState([])
  const [positions, setPositions] = useState({ posicionesGenericas: [], posiciones: [] })
  const params = useParams()
  const navigate = useNavigate()

  useOnInit(() => {
    const setNationalTeams = async () => {
      const data = await nationalTeamService.getAllNames()
      setNationalTeamOptions(data)
    }
    const setPositionsPlayer = async () => {
      setPositions(await playerService.positions())
    }
    const setPlayerInfo = async (id) => {
      const response = await playerService.getById(id)
      setPlayer(new Player({ ...response.JSONCreateModifyPlayer, id: id }))
    }

    if (params.id != undefined) setPlayerInfo(params.id)
    setNationalTeams()
    setPositionsPlayer()
    setHeaderTitle(headerTitle)
  })

  const setPlayerValue = (key, value) => {
    setPlayer((prev) => new Player({ id: player.id, ...prev.JSONCreateModifyPlayer, [key]: value }))
  }

  const handleChecked = (e, key) => {
    const value = e.target.checked
    setPlayerValue(key, value)
  }

  const handleChange = (e, key) => {
    const value = e.target.value
    setPlayerValue(key, value)
  }

  const handleBack = () => {
    navigate('/jugadores')
  }

  const sendData = () => {
    if (!player.isPolivalente) setPlayerValue('posiciones', [])
    player.isNew ? saveInfoSvFunc(player) : saveInfoSvFunc(player, player.id)
  }

  const setRenderPolivalente = () => {
    return player.isPolivalente
      ? {
          textLabel: 'Posiciones',
          key: 'posiciones',
          props: {
            select: true,
            SelectProps: {
              multiple: true,
            },
          },
          children: positions.posicionesGenericas.map((position) => (
            <MenuItem key={position} value={position}>
              {position}
            </MenuItem>
          )),
        }
      : { element: <></> }
  }

  const inputsData = [
    { textLabel: 'Nombre', key: 'nombre', props: {} },
    { textLabel: 'Apellido', key: 'apellido', props: {} },
    { element: <hr /> },
    {
      textLabel: 'Fecha de nacimineto',
      key: 'fechaNacimiento',
      props: { type: 'date' },
    },
    { textLabel: 'Altura', key: 'altura', props: { type: 'number' } },
    { textLabel: 'Peso', key: 'peso', props: { type: 'number' } },
    { element: <hr /> },
    { textLabel: 'Nro Camiseta', key: 'nroCamiseta', props: { type: 'number' } },
    {
      textLabel: 'Seleccion',
      key: 'seleccion',
      props: {
        select: true,
      },
      children: nationalTeamOptions.map((nationalTeam) => (
        <MenuItem key={nationalTeam} value={nationalTeam}>
          {nationalTeam}
        </MenuItem>
      )),
    },
    {
      textLabel: 'Año de debut en la seleccion',
      key: 'debut',
      props: {
        type: 'number',
      },
    },
    {
      textLabel: 'Posicion',
      key: 'posicion',
      props: {
        select: true,
      },
      children: positions.posiciones.map((position) => (
        <MenuItem key={position} value={position}>
          {position}
        </MenuItem>
      )),
    },
    setRenderPolivalente(),
    { element: <hr /> },

    {
      element: (
        <FormControlLabel
          control={<Checkbox checked={!!player['esLider']} onChange={(e) => handleChecked(e, 'esLider')} />}
          label="Es Lider"
        />
      ),
    },
    { textLabel: 'Cotizacion', key: 'cotizacion', props: { type: 'number' } },
  ]

  return (
    <main className="formPlayer formPlayer__flexContainer">
      <form className="formPlayer__form">
        {inputsData.map((data, index) => (
          <section className="formPlayer__input-container formPlayer__flexContainer" key={index}>
            {data.element ?? (
              <TextField
                className="field"
                label={data.textLabel}
                value={player[data.key]}
                onChange={(e) => handleChange(e, data.key)}
                {...data.props}
              >
                {data.children}
              </TextField>
            )}
          </section>
        ))}
      </form>
      <FormActions leftButtonClick={sendData} rightButtonClick={handleBack} />
    </main>
  )
}
export default FormPlayer
