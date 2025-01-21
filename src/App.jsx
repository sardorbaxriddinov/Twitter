import { useContext } from 'react'
import {Context} from "./context/Context"
import DashboardRoutes from "./routes/Dashboard"
import './App.css'
import LoginRoutes from './routes/Login'

function App() {
  const {token} = useContext(Context)
  if(token){
    return <DashboardRoutes/>
  }
  else{
    return <LoginRoutes/>
  }
}

export default App
