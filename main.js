/* ==========================================================================
 * Clase: Objetos literales vs Prototipos en JS
 * ==========================================================================
 */ 

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

function Student(name, age, cursosAprobados1){
  this.name = name,
  this.age = age,
  this.cursosAprobados1  = cursosAprobados1
  // Obción uno para crear métodos al interior de los prototipos:
  // this.aprobarCurso2 = function(nuevoCurso){
  //   this.cursosAprobados1.push(nuevoCurso);
  // }
  // Obción dos para crear métodos al interior de los prototipos: Por fuera de la función...
};

Student.prototype.cursosAprobados2 = function(nuevoCurso){
  this.cursosAprobados1.push(nuevoCurso);
};

// Creemos una instacia de nuestro primer portotipo

const juanita = new Student(
  "Juanita Alejandra",
  15,
  ["Curso Introducción a los Video juegos", "Curso de Creación de personaje"],
);


/* ==========================================================================
 * Clase: Clases en JS - Prototipos con la sintaxis de clase
 * ==========================================================================
 */


class Student2{

  constructor(name, age, cursosAprobados1){
    this.name2 = name,
    this.age2 = age,
    this.cursosAprobados2  = cursosAprobados1
  }

  aprobarCurso2(curso2){
    this.cursosAprobados2.push(curso2);
  }
}

const miguelito = new Student2(
  "Miguel",
  28,
  [
    "Curso de analisis de negocios para ciencia de datos",
    "Principio de Data Viz para Businees admin"
  ]
)

console.log(miguelito);
miguelito.aprobarCurso2("Curso de cocina");
console.log(miguelito);
