
    
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
    { imagen:"https://cuyomotor.com.ar/wp-content/uploads/2025/01/chevrolet-corsa-1473562.jpg " ,nombre:"Corsa",año:2008,valor:120000,cantidad:5,docecuotas:10000,seiscuotas:20000,trescuotas:40000},
    { imagen:"https://http2.mlstatic.com/D_NQ_NP_958344-MLA80072527648_102024-B.webp",nombre: "Montana",año:2024,valor:240000,cantidad:20,docecuotas:20000,seiscuotas:40000,trescuotas:80000 },
    { imagen:"https://www.chevrolet.com.ar/content/dam/chevrolet/sa/argentina/espanol/index/cars/2020-onix-premier/colorizer/02-images/red-e-or-not-red-met5.jpg?imwidth=960",nombre: "Onix",año:2023,valor:600000,cantidad:8,docecuotas:50000,seiscuotas:10000,trescuotas:200000 },
    {imagen:"https://www.chevroletforestcar.com.ar/content/dam/chevrolet/sa/ar/es/master/home/crossovers-and-suvs/tracker/plan-ahorro/oferta-tracker-turbo-tracker-rs-mob.jpg?imwidth=1920", nombre: "Tracker",año:2024,valor:360000,cantidad:12,docecuotas:30000,seiscuotas:60000,trescuotas:120000 }
];

function mostrarlistadeautos() {
    const itemsdelalista = document.getElementById('itemsdelalista');

    Autos.forEach(Autos => {
        const datosdelalista = document.createElement('li');
        datosdelalista.innerHTML = `
            <img src="${Autos.imagen}" alt="${Autos.nombre}" class="card"> 

            ${Autos.nombre} (${Autos.año}) - Cantidad: ${Autos.cantidad} - Valor: $${Autos.valor} - 
            12 cuotas: $${Autos.docecuotas} - 6 cuotas: $${Autos.seiscuotas} - 3 cuotas: $${Autos.trescuotas}
        `;
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

const obtenerVehiculos = async () => {
    const url = 'vehiculos.json';

    try {
        const respuesta = await fetch(url);
        if (!respuesta.ok) {
            throw new Error('Error en la respuesta del archivo JSON'); 
        }
        const datos = await respuesta.json(); 
        mostrarVehiculos(datos); 
    } catch (error) {
        console.error('Hubo un problema con la solicitud Fetch:', error);
        document.getElementById('resultado').textContent = 'Error al cargar los datos';
    }
};


const mostrarVehiculos = (datos) => {
    const resultado = document.getElementById('resultado');
    resultado.innerHTML = ''; 

    datos.forEach(vehiculo => {
        const card = document.createElement('div'); 
        card.className = 'card'; 

        
        card.innerHTML = `
            <img src="${vehiculo.imagen}" alt="${vehiculo.nombre}" class="card-image"> <!-- Imagen del vehículo -->
            <h2>${vehiculo.nombre}</h2>
            <p>Año: ${vehiculo.año}</p>
            <p>Valor: $${vehiculo.valor}</p>
            <p>Cantidad: ${vehiculo.cantidad}</p>
        `;

        resultado.appendChild(card); 
    });
};

document.getElementById('cargarDatos').addEventListener('click', obtenerVehiculos);