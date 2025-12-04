import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { RegistrationPage } from './pages/RegistrationPage';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<RegistrationPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
