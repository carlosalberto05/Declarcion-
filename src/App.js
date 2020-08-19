import React, { useState } from 'react'
import './App.css'

function App() {
  const [cantidad, setCantidad] = useState(0)
  const [subtotal, setSubtotal] = useState(null)
  const [totalIva, setTotalIva] = useState(null)

  const handleChange = (e) => {
    e.preventDefault()
    setCantidad(e.target.value)
  }

  const calculo = (e) => {
    e.preventDefault()
    if (cantidad > 0) {
      let sub = cantidad / 1.16
      let iva = sub * 0.16
      setSubtotal(sub.toFixed(2))
      setTotalIva(iva.toFixed(2))
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
        <input type="submit" onClick={calculo} />
      </form>
      <div>
        <h4>El subtotal es: {subtotal}</h4>
        <h4>El iva es: {totalIva}</h4>
      </div>
    </div>
  )
}

export default App
