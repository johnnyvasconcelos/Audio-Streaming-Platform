import React from 'react';
import NavBar from './components/NavBar.jsx';
import Footer from './components/Footer.jsx';
import Home from './pages/Home';
import Artists from './pages/Artists';
import Artist from './pages/Artist';
import Songs from './pages/Songs';
import Song from './pages/Song';
import About from './pages/About';
import Plans from './pages/Plans';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

const main = 
              <BrowserRouter>
                <NavBar/>
                <Routes>
                  <Route path="/" element={<Home/>} />
                  <Route path="/artists" element={<Artists/>} />
                  <Route path="/artist/:id" element={<Artist/>} />
                  <Route path="/songs" element={<Songs/>} />
                  <Route path="/song/:id" element={<Song/>} />
                  <Route path="/about" element={<About/>} />
                  <Route path="/plans" element={<Plans/>} />
                </Routes>
                <Footer/>
              </BrowserRouter>
const App = () => main
export default App