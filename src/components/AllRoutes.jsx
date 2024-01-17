import React from 'react'
import {Routes, Route} from "react-router-dom"
import Home from '../pages/Home'
import Products from '../pages/Products'
import ProductDetails from '../pages/ProductDetails'
import CartPage from '../pages/CartPage'
import Payment from '../pages/Payment'
import PaymentSuccessful from '../pages/PaymentSuccessful'
import Auth from '../pages/Auth'
import WishList from '../pages/WishList'
import PrivateRoute from './PrivateRoute'
import ErrRoute from './ErrRoute'
const AllRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />}></Route>
      <Route path="/products" element={<Products />}></Route>
      <Route path="/products/:productId" element={<ProductDetails />}></Route>
      <Route
        path="/cart"
        element={
            <CartPage />
        }
      ></Route>
      <Route
        path="/payments"
        element={
            <Payment />
        }
      ></Route>
      <Route path="/paymentSuccessful" element={<PaymentSuccessful />}></Route>
      <Route path="/auth" element={<Auth />}></Route>
      <Route
        path="/wishlist"
        element={
            <WishList />
        }
      ></Route>
      <Route path="*" element={<ErrRoute />}></Route>
    </Routes>
  );
}

export default AllRoutes
