// aqui exportaras las funciones que necesites
// export const myFunction = () => {
//   // aqui tu codigo
// };

const login = document.getElementById('login');
const registroCuenta =document.getElementById('registroCuenta');
const segundaPantalla = document.getElementById('segundaPantalla');
const registro = document.getElementById('registro');
const error = document.getElementById('error');
const ingresar = document.getElementById('ingresar');
const publicaciones = document.getElementById('publicaciones');
const fondo = document.getElementById('fondo');
const mensaje = document.getElementById('mensaje');
const encabezado = document.getElementById('encabezado');
const publicar = document.getElementById('publicar');

// Almacenar datos 
let datos = [];

registroCuenta.addEventListener('click', () => {
  login.classList.add('hide');
  segundaPantalla.classList.remove('hide');
});

const validarCorreo = (correo) => {
    const correoCorrecto = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
    return correoCorrecto.test(correo);
};

registro.addEventListener('click', (e) => {
  e.preventDefault();
  const nombre = document.getElementById('nombre')
  const correo = document.getElementById('correo')
  const password = document.getElementById('password')

  if(validarCorreo(correo.value) && password.value.length >=8){
    datos.push({
      user: nombre.value,
      email: correo.value,
      nuevoPassword: password.value,
    });

    // LIMPIAR
    nombre.value='';
    correo.value='';
    password.value='';

    // Datos subidos
    console.log(datos);

    localStorage.setItem('datos', JSON.stringify(datos));
    alert('registrado correctamente');

    segundaPantalla.classList.add('hide');
    publicaciones.classList.add('hide');
    login.classList.remove('hide');

  } else {
    error.innerHTML='El correo no es válido'
    error.value='';
    }

});

  ingresar.addEventListener('click', ()=>{
    const correoIngreso = document.getElementById('correoIngreso').value;
    const passwordIngreso = document.getElementById('passwordIngreso').value;
    const datosLocal =JSON.parse(localStorage.getItem('datos'));

    for(let i = 0; i < localStorage.length; i++){
      if(datosLocal[i].email === correoIngreso && datosLocal[i].nuevoPassword === passwordIngreso){
        alert('Bienvenido');

        fondo.classList.add('hide');
        login.classList.add('hide');
        publicaciones.classList.remove('hide');
        encabezado.classList.remove('hide');
        publicar.classList.remove('hide');

        bienvenida.innerHTML = datosLocal[i].user;
        bienvenidaDos.innerHTML = datosLocal[i].user;
        bienvenidaCorreo.innerHTML = datosLocal[i].email;
      } else {
        mensaje.innerHTML= 'correo o contraseña incorrectos';
      }
    }
});


// PUBLICACIONES

// const name;
// const nombres = [];
// const name2;
// const userTR = document.getElementById('nameTR');
// const form = document.getElementById('form');

// form.addEventListener('click', (e)=>{
//   e.preventDefault();
// });













