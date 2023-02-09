import React from 'react';
import { HashRouter } from "react-router-dom";
import { ChakraProvider, Box} from '@chakra-ui/react'
import Navbar from './pages/NavBar';
import Intro from './pages/Intro';
import Borders from './pages/Borders';
import About from './pages/About';
import Experience from './pages/Experience';
import Contact from './pages/Contact';
import Projects from './pages/Projects';
import Endpoint from './pages/Endpoint';
import './App.css'

import { BrowserRouter, Routes, Route } from 'react-router-dom';
function App() {
  return (
    <ChakraProvider>
      <div className="App">
      <BrowserRouter>
          <Routes>
            <Route path="" element={
              <Box bgGradient='linear(to-b, #100216, #250836, #100216)'>
                <Navbar />
                <Intro />
                <About />
                <Experience />
                <Projects />
                <Contact />
                <Endpoint />
              </Box>} />
          </Routes>
          </BrowserRouter>
      </div>
    </ChakraProvider>
  );
}

export default App;