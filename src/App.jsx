import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Home from './pages/Home'
import Dash from './pages/Dash'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'



export const MainPage = () => {
  const [count, setCount] = useState(0)
  const title = 'Welcome to my website';
  const description = 'This is a simple website built with React';
  return (
    <div>
    <div>
      <a href="https://vitejs.dev" target="_blank">
        <img src={viteLogo} className="logo" alt="Vite logo" />
      </a>
      <a href="https://react.dev" target="_blank">
        <img src={reactLogo} className="logo react" alt="React logo" />
      </a>
    </div>

    <h1>Vite + React</h1>

    <div className="card">
      <button onClick={() => setCount((count) => count + 1)}>
        count is {count}
      </button>
    </div>


    <Home title={title} description={description} number={100} />

    <p className="read-the-docs">
      Click on the Vite and React logos to learn more
    </p>
  </div>
  )
}



function App() {
  return (
  <Router>
    <Routes>
      <Route path='/' element={<MainPage />} />
      <Route path='/dashboard' element={<Dash />} />
    </Routes>
  </Router>
  )
}

export default App
