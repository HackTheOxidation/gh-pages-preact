// import { useState } from 'preact/hooks'
import './app.css';
import NavBar from './components/NavBar';
import SkillsList from './components/SkillsList.tsx';

export function App() {
  return (
    <>
      <NavBar/>
      <div class="card">
          <h1>Welcome to HackTheOxidation's GitHub pages</h1>
      </div>
      <div class="motto">
         <p>
          Hacking the World into a better place.
        </p>
      </div>

      <div>
        <p>
          Welcome to HackTheOxidation's GitHub Pages.<br/><br/>
          I'm a software engineering master student and free/open-source software enthusiast among other things.<br/>
          This site is still under construction at the moment (seriously, when are you ever done with a software project?).<br/><br/>
          In the mean time, check out my projects on <a href="https://github.com/HackTheOxidation">GitHub</a>.<br/>
        </p>
      </div>

      <SkillsList />
    </>
  )
}
