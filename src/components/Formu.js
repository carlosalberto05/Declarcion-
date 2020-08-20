import React from 'react'

export default function Formu(props) {
  const { cantidad, calculo, setCantidad } = props

  const handleChange = (e) => {
    e.preventDefault()
    setCantidad(e.target.value)
  }

  return (
    <form>
      <input
        type="number"
        placeholder="Ingresa una cantidad"
        value={cantidad}
        onChange={handleChange}
      />
      <input type="submit" onClick={calculo} />
    </form>
  )
}
