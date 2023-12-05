import 'src/styles/button.css'
import { HandleError } from 'utils/HandleError/HandleError'
import { Searchbar } from 'components/Searchbar/Searchbar'
import { CustomSearch } from 'models/CustomSearch/CustomSearch'
import { CardBase } from 'components/CardBase/CardBase'
import { useState } from 'react'
import { useNavigate, useLocation } from 'react-router-dom'
import { Button } from '@mui/material'
import { useOnInit } from 'src/hooks/useOnInit'
import TeamsModal from './modals/TeamsModal'

const notNavigable = ["/selecciones"]

export const OneForAll = ({ service, contentComponent = null }) => {
  const [elements, setElements] = useState([])
  const [showModal, setShowModal] = useState(false)
  const navigate = useNavigate()
  const loc = useLocation().pathname

  const getAll = async (filter = new CustomSearch()) => {
    try {
      const elements$ = await service.getAll(filter)
      setElements(elements$)
    } catch (e) {
      HandleError(e, navigate)
    }
  }

  useOnInit(() => {
    getAll()
  })

  const redirect = (id = -1) => {
    if(isNavigable(loc)){
      id === -1 ? navigate(`${loc}/nuevo`) : navigate(`${loc}/${id}/editar`)
    }else{
      setShowModal(true)
    }
  }

  const isNavigable = (loc) => !notNavigable.includes(loc)

  const handleDelete = async (id) => {
    try {
      await service.delete(id)
      await getAll()
    } catch (e) {
      HandleError(e, navigate)
    }
  }

  const handleModalClose = () => {
    setShowModal(false)
    //TODO: Recargar solo cuando se crea o edita una seleccion
    getAll()
  }

  return (
    <>
      <Searchbar getFilterCards={getAll} />
      {elements.map((element, index) => 
        <CardBase
          key={index}
          element={element}
          contentComponent={contentComponent ? contentComponent(element.content) : null}
          onEditClick={redirect}
          onDelete={handleDelete}
        />
      )}
      <Button
        className="button button--circle button--icon button--icon-large button--float"
        onClick={() => redirect(-1)}
      >
        +
      </Button>
      {
        showModal && <TeamsModal onClose={handleModalClose}/>
      }
    </>
  )
}
