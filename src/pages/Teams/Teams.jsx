import { useOutletContext } from "react-router-dom"
import { useOnInit } from "custom_hooks/hooks"

export const Teams = () => {
  // @ts-ignore
  const [setHeaderTitle] = useOutletContext()
  
  useOnInit(() => {
    setHeaderTitle('Selecciones')
  })

  return (
    <div className="teams">TEAMS</div>
  )
}