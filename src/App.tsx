
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import { Provider } from 'react-redux'
import store from './store/store'

function App() {

  return (
    <Provider store = {store}>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={'THIS IS HOME PAGE'}/>
          <Route path='/register' element={'THIS IS REGISTER PAGE'}/>
          <Route path='/login' element={'THIS IS LOGIN PAGE'}/>
        </Routes>
      </BrowserRouter>
    </Provider>
  )
}

export default App
