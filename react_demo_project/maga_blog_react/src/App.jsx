import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  console.log(import.meta.env.VITE_APPWRITE_URL); // access env variable
  

  return (
    <>
    <h1>a blog with appwrite</h1>
    </>
  )
}

export default App