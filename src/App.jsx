import { Navigate, Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom'

// Import Pages
import { Login } from 'pages/Login/Login'
import { Home } from 'pages/Home/Home'

// Import Styles
import './App.css'
import { Error } from 'pages/Error/Error'
import { SnackbarProvider } from 'notistack'
import { FormPlayer } from 'pages/OneForAll/Forms/FormPlayer/FormPlayer'
import { CardForm } from 'pages/OneForAll/Forms/CardForm'
import { MarketForm } from 'pages/OneForAll/Forms/MarketForm/MarketForm'
import { Teams } from 'pages/Teams/Teams'
import { OneForAll } from 'pages/OneForAll/OneForAll'
import { marketService } from 'services/MarketService/MarketService'
import { CustomMarketContent } from 'components/CustomContent/CustomMarketContent'
import { cardService } from 'services/CardService/CardService'
import { CustomCardContent } from 'components/CustomContent/CustomCardContent'
import { playerService } from 'services/PlayerService/PlayerService'
import { CustomPlayerContent } from 'components/CustomContent/CustomPlayerContent'
import { Layout } from './components/Layout/Layout'

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/">
      <Route index element={<Navigate to="login" />} />
      <Route path="login" element={<Login />}></Route>
      <Route path="home" element={<Layout content={<Home />} headerTitle="dashboard" />}></Route>
      <Route
        path="figuritas"
        element={
          <Layout
            content={<OneForAll service={cardService} contentComponent={CustomCardContent} />}
            headerTitle="Figuritas"
          />
        }
      ></Route>
      <Route
        path="figuritas/nuevo"
        element={<Layout content={<CardForm/>} headerTitle="Nueva figurita" />}
      ></Route>
      <Route path="figuritas/:id/editar" element={
      <Layout content={<CardForm />} headerTitle='Nueva figurita'/>
      } />
      <Route
        path="jugadores"
        element={<OneForAll key="One_For_All-2" service={playerService} contentComponent={CustomPlayerContent} />}
      ></Route>
      <Route
        path="jugadores/nuevo"
        element={<FormPlayer headerTitle={'Nuevo jugador'} saveInfoSvFunc={playerService.create} />}
      ></Route>
      <Route
        path="jugadores/:id/editar"
        element={<FormPlayer headerTitle={'Editar un jugador'} saveInfoSvFunc={playerService.update} />}
      />
      <Route
        path="puntos-de-venta"
        element={<OneForAll key="One_For_All-3" service={marketService} contentComponent={CustomMarketContent} />}
      ></Route>
      <Route path="puntos-de-venta/nuevo" element={<MarketForm headerTitle={'Nuevo punto de venta'} />}></Route>
      <Route path="puntos-de-venta/:id/editar" element={<MarketForm headerTitle={'Editar punto de venta'} />} />
      <Route path="selecciones" element={<Teams />}></Route>
      <Route path="/error" element={<Error />}></Route>
      <Route path="*" element={<Error />}></Route>
    </Route>,
  ),
)

function App() {
  return (
    <>
      <RouterProvider router={router} />
      <SnackbarProvider className="snackbar" />
    </>
  )
}

export default App
