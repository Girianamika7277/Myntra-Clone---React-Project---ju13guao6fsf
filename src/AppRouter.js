import { BrowserRouter, Route, Routes } from 'react-router-dom';

import HomePage from "./components/Pages/HomePage/HomePage";
import ProductCatalogPage from "./components/Pages/ProductCatalogPage/ProductCatalogPage";
import ProductPage from "./components/Pages/ProductPage/ProductPage";
import ShoppingCartPage from "./components/Pages/ShoppingCartPage/ShoppingCartPage";
import SignupPage from './components/Pages/SignupPage/SignupPage';
import LoginPage from './components/Pages/LoginPage/LoginPage';

const AppRouter = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/catalog/:category" element={<ProductCatalogPage />} />
                <Route path="/product/:id" element={<ProductPage />} />
                <Route path="/cart" element={<ShoppingCartPage />} />
                <Route path="/signup" element={<SignupPage />} />
                <Route path="/login" element={<LoginPage />} />
            </Routes>
        </BrowserRouter>
    )
}

export default AppRouter;