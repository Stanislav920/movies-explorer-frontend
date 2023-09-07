import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom'


import './App.css';
import Main from '../Main/Main';
import Login from '../Login/Login'
import Profile from '../Profile/Profile';
import Register from '../Register/Register';
import Movies from '../Movies/Movies';
import SavedMovies from '../SavedMovies/SavedMovies';
import Page404 from '../Page404/Page404';



function App() {
 
  return (
    <BrowserRouter>
    
    <div className="App"> 
    <Routes>
    <Route exact path="/" element={<Main/>} />
    <Route excat path="/signin" element={<Login/>} />
    <Route exact path="/signup" element={<Register/>} />
    <Route exact path="/profile" element={<Profile/>} />
    <Route exact path="/movies" element={<Movies/>} />
    <Route  exact path="/saved-movies" element={<SavedMovies/>} />
    <Route exact path="*" element={<Page404/>} />
    </Routes>
    </div>
    
    </BrowserRouter>
  );
}

export default App;
