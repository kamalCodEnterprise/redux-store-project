
import './App.css';
//import ComA from './component/ComA';
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Home from './pages/Home';
import Cart from './pages/Cart';
import Navbar from './component/Navebar';
import { Provider } from 'react-redux';
import store from './store/store';
import Productdetail from './pages/Productdetail';
import Check from './pages/Check';



function App() {
  return (

    <div className="App">
    <Provider store={store}>
    <BrowserRouter>
    <Navbar/>
      <Routes>
        <Route path='/' element={<Home/>}></Route>
        <Route path='/cart' element={<Cart/>}></Route>
        <Route path='/productdetail' element={<Productdetail/>}></Route>
        <Route path='/check' element={<Check/>}></Route>

     
  

      
      </Routes>
    </BrowserRouter>
    </Provider>
    </div>
  
  );
}

export default App;
