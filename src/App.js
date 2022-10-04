import { BrowserRouter,Routes,Route } from 'react-router-dom';

import { UserContextProvider } from './Context/User';
import { FriendsContextProvider } from './Context/Friends';

import Login from './Pages/Login';
import Profile from './Pages/Profile';
import Friends from './Pages/Friends';

import './App.css';

const App = () =>{
  return(
    <UserContextProvider>
      <FriendsContextProvider>
        <BrowserRouter>
          <Routes>

            <Route path='/' element={<Login/>}/>
            <Route path='/Profile' element={<Profile/>}/>
            <Route path='/Friends' element={<Friends/>}/>
            
          </Routes>
        </BrowserRouter>
      </FriendsContextProvider>
    </UserContextProvider>
  )
}

export default App;
