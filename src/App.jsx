import React, { useState } from 'react'
import Navbar from './components/Navbar/Navbar'
import { Route, Routes } from 'react-router-dom'
import Discover from './pages/Discover/Discover'
import Playlist from './pages/Playlist/Playlist'
import SongDetail from './components/SongDetail/SongDetail'
import Footer from './components/Footer/Footer'
import LoginPopup from './components/LoginPopup/LoginPopup'

const App = () => {
  const [showLogin, setShowLogin] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  return (
    <>
      {showLogin ? <LoginPopup setShowLogin={setShowLogin} /> : <></>}
      <div className='app'>
        <Navbar setShowLogin={setShowLogin} />
        <Routes>
          <Route path='/' element={<Discover />} />
          <Route path='/playlist' element={<Playlist />} />
          <Route path='/song/:video_id' element={<SongDetail />} />
        </Routes>
      </div>
      <Footer />
    </>
  )
}

export default App