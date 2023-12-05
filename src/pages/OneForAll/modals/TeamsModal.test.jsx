import { render, screen, act } from '@testing-library/react'
import { TeamsModal } from 'pages/OneForAll/modals/TeamsModal'
import { vi } from 'vitest'

import { nationalTeamMock } from 'mocks/NationalTeamMock'
import { nationalTeamService } from 'services/NationalTeam/NationalTeamService'
import { confederationsMock } from 'mocks/ConfederationsMock'

// @ts-ignore
vi.spyOn(nationalTeamService, 'getById').mockImplementation((id) => {
  return Promise.resolve(id === 0 ? [nationalTeamMock] : null)
})

vi.spyOn(nationalTeamService, 'getConfederaciones').mockResolvedValue(confederationsMock)

describe('TeamsModal Tests', () => {
  const onCloseMock = () => {}
  const action = { showModal: true, newEntity: true, id: -1 }

  beforeEach(async () => {
    await act(async () => render(<TeamsModal onClose={onCloseMock} action={action} />))
  })

  afterEach(() => {
    vi.clearAllMocks()
  })

  it('Renderiza correctamente el título', async () => {
    const searchedTitle = screen.getByText('Nueva Selección')
    expect(searchedTitle).toBeInTheDocument()
  })

  it('Renderiza correctamente los labels de los campos de entrada para la nueva selección', async () => {
    const inputName = screen.getByTestId('input-pais')
    const inputCopasDelMundo = screen.getByTestId('input-copasDelMundo')
    expect(inputName.firstChild.firstChild).toHaveTextContent('Nombre')
    expect(inputCopasDelMundo.firstChild.firstChild).toHaveTextContent('Copas del mundo')
  })
})
