import {
  Navigate,
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from 'react-router-dom'

// Import Pages
import { Login } from 'pages/login/Login'
import Home from 'pages/home/Home'
import Cards from 'pages/cards/Cards'
import Players from 'pages/players/Players'
import Teams from 'pages/teams/Teams'
import SalesPoint from 'pages/salesPoint/SalesPoint'
import LayoutFooter from 'components/LayoutFooter/LayoutFooter'
import LayoutHeader from 'components/LayoutHeader/LayoutHeader'

// Import Styles
import './App.css'
import Error from './pages/error/Error'
import { SnackbarProvider } from 'notistack'
import FormPlayer from './pages/formPlayer/FormPlayer'
import SalesPointForm from './pages/salesPointForm/SalesPointForm'

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route element={<LayoutFooter />}>
      <Route path="/">
        <Route index element={<Navigate to="login" />} />
        <Route path="login" element={<Login />}></Route>
        <Route element={<LayoutHeader />}>
          <Route path="home" element={<Home />}></Route>
          <Route path="figuritas" element={<Cards />}></Route>
          <Route path="jugadores" element={<Players />}></Route>
          <Route
            path="nuevo-jugador"
            element={<FormPlayer headerTitle={'Nuevo jugador'} />}
          ></Route>
          <Route path="puntos-de-venta" element={<SalesPoint />}></Route>
          <Route
            path="nuevo-punto-de-venta"
            element={<SalesPointForm headerTitle={'Nuevo punto de venta'} />}
          ></Route>
          <Route path="selecciones" element={<Teams />}></Route>
        </Route>
        <Route path="/error" element={<Error />}></Route>
        <Route path="*" element={<Error />}></Route>
      </Route>
    </Route>,
  ),
)

function App() {
  return (
    <div className="layout app">
      <RouterProvider router={router} />
      <SnackbarProvider className="snackbar" />
    </div>
  )
}

export default App
