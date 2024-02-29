import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Layout from './components/layout/Layout';
import './styles/main.scss';
import HomePage from "./pages/homePage/HomePage";
import ProductsList from "./pages/productsList/ProductsList";
import SignIn from "./pages/SignIn/SignIn";
import SingleItemProd from "./components/singleItemProd/SingleItemProd";

export default function App() {
  return (
    <Router basename="/interiour">
      <Routes>
        <Route path="/" element={<Layout />} >
          <Route index element={<HomePage />} />
          <Route path="/products" element={<ProductsList />} />
          <Route path="/sign-in" element={<SignIn />} />
          <Route path="/products/:id" element={<SingleItemProd />} />
        </Route>
      </Routes>
    </Router>
  )
};