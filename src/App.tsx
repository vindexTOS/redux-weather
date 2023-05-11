import React, { useState } from 'react'
import MainPage from './components/MainPage'
function App() {
  const style = {
    main: 'bg-[#0b121e] w-[100%] h-[100vh] flex flex  p-10  overflow-hidden',
  }
  return (
    <main className={style.main}>
      <MainPage />
    </main>
  )
}

export default App
