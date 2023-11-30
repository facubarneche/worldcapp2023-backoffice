import { useNavigate, useOutletContext, useParams } from 'react-router-dom'
import { FormActions } from 'src/components/FormActions/FormActions'
import { useOnInit } from 'src/customHooks/hooks'
import './FormPlayer.css'
import { Checkbox, FormControlLabel, MenuItem, TextField, Typography } from '@mui/material'
import { useEffect, useState } from 'react'
import { nationalTeamService } from 'src/domain/services/nationalTeamService/NationalTeamService'
import { playerService } from 'src/domain/services/PlayerService/PlayerService'
import { Player } from 'src/domain/models/PlayerModel/Player.model'

const FormPlayer = ({ headerTitle, saveInfoSvFunc }) => {
  // @ts-ignore
  const [setHeaderTitle] = useOutletContext()
  const [player, setPlayer] = useState(
    new Player({
      nombre: undefined,
      apellido: undefined,
      nacimiento: undefined,
      altura: undefined,
      peso: undefined,
      camiseta: undefined,
      seleccion: '',
      debut: undefined,
      posicion: '',
      posiciones: [],
      esLider: undefined,
      cotizacion: undefined,
    }),
  )
  //TODO: realizar
  const [nationalTeamOptions, setNationalTeamOptions] = useState([])
  const positions = ['Arquero', 'Delantero', 'Mediocampista', 'Defensor', 'Polivalente']
  const params = useParams()
  const navigate = useNavigate()

  useOnInit(() => {
    const setNationalTeams = async () => {
      const data = await nationalTeamService.getAllNames()
      setNationalTeamOptions(data)
    }
    const setPlayerInfo = async (id) => {
      const response = await playerService.getById(id)
      setPlayer(response)
    }
    if (params.id != undefined) setPlayerInfo(params.id)
    setNationalTeams()

    setHeaderTitle(headerTitle)
  })

  useEffect(() => {
    console.log(player.objectCreateModifyPlayer)
  })

  const handleChecked = (e, key) => {
    const value = e.target.checked
    setPlayer((prev) => new Player({ ...prev.objectCreateModifyPlayer, [key]: value }))
  }

  const handleChange = (e, key) => {
    const value = e.target.value
    setPlayer((prev) => new Player({ ...prev.objectCreateModifyPlayer, [key]: value }))
  }

  const handleBack = () => {
    navigate('/jugadores')
  }

  const sendData = () => {
    if (!player.isPolivalente) setPlayer((prev) => new Player({ ...prev.objectCreateModifyPlayer, ['posiciones']: [] }))
    player.isNew ? saveInfoSvFunc(player.id) : saveInfoSvFunc()
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
          children: positions
            .filter((position) => position != 'Polivalente')
            .map((position) => (
              <MenuItem key={position} value={position}>
                {position}
              </MenuItem>
            )),
        }
      : { inputElement: <></> }
  }

  const inputsData = [
    { textLabel: 'Nombre', key: 'nombre', props: {} },
    { textLabel: 'Apellido', key: 'apellido', props: {} },
    {
      textLabel: 'Fecha de nacimineto',
      key: 'fechaNacimiento',
      props: { type: 'date' },
    },
    { textLabel: 'Altura', key: 'altura', props: { type: 'number' } },
    { textLabel: 'Peso', key: 'peso', props: { type: 'number' } },
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
        type: 'date',
      },
    },
    {
      textLabel: 'Posicion',
      key: 'posicion',
      props: {
        select: true,
      },
      children: positions.map((position) => (
        <MenuItem key={position} value={position}>
          {position}
        </MenuItem>
      )),
    },
    setRenderPolivalente(),
    {
      inputElement: (
        <FormControlLabel control={<Checkbox value={player['esLider']} onChange={(e) => handleChecked(e, 'esLider')} />} label="Es Lider" />
      ),
    },
    { textLabel: 'Cotizacion', key: 'cotizacion', props: { type: 'number' } },
  ]

  return (
    <main className="formPlayer formPlayer__flexContainer">
      <form className="formPlayer__form">
        {inputsData.map((data, index) => (
          <section className="formPlayer__input-container formPlayer__flexContainer" key={index}>
            <Typography component="label" variant="h5">
              {data.textLabel}
            </Typography>
            {data.inputElement ?? (
              <TextField value={player[data.key]} onChange={(e) => handleChange(e, data.key)} {...data.props}>
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
