import { useOutletContext } from "react-router-dom"
import { useOnInit } from "src/customHooks/hooks"

export default function Teams() {
  // @ts-ignore
  const [setHeaderTitle] = useOutletContext()
  
  useOnInit(() => {
    setHeaderTitle('Selecciones')
  })

  return (
    <div className="teams">TEAMS</div>
  )
}