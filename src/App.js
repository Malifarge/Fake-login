import { BrowserRouter,Routes,Route } from 'react-router-dom';

import { UserContextProvider } from './Context/User';

import Login from './Pages/Login';
import Profile from './Pages/Profile';

import './App.css';

const App = () =>{
  return(
    <UserContextProvider>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Login/>}/>
          <Route path='/Profile' element={<Profile/>}/>
        </Routes>
      </BrowserRouter>
    </UserContextProvider>
  )
}

export default App;
