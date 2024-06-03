//variables
var studentName="Francisco";
let age=35;
const isStudent=false;

console.log(studentName);
console.log(age);
console.log(isStudent);

//arreglos
let students = ["Samantha","Francisco","Roberto","Fabiola","Sergio"];
console.log(students);

students.push("Fernanda", "Adrian"); //agrega items al final del arreglo
console.log(students);

//students.pop(); //elimina items partiendo del final del arreglo
students.splice(1,1); //elimina un item especifico, se seleccionan por posicion
console.log(students);

//objetos literales
let student1={
    name:"Samantha",
    age:99,
    isStudent:false
}
let student2={
    name:"Roberto",
    age:98,
    isStudent:false
}
console.log(student1,student2);

//objeto contructor
function Student(n,a,s){
    this.name=n;
    this.age=a;
    this.isStudent=s;
}

let student3=new Student("Fabiola",98,false);
let student4=new Student("Sergio",95,true);
console.log(student3,student4);

//function
function saludar(){
    alert("Bienvenido ");
}

function sumar(a,b){
    let total= a+b;
    return total;
}

/* function sumar(a,b){
    let total= a+b;
    for(let i=0;i<total;i++){
        var j=i;
    }
    console.log(j);
    return total;
} */

function calcularTaxes(ingresos,egresos){
    let subtotal = ingresos-egresos;
    let total = subtotal*.02;
    document.write(`
        <p class="container">Tus taxes son: $${total} <p>
    `);
}
calcularTaxes(sumar(100,200),sumar(10,8));