let studentsListData = [];

//constructor
function Student(
  nombre,
  edad,
  genero,
  email,
  facultad,
  password,
  materia1,
  materia2,
  materia3
) {
  this.nombre = nombre;
  this.edad = edad;
  this.genero = genero;
  this.email = email;
  this.facultad = facultad;
  this.password = password;
  this.materia1 = materia1;
  this.materia2 = materia2;
  this.materia3 = materia3;
}

//validación
function isValid(unAlumno) {
  let validacion = true;

  if (unAlumno.nombre == "") {
    validacion = false;
  }
  if (unAlumno.edad == "") {
    validacion = false;
  }
  if (unAlumno.genero == "") {
    validacion = false;
  }
  if (unAlumno.email == "") {
    validacion = false;
  }
  if (unAlumno.facultad == "") {
    validacion = false;
  }
  if (unAlumno.password == "") {
    validacion = false;
  }
  if (unAlumno.materia1 == "") {
    validacion = false;
  }
  if (unAlumno.materia2 == "") {
    validacion = false;
  }
  if (unAlumno.materia3 == "") {
    validacion = false;
  }

  return validacion;
}
//registrar
function registrar() {
  let inputNombre = document.getElementById("txtNombre").value;
  let inputEdad = document.getElementById("txtEdad").value;
  let inputGenero = document.getElementById("txtGenero").value;
  let inputEmail = document.getElementById("txtEmail").value;
  let inputFacultad = document.getElementById("txtFacultad").value;
  let inputPassword = document.getElementById("txtPassword").value;
  let inputMateria1 = document.getElementById("numMateria1").value;
  let inputMateria2 = document.getElementById("numMateria2").value;
  let inputMateria3 = document.getElementById("numMateria3").value;
  let nuevoAlumno = new Student(
    inputNombre,
    inputEdad,
    inputGenero,
    inputEmail,
    inputFacultad,
    inputPassword,
    inputMateria1,
    inputMateria2,
    inputMateria3
  );

  if (isValid(nuevoAlumno) == true) {
    studentsListData.push(nuevoAlumno);
    /* console.log(students); */
    insertToDataBase(nuevoAlumno);
    displayCards();
    alert("Informacion Registrada");
    //limpiarCampos();
  } else {
    alert("Por favor completa los campos");
  }
}

function resetForm() {
  document.getElementById("txtNombre").value = "";
  document.getElementById("txtEdad").value = "";
  document.getElementById("txtGenero").value = "";
  document.getElementById("txtEmail").value = "";
  document.getElementById("txtFacultad").value = "";
  document.getElementById("txtPassword").value = "";
  document.getElementById("numMateria1").value = "";
  document.getElementById("numMateria2").value = "";
  document.getElementById("numMateria3").value = "";
}

function insertToDataBase(newStudent) {
  const formData = new FormData();
  formData.append("nombre", newStudent.nombre);
  formData.append("edad", newStudent.edad);
  formData.append("genero", newStudent.genero);
  formData.append("email", newStudent.email);
  formData.append("facultad", newStudent.facultad);
  formData.append("password", newStudent.password);
  formData.append("materia1", newStudent.materia1);
  formData.append("materia2", newStudent.materia2);
  formData.append("materia3", newStudent.materia3);

  $.ajax({
    url: "./app/register.php",
    method: "POST",
    data: formData,
    contentType: false,
    processData: false,
    success: function (response) {
      resetForm();
      displayCards();
    },
    error: function (error) {
      console.error(error);
    },
  });
}

// espera a renderizar el HTML
$(document).ready(function () {
  displayCards();

  const searchInput = $("#search");

  searchInput.on("input", () => {
    const searchQuery = searchInput.val().toLowerCase();
    $.ajax({
      url: "./app/search_students.php",
      method: "POST",
      data: { nombre: searchQuery },
      success: function ({ data: students }) {
        let card = "";

        if (students) {
          studentsListData = students;

          for (let i = 0; i < students.length; i++) {
            let student = students[i];
            card += `
              <div class='student' id='${student.id}_card'>
                  <h4> Nombre: ${student.nombre}</h4>
                  <p> Edad: ${student.edad}</p>
                  <p> Genero: ${student.genero}</p>
                  <p> Email: ${student.email}</p>
                  <p> Facultad: ${student.facultad}</p>
                  <p> Password: ${student.password}</p>
                  <p> Matematicas: ${student.mat1}</p>
                  <p> Quimica: ${student.mat2}</p>
                  <p> Fisica: ${student.mat3}</p>
                  <button class="form-button" onclick="deleteStudent(${student.id})">Eliminar</button>
              </div>
              `;
          }
        } else {
          card += `No hay estudiantes registrados`;
        }

        $("#total-students").text(
          `${studentsListData.length} estudiantes registrados`
        );
        document.getElementById("studentList").innerHTML = card;
      },
      error: function (error) {
        console.error(error);
      },
    });
  });
});
