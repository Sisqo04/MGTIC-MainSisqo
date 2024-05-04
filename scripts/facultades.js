//constructor
function facultades(name,campus){
    this.name=name;
    this.campus=campus;
}

//validacion

//register
function register(){
    let inputName = document.getElementById("txtFacultad").value;
    let inputCampus = document.getElementById("txtCampus").value;

    let nuevaFacultad = new facultades(inputName,inputCampus);
    console.log(nuevaFacultad);
}