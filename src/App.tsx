import React, { useState } from 'react'
import MainPage from './components/MainPage'
import DisplayMain from './components/display/DisplayMain'
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
        </Route>
      </Routes>
    </main>
  )
}

export default App
