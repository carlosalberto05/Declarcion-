import React, { useState } from 'react'
import './App.css'

function App() {
  const [cantidad, setCantidad] = useState(0)
  const [resultado, setResultado] = useState(null)

  const handleChange = (e) => {
    e.preventDefault()
    setCantidad(e.target.value)
  }

  const subtotal = (e) => {
    e.preventDefault()
    if (cantidad > 0) {
      let sub = cantidad / 1.16
      setResultado(sub.toFixed(2))
    } else {
      return 'No hay datos suficientes'
    }
  }

  return (
    <div className="App">
      <header>Declaración bimestral</header>
      <form>
        <input
          type="number"
          placeholder="cantidad"
          value={cantidad}
          onChange={handleChange}
        />
        <input type="submit" onClick={subtotal} />
      </form>
      <div>
        <h4>El subtotal es: {resultado}</h4>
      </div>
    </div>
  )
}

export default App
