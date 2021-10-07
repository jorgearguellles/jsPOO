// Primer objeto literal -> const natalia = {...};
const natalia = {
  name: "Natalia",
  age: 20,
  cursosAprobados: [
    "Curso definitivo de HTML y CSS",
    "Curso de POO"
  ],
  //Para crar métodos en POO teemos dos obciones...
  //1 obción:
  // aprobarCurso: function(){

  // },
  //2 obción:
  aprobarCurso1(nuevoCurso){
    this.cursosAprobados.push(nuevoCurso);
  },

};

// Natalia apruebe otro curso
// console.log("Antes:",natalia);
// natalia.cursosAprobados.push("Curso de Responsive Design");
// console.log(natalia);
// natalia.aprobarCurso1("Curso de Frontend Developer");
// console.log("Despues:",natalia);

// Nuestro Primer Prototipo -> 

function student(name, age, cursosAprobados1){
  this.name = name,
  this.age = age,
  this.cursosAprobados1  = cursosAprobados1,

}


