let students=[];

//constructor
function Student(nombre,edad,genero,email,facultad,password,materia1,materia2,materia3){
    this.nombre=nombre;
    this.edad=edad;
    this.genero=genero;
    this.email=email;
    this.facultad=facultad;
    this.password=password;
    this.materia1=materia1;    
    this.mteria2=materia2;
    this.mteria3=materia3;
}

//validación
function isValid(unAlumno){
    let validacion = true;

    if(unAlumno.nombre==""){
        validacion = false;
    }
    if(unAlumno.edad==""){
        validacion = false;
    }
    if(unAlumno.genero==""){
        validacion = false;
    }
    if(unAlumno.email==""){
        validacion = false;
    }
    if(unAlumno.facultad==""){
        validacion = false;
    }
    if(unAlumno.password==""){
        validacion = false;
    }
    if(unAlumno.materia1==""){
        validacion = false;
    }
    if(unAlumno.materia2==""){
        validacion = false;
    }
    if(unAlumno.materia3==""){
        validacion = false;
    }

    return validacion;
}
//registrar
function registrar(){
    let inputNombre = document.getElementById("txtNombre").value;
    let inputEdad = document.getElementById("txtEdad").value;
    let inputGenero = document.getElementById("txtGenero").value;
    let inputEmail = document.getElementById("txtEmail").value;
    let inputFacultad = document.getElementById("txtFacultad").value;
    let inputPassword = document.getElementById("txtPassword").value;
    let inputMateria1 = document.getElementById("numMateria1").value;
    let inputMateria2 = document.getElementById("numMateria2").value;
    let inputMateria3 = document.getElementById("numMateria3").value;
    let nuevoAlumno = new Student(inputNombre,inputEdad,inputGenero,inputEmail,inputFacultad,inputPassword,inputMateria1,inputMateria2,inputMateria3); 
    
    if(isValid(nuevoAlumno)==true){
        students.push(nuevoAlumno);
        /* console.log(students); */
        displayCards();
        alert("Informacion Registrada");
        //limpiarCampos();
    }else{
        alert("Por favor completa los campos");
    } 
}

function init(){
    let student1 = new Student("Samuel",99,"Masculino","samuel@gmail.com","Ingenieria","123456",90,85,100);
    students.push(student1);
    displayCards();
}

window.onload=init;// espera a renderizar el HTML