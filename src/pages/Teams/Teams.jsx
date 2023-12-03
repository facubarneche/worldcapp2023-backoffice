import { useOutletContext } from "react-router-dom"
import { useOnInit } from "custom_hooks/hooks"
import { useState } from "react"
import { nationalTeamService } from "src/domain/services/nationalTeamService/NationalTeamService"
  


export const Teams = () => {
  // @ts-ignore
  const [setHeaderTitle] = useOutletContext()
  const [teams, setTeams] = useState([])

  useOnInit(async () => {
    setHeaderTitle('Selecciones')
    setTeams(await nationalTeamService.getAll())
  })
  
  return (
    <>
      {
      }
    </>
  )
}