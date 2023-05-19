let persona = {
  nombre: "Pedro Perez",
  edad: 30,
  activo: true,
  hobbies: ["programar", "squash", "piano"]
  
}


console.log(persona.edad)

persona["estatura"]= 1.8



delete persona.activo;

console.log(persona);


for (let llave in persona) {
  if (persona.hasOwnProperty(llave)) {
    console.log(llave +  " " +persona[llave])
  }
}

//Agrégale al objeto una función llamada saluda que retorne la frase “Hola, me llamo ” seguido del nombre de la persona.
persona ["saluda"] = function(){
    return "Hola, me llamo  " +  this.nombre;
};


console.log(persona.saluda())