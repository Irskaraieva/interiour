import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Layout from './components/layout/Layout';
import './styles/main.scss';

import { lazy } from "react";

const HomePage = lazy(() => import("./pages/homePage/HomePage"));
const ProductsList = lazy(() => import("./pages/productsList/ProductsList"));
const SignIn = lazy(() => import("./pages/SignIn/SignIn"));
const SingleItemProd = lazy(() => import("./components/singleItemProd/SingleItemProd"));
const Cart = lazy(() => import("./pages/Cart/Cart"));

export default function App() {
  return (
          <Router basename="/interiour">
            <Routes>
              <Route path="/" element={<Layout />} >
                <Route index element={<HomePage />} />
                <Route path="/products" element={<ProductsList />} />
                <Route path="/sign-in" element={<SignIn />} />
                <Route path="/products/:id" element={<SingleItemProd />} />
                <Route path="/cart" element={<Cart />} />
              </Route>
            </Routes>
          </Router>
  )
};