function validarNombre(nombre) {
    if (nombre.length === 0) { return 'Este campo debe tener al menos 1 caracter'; }
    if (nombre.length >= 50) { return 'Este campo debe tener menos de 50 caracteres'; }

    if (!/^[a-z]+$/i.test(nombre)) { return 'El campo nombre solo acepta letras' }
    return ''
}

function validarCiudad(ciudad) {
    if (ciudad.length === 0) { return 'El campo ciudad no puede estar vacío' }
    return '';
}

function validarDescripcionRegalo(descripcionRegalo) {
    if (descripcionRegalo.length >= 100) { return 'El campo descripcion es muy largo' }
    if (descripcionRegalo.length === 0) { return 'El campo descripcion no puede estar vacío' }
    if (!/^[a-z0-9]+$/i.test(descripcionRegalo)) { return 'El campo descripcion solo puede tener numeros y letras' }
    return '';
}

function validarFormulario(e) {
    const $form = document.querySelector('#carta-a-santa');

    const nombre = $form.nombre.value;
    const ciudad = $form.ciudad.value;
    const descripcionRegalo = $form['descripcion-regalo'].value;

    const errorNombre = validarNombre(nombre);
    const errorCiudad = validarCiudad(ciudad);
    const errorDescripcionRegalo = validarDescripcionRegalo(descripcionRegalo);

    const errores = {
        nombre: errorNombre,
        ciudad: errorCiudad,
        // regalo: errorDescripcionRegalo
        'descripcion-regalo': errorDescripcionRegalo
    };

    const exito = manejarErrores(errores) === 0;
    if (exito) {
        document.querySelector('#exito').className='';
        $form.className = 'oculto';
        setTimeout(()=>{
            window.location.assign("file:///C:/Users/Emanuel/Documents/GitHub/js-xmas-edition/wishlist.html"); // 
        }, 5000);
    }
    
    e.preventDefault();
}

function manejarErrores(errores) {
    const keys = Object.keys(errores);
    const $errores = document.querySelector('#errores');

    let cantitadadErrores= 0;
    keys.forEach(key => {
        const error = errores[key];
        if (error) {
            cantitadadErrores++;
            $form[key].className = 'error'
            const $error = document.createElement('li');
            $error.innerText = error;
            $errores.appendChild($error);
        } else{
            // TICKET: borrar campo adecuado
            $form[key].className = ''
        }
    });
    // Elimina mensajes de error
    setTimeout(() => {
        while ($errores.hasChildNodes()) {
            $errores.removeChild($errores.firstChild);
        }
    }, 3000);
    // errorNombre = errores.nombre;
    // errorCiudad = errores.ciudad;
    // errorDescripcionRegalo = errores.regalo;

    // if (errorNombre) {
    //     $form.nombre.className = 'error';
    // } else {
    //     $form.nombre.className = '';
    // }

    // if (errorCiudad) {
    //     $form.ciudad.className = 'error';
    // } else {
    //     $form.ciudad.className = '';
    // }

    // if (errorDescripcionRegalo) {
    //     $form['descripcion-regalo'].className = 'error';
    // } else {
    //     $form['descripcion-regalo'].className = '';
    // }

    return cantitadadErrores;
}

const $form = document.querySelector('#carta-a-santa');
$form.onsubmit = validarFormulario;