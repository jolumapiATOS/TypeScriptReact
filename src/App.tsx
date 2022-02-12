import '/node_modules/bootstrap/dist/js/bootstrap.js';
import '/node_modules/bootstrap/dist/css/bootstrap.css';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import MainContainer from './components/MainContainer';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import CreateEntry from './components/Entry';
import Entries from './components/Entries';
import { useState } from 'react';
import LandingComponent from './components/LandingPage';
import SignUp from './components/SignUp';


function App() {
  const  [online, setOnline] = useState('Offline')

  setInterval(()=>{
    if(navigator.onLine) {
      setOnline("Online")
    }else {
      setOnline("Offline")
    }
  }, 1000)
  

  return (
    <div className="App">
      <BrowserRouter>
        <Navbar online={online} />
        <Routes>
          <Route path='/SignUp' element={ <SignUp/> } />
          <Route path='/' element={ <LandingComponent/> }   />
          <Route path='/entry' element={ <CreateEntry/> } />
          <Route path='/posts' element={ <MainContainer/>  }  />
          <Route path='/entries' element={ <Entries />  }  /> 
        </Routes>
        <Footer/>
      </BrowserRouter>
    </div>
  );
}

export default App;
