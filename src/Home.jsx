import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Test from './Test';

const Home = () => {
  return (
    <Routes>
      <Route path="/test" element={<Test />} />
    </Routes>
  );
};

export default Home;
