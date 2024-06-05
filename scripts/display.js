function displayCards() {
  $.ajax({
    url: "./app/get_students.php",
    method: "GET",
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
}

function displayTable() {}

function deleteStudent(id_student) {
  $.ajax({
    url: "./app/delete_student.php",
    method: "POST",
    data: { id: id_student },
    success: function (response) {
      console.log(response);
      displayCards();
    },
    error: function (error) {
      console.error(error);
    },
  });
}
