import React, { useState } from 'react'
import shortid from 'shortid'

export default function Principal() {
  const [tarea, setTarea] = useState('')
  const [tareas, setTareas] = useState([])

  const agregarTarea = (e) => {
    e.preventDefault()

    if (!tarea.trim()) {
      console.log('Esta vacio')
      return
    }
    console.log(`se agrego la tarea ${tarea}`)

    setTareas([...tareas, { id: shortid.generate(), tarea: tarea }])

    setTarea('')
  }

  return (
    <div className="container">
      <h1 className="text-center">CRUD PRINCIPAL</h1>
      <hr />
      <div className="row">
        <div className="col-8">
          <h4 className="text-center">Lista de Tareas</h4>
          <ul className="list-group">
            {tareas.map((item) => {
              return (
                <li key={item.id} className="list-group-item">
                  <span className="lead">{item.tarea}</span>
                  <button className="btn btn-danger btn-sm float-right mx-2">
                    Eliminar
                  </button>
                  <button className="btn btn-warning btn-sm float-right">
                    Editar
                  </button>
                </li>
              )
            })}
          </ul>
        </div>
        <div className="col-4">
          <h4 className="text-center">Formulario</h4>
          <form onSubmit={agregarTarea}>
            <input
              type="text"
              placeholder="Escribe una tarea"
              className="form-control mb-2"
              onChange={(e) => setTarea(e.target.value)}
              value={tarea}
            />
            <button className="btn btn-dark btn-block">Agregar</button>
          </form>
        </div>
      </div>
    </div>
  )
}
