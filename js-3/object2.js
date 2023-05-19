let persona = {
    nombre: "Bivi Anne",
    edad: 90,
    Ciudad: "Tunja",
    Profesion: "Estudiante"
  }

  console.log(persona);

  function presentacion(persona){
    return "Hola, mí nombre es " + persona.nombre + persona.edad + persona.ciudad;
  }

  console.log(presentacion)

  let mensaje = presentacion(persona);  
  console.log(mensaje);

  // Agregar nueva propiedad "hobbies" al objeto "persona"
  persona.hobbies=["pintar", "conducir", "Tocar piano, aprender otros idiomas"]

  console.log(persona.hobbies);

  // Utilizar un ciclo for para imprimir cada elemento del arreglo de hobbies
for (var i = 0; i < persona.hobbies.length; i++) {
  console.log(persona.hobbies[i]);
}