
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import { Provider } from 'react-redux'
import store from './store/store'
import Home from './pages/home/Home'
import Register from './pages/auth/register/Register'
import Login from './pages/auth/login/Login'
import SingleProduct from './pages/singleProduct/SingleProduct'
import Cart from './pages/cart/Cart'
import Checkout from './pages/checkout/Checkout'
import MyOrder from './pages/order/myorders/MyOrder'
import MyOrderDetails from './pages/order/myorders/MyOrderDetails'

function App() {

  return (
    <Provider store = {store}>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/register' element={<Register/>}/>
          <Route path='/login' element={<Login/>}/>
          <Route path='/product/:id' element = {<SingleProduct/>}/>
          <Route path='/cart' element={<Cart/>}/>
          <Route path='/checkout' element={<Checkout/>}/>
          <Route path='/myorder' element={<MyOrder/>}/>
          <Route path='/myorder/:id' element={<MyOrderDetails/>}/>
        </Routes>
      </BrowserRouter>
    </Provider>
  )
}

export default App
