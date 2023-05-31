import { useState } from 'react'
import './App.css'
import Seat from './component/Seat'
import Summary from './component/Summary'
import { Outlet } from 'react-router-dom'

function App() {
  return (
  <>
    <div className="App">
      <Seat/>
    </div>   
    <div>
      <Outlet />
    </div>
  </>
  )
}
export default App
