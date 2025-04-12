
    
 const inputusuario = document.querySelector("#inputusuario") 
 const inputpassword = document.querySelector("#inputpassword")
 const boton2 = document.getElementById("Guardar")

 function guardarusuario(){

    const datosdellogin ={
        usuario: inputusuario.value,
        password : inputpassword.value
    }
    let convertir2 =JSON.stringify(datosdellogin)
localStorage.setItem("usuario",convertir2)
console.log (convertir2)
console.log (datosdellogin)
 }
 boton2.addEventListener("click",guardarusuario)
 boton2.addEventListener("click",mostrarMensajeConfirmacion)
const Autos = [
    { nombre:"Corsa",año:2008,valor:120000,cantidad:5,docecuotas:10000,seiscuotas:20000,trescuotas:40000},
    { nombre: "Montana",año:2024,valor:240000,cantidad:20,docecuotas:20000,seiscuotas:40000,trescuotas:80000 },
    { nombre: "Onix",año:2023,valor:600000,cantidad:8,docecuotas:50000,seiscuotas:10000,trescuotas:200000 },
    { nombre: "Tracker",año:2024,valor:360000,cantidad:12,docecuotas:30000,seiscuotas:60000,trescuotas:120000 }
];

function mostrarlistadeautos() {
    const itemsdelalista = document.getElementById('itemsdelalista');

    Autos.forEach(Autos => {
        const datosdelalista = document.createElement('li');
        datosdelalista.textContent = `${Autos.nombre} (${Autos.año}) - Cantidad: ${Autos.cantidad} - Valor: $${Autos.valor} - 12cuotas: $${Autos.docecuotas} - 6cuotas: $${Autos.seiscuotas} - 3cuotas $${Autos.trescuotas}`
        itemsdelalista.appendChild(datosdelalista);
    });

    const listadeautos = document.getElementById('listadeautos');
    listadeautos.style.display = 'block';
}

const mostrarlistaButton = document.getElementById('mostarlistaButton');
mostrarlistaButton.addEventListener('click',mostrarlistadeautos);

const  inputNombre = document.querySelector("#inputname")
const  inputApellido = document.querySelector("#inputapellido")
const  inputMetododepago = document.querySelector("#inputmetododepago")
const  inputAuto = document.querySelector("#inputnameauto")
const  inputCuota= document.querySelector("#inputvalordecuota")
const  inputEmail = document.querySelector("#inputemail")
const boton = document.getElementById("traer")

function guardarDatos(){

    const datosdelformulario ={
        nombre: inputNombre.value,
        apellido: inputApellido.value,
        metodo :inputMetododepago.value,
        auto: inputAuto.value,
        valor : inputCuota.value,
        email: inputEmail.value,
    }
    let convertir =JSON.stringify(datosdelformulario)
localStorage.setItem("datos",convertir)
console.log (convertir)
console.log (datosdelformulario)
}

function mostrarMensajeConfirmacion() {
    swal("¡Recibido!", "Gracias por enviar el formulario.", "success");
}
boton.addEventListener("click",guardarDatos)
boton.addEventListener("click",mostrarMensajeConfirmacion)