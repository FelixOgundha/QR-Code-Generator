import React from 'react';
import { Routes, Route, BrowserRouter } from "react-router-dom";
import Index from './Pages';
import 'bootstrap/dist/css/bootstrap.min.css';

export default function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" exact element={<Index />}></Route>

        </Routes>
      </BrowserRouter>
    </>
  )
}
