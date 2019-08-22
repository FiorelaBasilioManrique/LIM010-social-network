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
    error.innerHTML = 'correo no son validos';
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

        bienvenida.innerHTML = datosLocal[i].user;
        bienvenidaCorreo.innerHTML = datosLocal[i].email;
      } else {
        alert('correo o contraseña incorrectos');
      }
    }
});


























// const login = document.getElementById('login');
// const segundaPantalla = document.getElementById('segundaPantalla');
// const registroCuenta = document.getElementById('registroCuenta');
// const error = document.getElementById('error');
// const registrar = document.getElementById('registrar');
// const publicacion = document.getElementById('publicacion');
// const registro = document.getElementById('registro');


// // Almacendo datos
// let datos = [];

// // Dirigirse a la ventana registrarse
// registroCuenta.addEventListener('click', ()=>{
//     login.classList.add('hide');
//     segundaPantalla.classList.remove('hide');
// });

// // Validar correo
// // const correoCorrecto = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
// const validarCorreo = (correo) => {
//     const correoCorrecto = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
//     return correoCorrecto.test(correo);
// }

// // Comenzando con el registro
// registro.addEventListener('click', (e)=>{
//   e.preventDefault();
//     const nombre = document.getElementById('nombre').value;
//     const correo = document.getElementById('correo').value;
//     const password = document.getElementById('password').value;

//     // if(nombre === '' || correo === '' || password === '' ){
//     //   alert('Todos los campos son obligatorios');
//     //   return false;
//     // } else if (!correoCorrecto.test(correo)) {
//     //   alert('El correo no es valido')
//     //   return false;
//     // } else if (nombre.length >20 || password.length >=8) {
//     //   alert('El correo es correcto'); 
//     //   return false;
//     // }

//     if(validarCorreo(correo.value) && password.value.length >=8){

//       datos.push({
//         user: nombre.value,
//         email: correo.value,
//         nuevoPassword: password.value,
//       });

//       // Limpiar

//       nombre = '';
//       correo= '';
//       password= '';

//       console.log(datos);
      
//       localStorage.setItem('datos', JSON.stringify(datos));
      
//       alert('El correo es correcto'); 

//       segundaPantalla.classList.add('hide');
//       login.classList.add('hide');

//       // localStorage.setItem('nombre', nombre);
//       // localStorage.setItem('correo', correo);
//       // localStorage.setItem('password', password);
  
//     } else {
//      error.innerHTML='error correo no valido';
     
//     }
  
  
//     // if(password.length <= 5 || password.length >= 10){
//     //   error.innerHTML=('error la contraseña debe tene 6 y 10 caracteres');
  
//     // }
//     // if(nombre === ''){
//     //   error.innerHTML='Completa el nombre';
//     // }
//   });
  
//   const ingresar = document.getElementById('ingresar');
  
//   ingresar.addEventListener('click', ()=>{
//     const correo = document.getElementById('correo').value;
//     const password = document.getElementById('password').value;
  
//     alert('bienvenidas');
//   });