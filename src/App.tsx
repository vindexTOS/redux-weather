import React, { useState } from 'react'
import MainPage from './pages/MainPage'
import DisplayMain from './components/display/DisplayMain'
import Cities from './pages/Cities'
import MapMain from './pages/MapMain'
import Settings from './pages/Settings'
import { Routes, Route } from 'react-router-dom'
function App() {
  const style = {
    main: 'bg-[#0b121e] w-[100%] h-[100vh] flex flex  p-10  overflow-hidden',
  }
  return (
    <main className={style.main}>
      <Routes>
        <Route path="/" element={<MainPage />}>
          <Route path="/" element={<DisplayMain />} />
          <Route path="city" element={<Cities />} />
          <Route path="map" element={<MapMain />} />
          <Route path="settings" element={<Settings />} />
        </Route>
      </Routes>
    </main>
  )
}

export default App
