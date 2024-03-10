/* eslint-disable no-unused-vars */
import React from 'react'
import { Link } from "react-router-dom"

function App() {
  return (
    <>
      <div className="container home-page__container">
        <h1 className="main__title">My Bullet Journal</h1>
        <div className="home__buttons">
          <Link to="/login" className="btn btn-secondary">Login</Link>
        </div>
      </div>
    </>
  )
}

export default App