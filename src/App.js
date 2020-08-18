import React, { useState } from 'react'
import './App.css'

function App() {
  const [cantidad, setCantidad] = useState(0)

  const subtotal = (e) => {
    e.preventDefault()
    if (cantidad > 0) {
      let sub = cantidad / 1.16
      return sub.toFixed(2)
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
          onChange={(e) => setCantidad(e.target.value)}
        />
        <input type="submit" onClick={subtotal} />
      </form>
    </div>
  )
}

export default App
