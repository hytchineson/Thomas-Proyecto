function ProcesarEntradaUsuario(function_callback) {
    var numero = prompt ('por favor ingresar numero')
    fonction_callback (numero)
}

ProcesarEntradaUsuario(validar_acceso)