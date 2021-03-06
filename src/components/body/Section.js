import React, { useState } from 'react'
import Formu from './Formu'
import Resultado from './Resultado'

export default function Section() {
  const [cantidad, setCantidad] = useState(0)
  const [subtotal, setSubtotal] = useState(null)
  const [totalIva, setTotalIva] = useState(null)

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
    <div className="container mt-5">
      <Formu cantidad={cantidad} calculo={calculo} setCantidad={setCantidad} />
      <Resultado subtotal={subtotal} totalIva={totalIva} />
    </div>
  )
}
