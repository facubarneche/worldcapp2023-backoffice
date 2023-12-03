import 'src/styles/button.css'
import { useOnInit } from 'custom_hooks/hooks'
import { HandleError } from 'utils/HandleError/HandleError'
import { Searchbar } from 'components/Searchbar/Searchbar'
import { CustomSearch } from 'models/CustomSearch/CustomSearch'
import { CardBase } from 'components/CardBase/CardBase'
import { useState } from 'react'
import { useNavigate, useOutletContext, useLocation } from 'react-router-dom'
import { Button } from '@mui/material'
import { GetWordFromRoute } from 'utils/TitleFromRoute/GetWordFromRoute'

export const OneForAll = ({ contentComponent, service }) => {
  // @ts-ignore
  const [setHeaderTitle] = useOutletContext()
  const [elements, setElements] = useState([])
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
    setHeaderTitle(GetWordFromRoute(loc))
    getAll()
  })

  const redirect = (id = -1) => {
    id === -1 ? navigate(`${loc}/nuevo`) : navigate(`${loc}/${id}/editar`)
  }

  const handleDelete = async (id) => {
    try {
      await service.delete(id)
      await getAll()
    } catch (e) {
      HandleError(e, navigate)
    }
  }

  return (
    <>
      <Searchbar getFilterCards={getAll} />
      {elements.map((element, index) => 
        <CardBase
          key={index}
          element={element}
          contentComponent={contentComponent(element.content)}
          onEditClick={redirect}
          onDelete={handleDelete}
        />
      )}
      <Button className="button button--circle button--icon button--large button--float" onClick={() => redirect(-1)}>
        +
      </Button>
    </>
  )
}
