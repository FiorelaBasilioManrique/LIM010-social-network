// aqui exportaras las funciones que necesites
// export const myFunction = () => {
//   // aqui tu codigo
// };
const login = document.getElementById('login');
const segundaPantalla = document.getElementById('segundaPantalla');
const registroCuenta = document.getElementById('registroCuenta');
const error = document.getElementById('error');
const registrar = document.getElementById('registrar');
const publicacion = document.getElementById('publicacion');
const registro = document.getElementById('registro');

// Dirigirse a la ventana registrarse
registroCuenta.addEventListener('click', ()=>{
    login.classList.add('hide');
    segundaPantalla.classList.remove('hide');
});

// Validar correo
const validarCorreo = (correo) => {
    const correoCorrecto = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
    return correoCorrecto.test(correo);
}

// Comenzando con el registro
registro.addEventListener('click', ()=>{
    const nombre = document.getElementById('nombre').value;
    const correo = document.getElementById('correo').value;
    const password = document.getElementById('password').value;
  
    if(validarCorreo(correo.value) && password.value.length <=5 || password.length >= 10){
  
      localStorage.setItem('nombre', nombre);
      localStorage.setItem('correo', correo);
      localStorage.setItem('password', password);
  
      alert('El correo es correcto'); 
  
  
    } else {
     alert('error correo no valido');
     
    }
  
  
    // if(password.length <= 5 || password.length >= 10){
    //   error.innerHTML=('error la contraseña debe tene 6 y 10 caracteres');
  
    // }
    // if(nombre === ''){
    //   error.innerHTML='Completa el nombre';
    // }
  });
  
  const ingresar = document.getElementById('ingresar');
  
  ingresar.addEventListener('click', ()=>{
    const correo = document.getElementById('correo').value;
    const password = document.getElementById('password').value;
    alert('bienvenidas');
  });