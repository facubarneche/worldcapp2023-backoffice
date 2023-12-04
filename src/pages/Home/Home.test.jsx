import { render } from '@testing-library/react'
import { Home } from './Home'
import { BrowserRouter as Router } from 'react-router-dom'

const mockUseOutletContext = jest.fn()

jest.mock('ruta/del/contexto', () => ({
  ...jest.requireActual('ruta/del/contexto'),
  useOutletContext: () => mockUseOutletContext,
}))

describe('Home Test', () => {
  beforeEach(() => {    
    mockUseOutletContext.mockReturnValue({ location: { pathname: '/home' } })
  })

  it('renders appropriately', () => {
    render(
      <Router>
        <Home />
      </Router>,
    )
  })
})
