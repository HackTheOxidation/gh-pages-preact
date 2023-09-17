// import { useState } from 'preact/hooks'
import './app.css'
import NavBar from './components/NavBar'

export function App() {
  return (
    <>
      <NavBar/>
      <div class="card">
          <h1>Welcome to HackTheOxidation's GitHub pages</h1>
      </div>
      <p class="read-the-docs">
        Hacking the World into a better place.
      </p>
    </>
  )
}
