import React from 'react'
import {Route, BrowserRouter as Router,Routes} from 'react-router-dom';
import Navbar from "./Components/Navbar";
import Home from './Components/Home';
import Departments from './Components/Departments';
import About from './Components/About';
import Contact from './Components/Contact';
import SignUp from './Components/SignUp';


function App() {
  return (
    <div className='App'>
      <Router>
    <Navbar/>
    
      <Routes>
       <Route path='/' element={<Home/>}/>
       <Route path='/departments' element={<Departments/>}/>
       <Route path='/about' element={<About/>}/>
       <Route path='/contact' element={<Contact/>}/>
       <Route path='/signup' element={<SignUp/>}/>
     </Routes> 
   </Router>
   
    </div>
    
  )
}

export default App;

