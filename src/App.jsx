import { useState } from 'react'
import Toggle from './components/Toggle'
import { Route, Routes } from "react-router-dom";


function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Toggle />} />
      </Routes>
    </div>
  );
}

export default App
