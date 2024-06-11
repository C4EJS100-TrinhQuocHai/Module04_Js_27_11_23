
import { Route, Routes } from 'react-router-dom'
import Home from './pages/home/Home'
import Admin from './pages/admin/Admin'
import Register from './pages/register/Register'
import Cart from './pages/cart/Cart'
import Products from './pages/product/Products'

export default function App() {
  return (
    <div>
        <Routes>
          <Route path='/' element={<Home></Home>} ></Route>
          <Route path='/admin' element={<Admin></Admin>} ></Route>
          <Route path='/register' element={<Register></Register>}> </Route>
          <Route path='/cart' element={<Cart></Cart>}></Route>
          <Route path='/products' element={<Products></Products>}></Route>
          <Route path='/productdetal/:productId'></Route>
        </Routes>
    </div>
  )
}
