import React from 'react'

export default function Resultado(props) {
  const { subtotal, totalIva } = props
  return (
    <div>
      <h4>El subtotal es: {subtotal}</h4>
      <h4>El iva es: {totalIva}</h4>
    </div>
  )
}
