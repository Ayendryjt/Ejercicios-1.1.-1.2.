const App = () => {
    const course = {
      nombre: 'Desarrollo de aplicaciones Half Stack',
      partes: [
        { nombre: 'Fundamentos de React', ejercicios: 10 },
        { nombre: 'Usar accesorios para pasar datos', ejercicios: 7 },
        { nombre: 'Estado de un componente', ejercicios: 14 },
      ]
    }
  
    const totalExercises = course.partes.reduce((sum, part) => sum + part.ejercicios, 0)
  
    return (
      <div>
        <h1>{course.nombre}</h1>
        {course.partes.map((part, index) => (
          <p key={index}>
            {part.nombre} {part.ejercicios}
          </p>
        ))}
        <p>Total de ejercicios: {totalExercises}</p>
      </div>
    )
  }
  
  export default App
  