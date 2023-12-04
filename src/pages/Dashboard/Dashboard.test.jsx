import { render, screen } from '@testing-library/react'
import { BrowserRouter as Router } from 'react-router-dom'

import { Dashboard } from 'pages/Dashboard/Dashboard'
import { beforeEach, vi } from 'vitest'
import { Layout } from 'components/Layout/Layout'
import axios from 'axios'

vi.mock('ruta/a/dashboardService', () => {
  return {
    getStaticsDashboard: vi.fn().mockResolvedValue({
      // Aquí puedes poner los datos que quieres que devuelva tu mock
    }),
  }
})

describe('Dashboard Test', () => {
  let spyGetAxios

  beforeEach(() => {
    vi.mock('axios')
    spyGetAxios = vi.spyOn(axios, 'get')

    spyGetAxios.mockResolvedValueOnce({
      data: [
        {
          quantity: 30,
          name: 'Figuritas Ofrecidas',
        },
      ],
    })

    render(
      <Router>
        <Layout content={<Dashboard />} headerTitle="dashboard" />
      </Router>,
    )    
  })

  afterEach(() => {
    vi.clearAllMocks()
  })

  it('El Dashboard se renderiza correctamente y se puede encontrar una card en el mismo', async () => {
    const firstCard = await screen.findByTestId('figuritas-ofrecidas-box')
    expect(firstCard).toBeTruthy()
  })

  it('El título es el esperado', async () => {
    const titleElement = await screen.findByTestId('header-title')
    expect(titleElement.textContent).toBe('dashboard')
  })

  it('Se muestra correctamente el icono en la card del dashboard', async () => {
    const iconElement = await screen.findByTestId('figuritas-ofrecidas-icon')
    console.log(iconElement.classList)
    expect(iconElement.classList.contains('fa-id-badge')).toBe(true)
  })

  it('Se muestra correctamente la cantidad en la card del dashboard', async () => {
    const numberElement = await screen.findByTestId('figuritas-ofrecidas-number')
    expect(numberElement.textContent).toBe('30')
  })

  it('Se muestra correctamente la descripción en la card del dashboard', async () => {
    const textElement = await screen.findByTestId('figuritas-ofrecidas-description')
    expect(textElement.textContent).toBe('Figuritas Ofrecidas')
  })  
})
