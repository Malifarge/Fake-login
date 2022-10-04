import { BrowserRouter,Routes,Route } from 'react-router-dom';

import Login from './Pages/Login';
import Profile from './Pages/Profile';

import './App.css';

const App = () =>{
  return(
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Login/>}/>
        <Route path='/Profile' element={<Profile/>}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App;
