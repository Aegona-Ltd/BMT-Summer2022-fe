import React, { useEffect } from 'react';
import { Route, Routes, useLocation } from 'react-router-dom';
import DefaultLayout from './views/containers/DefaultLayout';


function App() {
  const location = useLocation()

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [location.pathname])

  return (
    <Routes>
      <Route path="/*" element={<DefaultLayout />} />
    </Routes>

  );
}

export default App;
