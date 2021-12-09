import * as React from "react";
import { Routes, Route } from "react-router-dom";
import Random from './Random';
import ByCategory from './ByCategory';
import BySearch from './BySearch';
import Popular from './Popular';
import Navigation from "./Navigation";
import './App.css';

function App() {
  return (
    <div className="App">
      <h1>Welcome to my Jokes page!</h1>
      <Navigation />
      <Routes>
        <Route path="/" element={<Random />} />
        <Route path="by-category" element={<ByCategory />} />
        <Route path="by-search" element={<BySearch />} />
        <Route path="popular" element={<Popular />} />
      </Routes>
    </div>
  );
}

export default App;
