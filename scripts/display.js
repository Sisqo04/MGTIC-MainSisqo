function displayCards(){
    let card="";

    for(let i=0;i<students.length;i++){
        let student=students[i];
        card+=`
        <div class='student'>
            <h4> Nombre: ${student.name}</h4>
            <p> Edad: ${student.age}</p>
            <p> Genero: ${student.genero}</p>
            <p> Facultad: ${student.facultad}</p>
            <p> Email: ${student.email}</p>
            <p> Matematicas: ${student.matematicas}</p>
            <p> Quimica: ${student.quimica}</p>
            <button>Eliminar</button>
        
        </div>
        `;
    }
    document.getElementById("studentList").innerHTML=card;
}