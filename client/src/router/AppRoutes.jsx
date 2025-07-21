import React from 'react';
import {Routes, Route} from 'react-router-dom';
import Home from '../pages/Home';
import LoginRegistration from '../pages/LoginRegistration';
import Catalog from '../pages/Catalog';
import NoPage from '../pages/NoPage';

export default function AppRoutes() {
  return (
    <Routes>
      <Route path='/' element={<Home />}></Route>
      <Route path='notfound' element={<NoPage />}></Route>
      <Route path='catalog' element={<Catalog />}></Route>
    </Routes>
  )
}

