// import { Button } from '@mui/material'
import { Button } from '@mui/material'
import { useState } from 'react'
import { useNavigate, useOutletContext } from 'react-router-dom'
import { CardBase } from 'src/components/CardBase/CardBase'
import { CustomPlayerContent } from 'src/components/CustomContent/CustomPlayerContent'
import { Searchbar } from 'src/components/Searchbar/Searchbar'
import { useOnInit } from 'src/customHooks/hooks'
import { CustomSearch } from 'src/domain/models/CustomSearch/CustomSearch'
import { playerService } from 'src/domain/services/PlayerService/PlayerService'
import 'src/styles/addbutton.css'
import { HandleError } from 'src/utils/HandleError/HandleError'


export const Players = () => {
  // @ts-ignore
  const [setHeaderTitle] = useOutletContext()
  const [players, setPlayers] = useState([])
  const navigate = useNavigate()

  useOnInit(async () => {
    try {
      setHeaderTitle('Jugdores')
      getPlayers(new CustomSearch())
    } catch (error) {
      HandleError(error, navigate)
    }
  })

  const getPlayers = async (filter) => {
    setPlayers(await playerService.getPlayers(filter))
  }

  const redirect = (id = -1) => {    
    id === -1 ? navigate('/jugador-nuevo') : navigate(`/jugador/${id}/editar`)
  }

  const handleDelete = (id) => {
    console.log(id)
  }

  return (
    <>
      <Searchbar getFilterCards={getPlayers} />
      {players.map((player, index) => 
        <CardBase
          key={index}
          card={player}
          contentComponent={CustomPlayerContent(player.content())}
          onEditClick={redirect}
          onDeleteClick={handleDelete}
        />
      )}
      <Button className="add__button" onClick={() => redirect(-1)}>
        +
      </Button>
      
    </>
  )
}
