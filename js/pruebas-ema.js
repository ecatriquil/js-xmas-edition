// Test validarNombre function
function testValidarNombre() {
    // Negative case
    console.assert(
        validarNombre('') === 'Este campo debe tener al menos 1 caracter',
        'Validar nombre no validó que el nombre no sea vacío',
    );

    console.assert(
        validarNombre(
            '111111111111111111111111111111111111111111111111111111111111111111111111111111111111111') ===
        'Este campo debe tener menos de 50 caracteres',
        'Validar nombre no validó que el nombre sea menor a 50 caracteres',
    );

    console.assert(
        validarNombre('12345') === 'El campo nombre solo acepta letras',
        'Validar nombre no valido que le nombre solo tenga letras'
    );

    // Positive case
    console.assert(
        validarNombre('Emanuel') === '',
        'ValidarNombre falló con un nombre válido'
    );


}

// Test validarCiudad function
function testValidarCiudad() {
    console.assert(
        validarCiudad('Buenos Aires') === '',
        'Validar ciudad no funcionó con un nombre de ciudad válido'
    );

    console.assert(
        validarCiudad('') === 'El campo ciudad no puede estar vacío',
        'Validar ciudad no mostró un error cuando la ciudad es vacía'
    );
}

function testValidarDescripcionRegalo() {
    // Negative case
    console.assert(
        validarDescripcionRegalo('') === 'El campo descripcion no puede estar vacío',
        'La funcion validar descripcion regalo no valido que el campo no esté vacio'
    );

    console.assert(
        validarDescripcionRegalo('aepjppfjka`kada`ka`kda`keskpfjpjpjkfe`kslakdffffffffffffffffffffffffffffffafkokfwòkew`k`rek`fekfrèk`koaksdka`kdàkd`skaòdkdsòfkdòskfòsdkfskfffffffffffffffffffff`kd`so`kaas') 
        === 'El campo descripcion es muy largo',
        'La funcion validar descripcion regalo no valido que el campo no sea muy largo'
    );

    console.assert(
        validarDescripcionRegalo('.,.,.-.-,.,.,') === 'El campo descripcion solo puede tener numeros y letras',
        'La funcion validar descripcion regalo no valido que sean solo numeros y letras'
    );

    // Positive case
    console.assert(
        validarDescripcionRegalo('Regalo') === '',
        'La funcion validar descripcion regalo no funciono con una descripcion correcta'
    );
}

testValidarNombre();
testValidarCiudad();
testValidarDescripcionRegalo();
