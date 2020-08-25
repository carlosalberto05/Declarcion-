import React from 'react'
import Encabezado from './components/Encabezado'
import Section from './components/body/Section'
import Footer from './components/Footer'
import Formulario from './components/Formulario'

function App() {
  return (
    <div className="App">
      <div className="container mt-5">
        <Encabezado />
        <Section />
        <Footer />
        <Formulario />
      </div>
    </div>
  )
}

export default App
