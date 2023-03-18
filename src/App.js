import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import Home from './components/Home';
import Nav from "./components/NavBar"
import ProductDetails from './components/ProductDetails';
import AppContext from './components/Context'


function App() {
  return (
    <div className="App not-selectable"> 
    <BrowserRouter>
    <AppContext>

        <Nav />


        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/product/:productId' element={<ProductDetails />} />
          <Route>404 Not Found</Route>

        </Routes>


      </AppContext>

    </BrowserRouter>
      

    </div>
  );
}

export default App;
