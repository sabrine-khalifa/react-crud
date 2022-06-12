
import React from 'react';
import { BrowserRouter as Router,Routes,Route } from 'react-router-dom';

import Contact from  "./components/contact";
import Create from  "./components/create";
import Update from  "./components/update";

function App() {
    
        return (
          <>
            <Router>
               <Routes>
                   
                <Route exact path='/' element={<Contact/>} />
                <Route exact path='/create'  element ={<Create/>}  />
               
                <Route exact path='update/:id' element ={<Update/>}  />

              </Routes>
            </Router> 
            </>
        );
        }
export default App;