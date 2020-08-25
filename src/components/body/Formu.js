import React from 'react'

export default function Formu(props) {
  const { cantidad, calculo, setCantidad } = props

  const handleChange = (e) => {
    e.preventDefault()
    setCantidad(e.target.value)
  }

  return (
    <form onSubmit={calculo} className="d-flex justify-content-end mt-5 ">
      <input
        type="number"
        placeholder="Ingresa una cantidad"
        value={cantidad}
        onChange={handleChange}
        className="mr-4 text-right"
      />
      <button className="btn btn-primary " type="submit">
        Enviar
      </button>
    </form>
  )
}
