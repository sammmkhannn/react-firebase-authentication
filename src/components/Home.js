import React from 'react'
import app from "../firebase"
function Home() {
  return (
    <>
      <h1>Home</h1>
      <button onClick={(e) => {
        e.preventDefault();
        app.auth().signOut()
      }}>Sign Out</button>
    </>
  )
}

export default Home
