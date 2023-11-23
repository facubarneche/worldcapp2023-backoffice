import { useOutletContext } from "react-router-dom"
import { useOnInit } from "src/customHooks/hooks"

export default function Teams() {
  const [setHeaderTitle] = useOutletContext()
  
  useOnInit(() => {
    setHeaderTitle('Selecciones')
  })

  return (
    <div className="teams">TEAMS</div>
  )
}