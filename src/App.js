import { BrowserRouter as Router, Switch } from 'react-router-dom'

import Login from './Pages/LogInPage/Login'
import './App.css'
import DashBoard from './Pages/DashBoard/DashBoard'
import Auth from './Components/Auth/Auth'

function App() {
  return (
    <Router>
      <Switch>
        <Auth path='/' exact>
          <Login />
        </Auth>
        <Auth path='/dashboard' exact>
          <DashBoard />
        </Auth>
        <Auth path='*' exact>
          <div>Page Not Found</div>
        </Auth>
      </Switch>
    </Router>
  )
}

export default App
