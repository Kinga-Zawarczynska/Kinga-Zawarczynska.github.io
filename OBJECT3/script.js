class Person {
  constructor(name, surname, pesel) {
    this.name = name;
    this.surname = surname;
    this.pesel = pesel;
  }

  // get name(){
  //    this.pesel.replace(this.pesel.slice(1,8), "########"); 
  //   return pesel; 

   
    // var str = this.pesel.split('');
    // str.splice(2, 8, '########');
    // str = str.join('');
    // return str;
    
// }
}

class Student extends Person {
  constructor(name, surname, pesel, age, direction) {
    super(name, surname, pesel);
    this.role = "student";
    this.age = age;
    this.direction = direction;

  }

  displayFullInfo() {
    console.log(
      "Student: " + this.name + " age: " + this.age + "" + this.profile
    );
  }
}

class Teacher extends Person {
  constructor(name, surname, pesel, position) {
    super(name, surname, pesel);
    this.role = "teacher";
    this.position = position;
  }

  displayFullInfo() {
    console.log(
      "Teacher: " + this.name + " age: " + this.age + "" + this.profile
    );
  }
}





var checkS = document.getElementById('student');
var checkT = document.getElementById('nauczyciel');

let itsStudent = false;


function disable() {
  itsStudent = !itsStudent;
  console.log(itsStudent);
  let something;
  let something2;
  if (itsStudent) {
    something = `<input id="inputPosition" placeholder="Stanowisko" disabled />`;
    something2 = `<input id="inputAge" placeholder="Wiek"/> <input id="inputDirection" placeholder="Kierunek studiów" />`
  } else {
    something = `<input id="inputPosition" placeholder="Stanowisko" />`
    something2 = `<input id="inputAge" placeholder="Wiek" disabled/> <input id="inputDirection" placeholder="Kierunek studiów" disabled />`
  }
  var dis = document.querySelector('.not');
  var dis2 = document.querySelector('.notStudent');
  dis.innerHTML = something
  dis2.innerHTML = something2;
}
// function disableT() {
//   var dis = document.querySelector('.notDir');
//   dis.innerHTML = `<input id="inputDirection" placeholder="Kierunek studiów" disabled />`
//   var dis2 = document.querySelector('.notAge');
//   dis2.innerHTML = `<input id="inputAge" placeholder="Wiek" disabled/>`;
// }

checkS.addEventListener('click', disable);


var students = [


];
var teachers = [


];

var o_count = document.querySelector("#students");
var o_count2 = document.querySelector("#teachers");



function render(arrayToMap, elementToRender, groupOf) {
  console.log(students);
  var o_html = "";
  o_html = `<div class="naglowek"> ${groupOf} </div>`;



  arrayToMap.map(element => {
    if (itsStudent) {
      o_html += ` 
    <div class = "row"> 
  <div class="item"> ${element.name}</div> 
  <div class="item"> ${element.surname}</div>
  <div class="item"> ${element.age}</div>
  <div class="item"> ${element.pesel}</div>
  <div class="item"> ${element.direction}</div>
  <div class="item"> ${element.role}</div>
  
  
  </div>`;

    } else {
      o_html += ` 
      <div class = "row"> 
    <div class="item"> ${element.name}</div> 
    <div class="item"> ${element.surname}</div>
    <div class="item"> ${element.pesel}</div>
    <div class="item"> ${element.position}</div>
    <div class="item"> ${element.role}</div>
    
    
    </div>`;
  
    }


  });

  elementToRender.innerHTML = o_html;
}
// render(students, o_count, "Studenci");
// render(teachers, o_count2, "Nauczyciele");



const buttonS = document.getElementById("addButton");


function add() {
  
    const inputName = document.querySelector("#inputName");
    const inputSurname = document.querySelector("#inputSurname");
    const inputAge = document.querySelector("#inputAge");
    const inputPesel = document.querySelector("#inputPesel");
    const inputDirection = document.querySelector("#inputDirection");
    const inputPosition = document.querySelector("#inputPosition");
    if (itsStudent) {

    students.push(
      new Student(inputName.value, inputSurname.value, inputAge.value, inputPesel.value, inputDirection.value)
    );
    console.log(students)
    render(students, o_count, "Studenci");
  } else {
    teachers.push(
      new Teacher(inputName.value, inputSurname.value, inputPesel.value, inputPosition.value)
    );
    console.log(teachers)
    render(teachers, o_count2, "Nauczyciele");

  }

}


buttonS.addEventListener("click", add);

function deleteElement(index, arrayToSplice) {
    
  arrayToSplice.splice(index, 1);
 
}



// students.sort((a, b) => (a.name > b.name ? 1 : b.name > a.name ? -1 : 1));
// teachers.sort((a, b) => (a.name > b.name ? 1 : b.name > a.name ? -1 : 1));
