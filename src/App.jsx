import { Navigate, Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom'

// Import Pages
import { Login } from 'pages/Login/Login'
import { Dashboard } from 'src/pages/Dashboard/Dashboard'

// Import Styles
import './App.css'
import { Error } from 'pages/Error/Error'
import { SnackbarProvider } from 'notistack'
import { FormPlayer } from 'pages/OneForAll/Forms/FormPlayer/FormPlayer'
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
import CardForm from './pages/OneForAll/Forms/FormCard/CardForm'

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/">
      <Route index element={<Navigate to="login" />} />
      <Route path="login" element={<Login />}></Route>
      <Route path="dashboard" element={<Layout content={<Dashboard />} headerTitle="dashboard" />}></Route>
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
        element={<Layout content={<CardForm saveFunc={cardService.create} />} headerTitle="Nueva figurita" />}
      ></Route>
      <Route
        path="figuritas/:id/editar"
        element={<Layout content={<CardForm saveFunc={cardService.update} />} headerTitle="Modificar figurita" />}
      />
      <Route
        path="jugadores"
        element={
          <Layout
            content={<OneForAll service={playerService} contentComponent={CustomPlayerContent} />}
            headerTitle="Jugadores"
          />
        }
      ></Route>
      <Route
        path="jugadores/nuevo"
        element={<Layout content={<FormPlayer saveInfoSvFunc={playerService.create} />} headerTitle="Nuevo jugador" />}
      ></Route>
      <Route
        path="jugadores/:id/editar"
        element={
          <Layout content={<FormPlayer saveInfoSvFunc={playerService.update} />} headerTitle="Editar un jugador" />
        }
      />
      <Route
        path="puntos-de-venta"
        element={
          <Layout
            content={<OneForAll key="One_For_All-3" service={marketService} contentComponent={CustomMarketContent} />}
            headerTitle="Puntos de venta"
          />
        }
      ></Route>
      <Route
        path="puntos-de-venta/nuevo"
        element={<Layout content={<MarketForm />} headerTitle="Nuevo punto de venta" />}
      ></Route>
      <Route
        path="puntos-de-venta/:id/editar"
        element={<Layout content={<MarketForm />} headerTitle="Editar punto de venta" />}
      />
      <Route path="selecciones" element={<Layout content={<Teams />} headerTitle="Selecciones" />}></Route>
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
