import React, { useState } from 'react'

export default function Formulario() {
  const [fruta, setFruta] = useState('')
  const [descripcion, setDescripcion] = useState('')
  const [lista, setLista] = useState([])

  const agregarDatos = (e) => {
    e.preventDefault()

    if (!fruta.trim()) {
      console.log('Esta vacio')
      return
    }

    if (!descripcion.trim()) {
      console.log('Escribe algo')
      return
    }

    setLista([...lista, { fruta: fruta, descripcion: descripcion }])

    e.target.reset()
    setFruta('')
    setDescripcion('')
  }

  return (
    <div>
      <h1>Formulario</h1>
      <form onSubmit={agregarDatos}>
        <input
          type="text"
          placeholder="Escribe una fruta"
          className="form-control mb-2"
          onChange={(e) => setFruta(e.target.value)}
        />
        <input
          type="text"
          placeholder="Escribe una fruta"
          className="form-control mb-2"
          onChange={(e) => setDescripcion(e.target.value)}
        />
        <button className="btn btn-primary btn-block mb-5" type="submit">
          Agregar fruta
        </button>
      </form>
      <ul>
        {lista.map((item, index) => {
          return (
            <li key={index}>
              {item.fruta} - {item.descripcion}
            </li>
          )
        })}
      </ul>
    </div>
  )
}
