import React from 'react';
import Sidebar from './Component/Sidebar';
import Navbar from './Component/Navbar';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// import {  } from 'react-router';
// import { Link } from "react-router-dom";
import About from './Component/About';
import Resume from './Component/Resume';
import Project from './Component/Project';
import { AnimatePresence } from 'framer-motion';

function App() {

  
  return (
   
    <Router>
    <div className="App">
      <div className="container app__container">
       <div className="row app__row">
      <div className="col-lg-3">
        <Sidebar />
         </div>
      <div className="col-lg-9 app__main-content">
      <Navbar />
      <AnimatePresence exitBeforeEnter>
      {/* <Switch location={location} key={location.key}> */}
      {/* <Switch> */}
      <Routes >
      <Route path="/" element={ <About />}>       
      </Route>
      </Routes>
      <Routes>
      <Route path="/resume" element={<Resume />}>
        </Route>
      </Routes>
      <Routes>
      <Route path="/projects" element={<Project />}>
      </Route>
      </Routes>
      {/* <Link to="/about"></Link> */}
       {/* <Navigate to="/about" replace={true} />  */}
      {/* </Switch> */}
      </AnimatePresence>
      </div>
      </div>
    </div>
    </div>
    </Router>
     
  );
  
}

export default App;
