class Classes {
  constructor({
    name,
  }){
    this.name = name;
  }
}

class Course {
  constructor({
    name,
    classes = [],
    coments = [],
  }){
    this.name = name;
    this.classes = classes;
    this.coments = coments;
  }
}

const cursoProgBasica = new Course({
  name: "Curso gratis de Programación Básica",
});
const cursoDefHTMLCSS = new Course({
  name: "Curso Definitivo de HTML & CSS",
});
const cursoPracticoHTMLCSS = new Course({
  name: "Curso práctico de HTML y CSS",
});
const cursoBI = new Course({
  name: "Intro a Data Business",
});
const cursoDataViz = new Course({
  name: "Curso de Data Viz",
});
const cursoC = new Course({
  name: "Intro a C++",
});
const cursoUnreal = new Course({
  name: "Curso de Unreal Engine",
});


class LearningPath {
  constructor({
    name,
    courses = [],
  }){
    this.name = name;
    this.courses = courses;
  }
};

const escuelaWeb = new LearningPath({
  name: "Escuela de desarollo web",
  courses: [
    cursoProgBasica,
    cursoDefHTMLCSS,
    cursoPracticoHTMLCSS,
  ]
});

const escuelaData = new LearningPath({
  name: "Escuela de dataScients",
  courses: [
    cursoProgBasica,
    cursoBI,
    cursoDataViz,
  ]
});

const escuelaVgs = new LearningPath({
  name: "Escuela de Video games",
  courses: [
    cursoProgBasica,
    cursoC,
    cursoUnreal
  ]
});

class Student{
  constructor({
      name,
      age,
      email,
      username,
      twitter = undefined, // asignandolo Undefinde decimos que es opcional
      instagram = undefined,
      facebook = undefined,
      approvedCourses = [],
      learningPaths = [],
    }) {
      this.name = name;
      this.age = age;
      this.email = email;
      this.username = username;
      this.socialMedia = {
        twitter,
        instagram,
        facebook,
      };
      this.approvedCourses = approvedCourses;
      this.learningPaths = learningPaths;
    }
};

const jorge = new Student({
    name: "Jorge",
    age: 30,
    email: "jorge@gmail.com",
    username: "Jorge90",
    twitter: "jorge9090",
});

const juan2 = new Student({
  name: "JuanDC",
  username: "juandc",
  email: "juanito@juanito.com",
  twitter: "fjuandc",
  learningPaths: [
    escuelaWeb,
    escuelaVgs,
  ],
});

const miguelito2 = new Student({
  name: "Miguelito",
  username: "migelitofeliz",
  email: "miguelito@juanito.com",
  instagram: "migelito_feliz",
  learningPaths: [
    escuelaWeb,
    escuelaData,
  ],
});