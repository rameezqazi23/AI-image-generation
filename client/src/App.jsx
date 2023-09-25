import React from "react";
import { Route, BrowserRouter as Router, Routes, Link } from "react-router-dom";

import { Home, CreatePost } from './pages'

const App = () => {


  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/craetepost" element={<CreatePost />} />
        </Routes>
      </Router>

    </>
  )
}

export default App
