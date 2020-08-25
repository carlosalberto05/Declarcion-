import React from 'react'
import Encabezado from './components/Encabezado'
import Section from './components/body/Section'
import Principal from './components/crud/Principal'

function App() {
  return (
    <div className="App">
      <div>
        <Encabezado />
        <Section />
        <Principal />
      </div>
    </div>
  )
}

export default App
