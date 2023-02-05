import React from 'react';
import { HashRouter } from "react-router-dom";
import { ChakraProvider, Box} from '@chakra-ui/react'
import Navbar from './pages/NavBar';
import Intro from './pages/Intro';
import About from './pages/About';
import Contact from './pages/Contact';
import Projects from './pages/Projects';
import Endpoint from './pages/Endpoint';
import './App.css'

import { BrowserRouter, Routes, Route } from 'react-router-dom';
function App() {
  return (
    <ChakraProvider>
      <div className="App">
        <HashRouter>
          <Routes>
            <Route path="" element={
              <Box bgGradient='linear(to-b, #100216, #250836, #100216)'>
                <Navbar />
                <Intro />
                <About />
                <Projects />
                <Contact />
                <Endpoint />
              </Box>} />
          </Routes>
        </HashRouter>
      </div>
    </ChakraProvider>
  );
}

export default App;