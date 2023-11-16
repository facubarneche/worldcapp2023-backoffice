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

// Import Styles
import './App.css'
import Layout from './components/Laoyut/Layout'

const router = createBrowserRouter(
  createRoutesFromElements(

    <Route element={
      <Layout />
    }>
      <Route path="/">
        <Route index element={<Navigate to="login" />} />
        <Route path="login" element={<Login />}></Route>
        <Route element={
          <LayoutHeader>
        }>
          <Route path="home" element={<Home />}></Route>
          <Route path="figuritas" element={<Cards />}></Route>
          <Route path="jugadores" element={<Players />}></Route>
          <Route path="puntos-de-venta" element={<SalesPoint />}></Route>
          <Route path="selecciones" element={<Teams />}></Route>
        </Route>
      </Route>
    </Route>

    ,
  ),
)

function App() {
  return <RouterProvider router={router} />
}

export default App
