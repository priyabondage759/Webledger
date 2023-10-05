
import './App.css';
// import 'bootstrap/dist/css/bootstrap.min.css';  

import { BrowserRouter,Routes,Route } from 'react-router-dom';
import { Register } from './Components/Register';
import { Login } from './Components/Login';
// import {Food} from "./Pages/Foods"
import { NewsApp } from './Pages/NewsApp';

function App() {
  return (
    <div className="App">
    
      <BrowserRouter>
      <Routes>
        <Route path='/' element={<Register/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/news' element={<NewsApp/>}/>
      </Routes>
       </BrowserRouter>
     {/* <Food/> */}
    </div>
  );
}

export default App;
