function videoPlay(id){
  const urlSecreta = "htps://platzi.com/ultra-secreta/" + id;
  console.log("Se esta reproduciendo el video desde la Url: " + urlSecreta)
}

function videoStop(id){
  const urlSecreta = "htps://platzi.com/ultra-secreta/" + id;
  console.log("Se pauso el video desde la Url: " + urlSecreta)
}

class PlatziClass {
  constructor({
    name,
    videoID,
  }){
    this.name = name;
    this.videoID = videoID;
  }

  reproducir(){
    videoPlay(this.videoID);
  }
  pausar(){
    videoStop(this.videoID);
  }
}

class Course {
  constructor({
    name,
    classes = [],
    coments = [],
    isFree = false,
    lang = "spanish"
  }){
    this._name = name; // Le pedimos a los demás que no llamen a este atributo desde afuera de la clase e instancias
    this.classes = classes;
    this.coments = coments;
    this.isFree = isFree;
    this.lang = lang;

  }

  get name(){
    return this._name;
  }

  set name(nuevoNombre){
    if(nuevoNombre === "Curso Malito de Prog Básica"){
      console.error("Web... no")
    } else {
      this._name = nuevoNombre;
    }
  }
}


const cursoProgBasica = new Course({
  name: "Curso gratis de Programación Básica",
  isFree: "true",
  lang: "spanish",
});
const cursoDefHTMLCSS = new Course({
  name: "Curso Definitivo de HTML & CSS",
});
const cursoPracticoHTMLCSS = new Course({
  name: "Curso práctico de HTML y CSS",
  lang: "english",
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

class FreeStudent extends Student {
  constructor(props){
    super(props)
  }

  approvedCourse(newCourse){
    if(newCourse.isFree){
      this.approvedCourses.push(newCourse);
    } else {
      console.warn("Lo sentimos " + this.name + ", solo puedes tomar cursos abiertos");
    }
  }
}

class BasicStudent extends Student {
  constructor(props){
    super(props)
  }

  approvedCourse(newCourse){
    if(newCourse.lang !== "english"){
      this.approvedCourses.push(newCourse);
    } else {
      console.warn("Lo sentimos " + this.name + ", no puedes tomar cursos en ingles");
    }
  }
}

class ExpertStudent extends Student {
  constructor(props){
    super(props)
  }

  approvedCourse(newCourse){
    this.approvedCourses.push(newCourse);
  }
}

const jorge1 = new FreeStudent({
    name: "Jorge",
    age: 30,
    email: "jorge@gmail.com",
    username: "Jorge90",
    twitter: "jorge9090",
});

const juan1 = new BasicStudent({
  name: "JuanDC",
  username: "juandc",
  email: "juanito@juanito.com",
  twitter: "fjuandc",
  learningPaths: [
    escuelaWeb,
    escuelaVgs,
  ],
});

const miguelito1 = new ExpertStudent({
  name: "Miguelito",
  username: "migelitofeliz",
  email: "miguelito@juanito.com",
  instagram: "migelito_feliz",
  learningPaths: [
    escuelaWeb,
    escuelaData,
  ],
});