function displayCards(){
    let card="";

    for(let i=0;i<students.length;i++){
        let student=students[i];
        card+=`
        <div class='student'>
            <h4> Nombre: ${student.name}</h4>
            <p> Edad: ${student.age}</p>
            <p> Genero: ${student.genero}</p>
            <p> Email: ${student.email}</p>
            <p> Facultad: ${student.facultad}</p>
            <p> Password: ${student.password}</p>
            <p> Matematicas: ${student.materia1}</p>
            <p> Quimica: ${student.materia2}</p>
            <p> Fisica: ${student.materia3}</p>
            <button>Eliminar</button>
        
        </div>
        `;
    }
    document.getElementById("studentList").innerHTML=card;
}
function displayTable(){

}
