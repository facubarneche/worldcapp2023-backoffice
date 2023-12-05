import { render, screen } from '@testing-library/react'
import TeamsModal from './TeamsModal'

describe('TeamsModal Tests', () => {
  const onCloseMock = () => {}
  const action = { showModal: true, newEntity: true, id: -1 }

  it('Renderiza correctamente el título', async () => {

    render(<TeamsModal onClose={onCloseMock} action={action} />)

    const searchedTitle = screen.getByText("Nueva Selección")
    expect(searchedTitle).toBeInTheDocument()
  })

  it('Renderiza correctamente los labels de los campos de entrada para la nueva selección', async () => {
    render(<TeamsModal onClose={onCloseMock} action={action} />)

    const inputName = screen.getByTestId("input-pais")
    const inputCopasDelMundo = screen.getByTestId("input-copasDelMundo")
    expect(inputName.firstChild.firstChild).toHaveTextContent("Nombre")
    expect(inputCopasDelMundo.firstChild.firstChild).toHaveTextContent("Copas del mundo")
  })
})
