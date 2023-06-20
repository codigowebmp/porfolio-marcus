// Inicializa ScrollReveal.js
ScrollReveal().reveal('.titulo-seccion', {
    origin: 'left', // Establece el origen de la animación
    distance: '200px', // Establece la distancia del desplazamiento
    duration: 2000, // Establece la duración de la animación en milisegundos
    easing: 'ease', // Establece la función de interpolación de la animación
    reset: true, // Restablece la animación en cada desplazamiento
    viewFactor: 0.3 // Define la proporción de elemento visible antes de activar la animación
});

function mostrar(elem){
    //oculto todos los detalles
    detalles = document.getElementsByClassName("detalle");
    for(i=0; i < detalles.length; i++){
        detalles[i].style.display = "none";
    }

    links = document.querySelectorAll(".habilidades .menu li");
    for(i=0; i < detalles.length; i++){
        links[i].classList = "";
    }

    //visualizo el que corresponde en base al id
    id_skill = "info" + elem.id;
    document.getElementById(id_skill).style.display = "block";
    document.getElementById(elem.id).classList = "selected";
}

const testimonios = [
    {
        foto:"cliente1.png",
        titulo:"Excelente trabajo!!",
        texto:"Voluptatibus quasi autem voluptatum exercitationem, hic esse temporibus vel minima sint natus debitis veritatis accusantium? Ab atque quas sint sapiente itaque totam?",
        nombre:"Mark S.",
        puesto:"San CEO and WP Dev",
    },
    {
        foto:"cliente2.png",
        titulo:"Cumpliendo siempre a tiempo.",
        texto:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quasi autem voluptatum exercitationem, hic esse temporibus",
        nombre:"Ana J.",
        puesto:"Web Designer",
    },
    {
        foto:"cliente3.png",
        titulo:"Trabajos de excelente calidad",
        texto:"hic esse temporibus vel minima sint natus debitis veritatis accusantium? Ab atque quas sint sapiente itaque totam.",
        nombre:"Pedro S.",
        puesto:"CEO, Web Developer",
    },
    {
        foto:"cliente4.png",
        titulo:"Calidad garantizada",
        texto:"hic esse temporibus vel minima sint natus debitis veritatis accusantium? Ab atque quas sint sapiente itaque totam.",
        nombre:"Marta T.",
        puesto:"Fotografa",
    }
]

//Variable que controla la ubicación del testimonio actual.
var pos = 0;
//Función para avaznar al siguiente testimonio
function siguiente(){
    pos++;
    document.getElementById("imgCliente").src = "img/" + testimonios[pos].foto;
    document.getElementById("tituloCliente").innerText =testimonios[pos].titulo;
    document.getElementById("txtCliente").innerText = testimonios[pos].texto;
    document.getElementById("nombreCliente").innerText = testimonios[pos].nombre;
    document.getElementById("puestoCliente").innerText = testimonios[pos].puesto;

    if(pos==3){
        pos= -1;
    }
}
//Función para cerrar el menu
function cerrar(){
    document.getElementsByClassName("nav-menu")[0].style.top ="-100%";
}
//Función para abrir el menu
function verMenu(){
    document.getElementsByClassName("nav-menu")[0].style.top ="0";
}