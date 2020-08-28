// import React, { useState } from 'react'
// import shortid from 'shortid'

// export default function Principal() {
//   const [tarea, setTarea] = useState('')
//   const [tareas, setTareas] = useState([])
//   const [modoEdicion, setModoEdicion] = useState(false)
//   const [id, setId] = useState('')

//   const agregarTarea = (e) => {
//     e.preventDefault()

//     if (!tarea.trim()) {
//       console.log('Esta vacio')
//       return
//     }
//     setTareas([...tareas, { id: shortid.generate(), tarea: tarea }])
//     setTarea('')
//   }

//   const elimitarTarea = (id) => {
//     const arrayFiltrado = tareas.filter((item) => item.id !== id)
//     setTareas(arrayFiltrado)
//   }

//   const editar = (item) => {
//     console.log(item)
//     setModoEdicion(true)
//     setTarea(item.tarea)
//     setId(item.id)
//   }

//   const editarTarea = (e) => {
//     e.preventDefault()
//     if (!tarea.trim()) {
//       console.log('Esta vacio')
//       return
//     }

//     const arrayEditado = tareas.map((item) => {
//       return item.id === id ? { id: id, tarea: tarea } : item
//     })

//     setTareas(arrayEditado)
//     setModoEdicion(false)
//     setTarea('')
//     setId('')
//   }

//   return (
//     <div className="container">
//       <h1 className="text-center">CRUD PRINCIPAL</h1>
//       <hr />
//       <div className="row">
//         <div className="col-8">
//           <h4 className="text-center">Lista de Tareas</h4>
//           <ul className="list-group">
//             {tareas.map((item) => {
//               return (
//                 <li key={item.id} className="list-group-item">
//                   <span className="lead">{item.tarea}</span>
//                   <button
//                     className="btn btn-danger btn-sm float-right mx-2"
//                     onClick={() => elimitarTarea(item.id)}
//                   >
//                     Eliminar
//                   </button>
//                   <button
//                     className="btn btn-warning btn-sm float-right"
//                     onClick={() => editar(item)}
//                   >
//                     Editar
//                   </button>
//                 </li>
//               )
//             })}
//           </ul>
//         </div>
//         <div className="col-4">
//           <h4 className="text-center">
//             {modoEdicion ? 'Editar tarea' : 'Agregar tarea'}
//           </h4>
//           <form onSubmit={modoEdicion ? editarTarea : agregarTarea}>
//             <input
//               type="text"
//               placeholder="Escribe una tarea"
//               className="form-control mb-2"
//               onChange={(e) => setTarea(e.target.value)}
//               value={tarea}
//             />
//             {modoEdicion ? (
//               <button className="btn btn-warning btn-block">Editar</button>
//             ) : (
//               <button className="btn btn-dark btn-block">Agregar</button>
//             )}
//           </form>
//         </div>
//       </div>
//     </div>
//   )
// }

import React, { useState } from 'react'
import shortid from 'shortid'

export default function Principal() {
  const [tarea, setTarea] = useState('')
  const [tareas, setTareas] = useState([])
  const [modoEdicion, setModoEdicion] = useState(false)
  const [id, setId] = useState('')

  const agregarTarea = (e) => {
    e.preventDefault()

    if (!tarea.trim()) {
      console.log('No hay tarea')
      return
    }

    setTareas([...tareas, { id: shortid.generate(), tarea: tarea }])
    setTarea('')
  }

  const eliminarTarea = (id) => {
    console.log(id)

    const tareasFiltradas = tareas.filter((item) => {
      return item.id !== id
    })
    setTareas(tareasFiltradas)
  }

  const editar = (item) => {
    console.log(item)
    setModoEdicion(true)
    setTarea(item.tarea)
    setId(item.id)
  }

  const editarTarea = (e) => {
    e.preventDefault()

    if (!tarea.trim()) {
      console.log('No hay tarea para editar')
      return
    }

    const arrayEditado = tareas.map((item) => {
      return item.id === id ? { id: id, tarea: tarea } : item
    })
    setTareas(arrayEditado)
    setModoEdicion(false)
    setTarea('')
    setId('')
  }

  return (
    <div className="container">
      <h1 className="text-center">CRUD PRINCIPAL</h1>
      <hr />
      <div className="row">
        <div className="col-8">
          <h4 className="text-center">Lista de tareas</h4>
          <ul className="list-group">
            {tareas.map((item) => {
              return (
                <li key={item.id} className="list-group-item">
                  <span className="lead">{item.tarea}</span>
                  <button
                    className="btn btn-danger btn-sm float-right mx-2 "
                    onClick={() => eliminarTarea(item.id)}
                  >
                    Eliminar tarea
                  </button>
                  <button
                    className="btn btn-warning btn-sm float-right"
                    onClick={() => editar(item)}
                  >
                    Editar tarea
                  </button>
                </li>
              )
            })}
          </ul>
        </div>
        <div className="col-4">
          <h4 className="text-center">
            {modoEdicion ? 'Editar tarea' : 'Agregar tarea'}
          </h4>
          <form onSubmit={modoEdicion ? editarTarea : agregarTarea}>
            <input
              type="text"
              placeholder="Escribe una tarea"
              className="form-control mb-2"
              onChange={(e) => setTarea(e.target.value)}
              value={tarea}
            />
            {modoEdicion ? (
              <button className="btn btn-warning btn-block">Editar</button>
            ) : (
              <button className="btn btn-dark btn-block">Agregar</button>
            )}
          </form>
        </div>
      </div>
    </div>
  )
}
