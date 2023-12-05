import { fireEvent, render, screen } from '@testing-library/react'
import '@testing-library/jest-dom'
import { BrowserRouter } from 'react-router-dom'
import { NavBar } from './Navbar'

describe('NavBar Component', () => {
  test('Clickear en el botón de navegación te lleva a la ruta correspondiente', async () => {
    render(
      <BrowserRouter>
        <NavBar />
      </BrowserRouter>
    )

    const buttonElement = screen.queryAllByTestId('figuritas-button')[1]
    await fireEvent.click(buttonElement)

    expect(window.location.pathname).toBe('/')
  })
  test('Clickear en el cuarto botón de navegación te lleva a la ruta correspondiente', async () => {
    render(
      <BrowserRouter>
        <NavBar />
      </BrowserRouter>
    )

    const buttonElement = screen.queryAllByTestId('figuritas-button')[3]
    await fireEvent.click(buttonElement)

    expect(window.location.pathname).toBe('/puntos-de-venta')
  })

  
})







