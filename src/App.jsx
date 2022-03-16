import React from 'react'
import Issues from './Issues'
import Details from './Details'
import { NavLink, BrowserRouter as Router, Routes, Route } from 'react-router-dom'

export default function App() {
  return (
    <Router>
      <>
        <nav>
          <ul>
            <li>
              <NavLink to="/" activeClassName="active">Home</NavLink>
            </li>
          </ul>
        </nav>
        <div className="container">
          <Routes>
            <Route path="/" element={<Issues />} />
            <Route path="/issues/:id" element={<Details />} />
          </Routes>
        </div>
      </>
    </Router>
  )
}