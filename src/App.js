
import './App.css';
import Home from './Component/Home';
import Navbar from './Component/Navbar';
import Collection from './Component/Collection';
import ProductDetail from './Component/ProductDetail';
// import Portal from './Component/portal/Portal';
import Modal from './Component/portal/Modal';
import DataApp from './DataApp';
import Login from './Component/login/Login';
import Signup from './Component/signup/Signup';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Checkout from './Component/Checkout';
function App() {
  return (
    <div >
        <DataApp>

       
        <BrowserRouter>
          <Navbar/>
          <Routes>
              <Route path='/' element={<Collection/>} />
              <Route path='/collection' element={<Collection/>} />
              <Route path='/product' element={<ProductDetail/>}/>
              <Route path='/Modal/:id' element={<Modal/>}/>
              <Route path='/login' element={<Login/>}/>
              <Route path='/signup' element={<Signup/>}/>
              <Route path='/checkout' element={<Checkout/>}/>

              
          </Routes>
        </BrowserRouter>
        </DataApp>
    </div>
  );
}

export default App;
