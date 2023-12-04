import { useOutletContext } from "react-router-dom"
import { useOnInit } from "custom_hooks/hooks"

export const Teams = () => {
  // @ts-ignore
  const {setTitle} = useOutletContext()
  
  useOnInit(() => {
    setTitle('Selecciones')
  })

  return (
    <div className="teams">TEAMS</div>
  )
}