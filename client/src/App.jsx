import React from "react";
import { Route, BrowserRouter as Router, Routes, Link } from "react-router-dom";

import { Home, CreatePost } from './pages';
import { logo } from './assets'

const App = () => {


  return (

    <Router>
      
      <header className="w-full flex justify-between items-center bg-white sm:px-8 px-4 py-4 border-b border-b-[#e6ebf4]">
        <Link to='/'>
          <img className="w-28 object-contain" src={logo} alt="logo" />
        </Link>
        <Link to='/createpost' className="font-semibold text-white px-6 py-2 rounded-md bg-black">Generate</Link>
      </header>

      <main className="sm:p-8 px-4 py-8  w-full bg-[#f9fafe] min-h-[calc(100vh-73px)]">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/createpost" element={<CreatePost />} />
        </Routes>
      </main>
    </Router>


  )
}

export default App
