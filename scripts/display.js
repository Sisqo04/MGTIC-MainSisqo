function displayCards(){
    let card="";

    for(let i=0;i<students.length;i++){
        let student=students[i];
        card+=`
        <div class='student'>
            <h4> Nombre: ${student.name}</h4>
            <p> Edad: ${student.age}</p>
            <button>Eliminar</button>
        
        </div>
        `;
    }
    document.getElementById("studentList").innerHTML=card;
}