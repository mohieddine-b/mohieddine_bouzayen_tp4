import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import React from 'react';
import UserList from './EX3.jsx';

function App() {

  return (
    <>
      <div>
        <h1>TP - Appel API avec useEffect</h1> <UserList />
      </div>
    </>
  )
}

export default App