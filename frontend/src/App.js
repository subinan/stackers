import React from 'react'
import MainRoom from './pages/main_room/MainRoom'
import RecordRoom from './pages/record_room/RecordRoom'
import { Link, Route, Routes } from 'react-router-dom'

function App() {
  return (
    <div className="App">
      <ul>
        <li>
          <Link to="/MainRoom">Main</Link>
        </li>
        <li>
          <Link to="/RecordRoom">Record Room</Link>
        </li>
      </ul>
      <Routes>
        <Route path="/MainRoom" element={<MainRoom />} />
        <Route path="/RecordRoom" element={<RecordRoom />} />
      </Routes>
    </div>
  )
}

export default App
