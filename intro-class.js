// ==========================================================================
// Primer objeto literal -> const natalia = {Atributos, Métodos};
const natalia = {
  name: "Natalia",
  age: 20,
  cursosAprobados: [
    "Curso definitivo de HTML y CSS",
    "Curso de POO"
  ],
  // Métodos...
  cumplirAños: function(){
    this.age += 1;
  }, 
  aprobarCurso(nuevoCurso){
    this.cursosAprobados.push(nuevoCurso);
  },

};

// ==========================================================================
// Nuestro Primer Prototipo basado en sintaxis de funciones 
function Student(name, age, cursosAprobados){
  // Atributos
  this.name = name,
  this.age = age,
  this.cursosAprobados  = cursosAprobados
  // Métodos por dentro de la clase
  this.cumplirAños1 = function(nuevoCurso){
    this.age += 1;
  }
};
// Métodos por fuera de la clase Student: Así ancalmos el método al objeto __proto__
Student.prototype.cursosAprobados = function(nuevoCurso){
  this.cursosAprobados.push(nuevoCurso);
};

// ==========================================================================
// Creemos una instacia de nuestro primer portotipo
const juanita = new Student(
  "Juanita Alejandra",
  15,
  ["Curso Introducción a los Video juegos", "Curso de Creación de personaje"],
);


// ==========================================================================
// Prototipo basado en sintaxis de Clase
/*
 * Las clases visualmente es una sintaxis parecida a otros lenguajes de programación, por dentro son prototipos.
 */
class Student2{
  // Cuando pasamos un objeto con los atributos nos permite mandarcelos en desorden al momento de crear la instancia.
  constructor(
    {
      name = "Tu nombre aquí :)", 
      email,
      age, 
      cursosAprobados = []
    }
  ){
    this.name = name,
    this.email = email,
    this.age = age,
    this.cursosAprobados  = cursosAprobados
  }
  aprobarCurso(curso){
    this.cursosAprobados.push(curso);
  }
}

const miguelito = new Student2(
  {
    email: "miguel@platxi.com",
    name: "Miguel",
    age: 28,
  }
)
