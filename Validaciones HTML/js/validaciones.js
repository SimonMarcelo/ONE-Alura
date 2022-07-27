export function valida(input) {
    const tipoDeInput = input.dataset.tipo;
    if(validadores[tipoDeInput]) {
        validadores[tipoDeInput](input)
    }

    if (input.validity.valid) {
        input.parentElement.classList.remove("input-container--invalid");
        input.parentElement.querySelector(".input-messaje-error").innerHTML = "";
    } else {
        input.parentElement.classList.add("input-container--invalid")
        input.parentElement.querySelector(".input-message-error").innerHTML = mostrarMensajeError(tipoDeInput,input);
    }
}

const tipoDeErrores = [
    "valueMissing",
    "typeMismatch",
    "patternMismatch",
    "customError"
]

const mensajesDeError = {
    nombre: {
        valueMissing: "El campo nombre no puede estar vacío"
    },
    email: {
        valueMissing: "El campo email no puede estar vacío",
        typeMismatch: "El correo no es válido"
    },
    password: {
        valueMissing: "El campo contraseña no puede estar vacío.",
        patternMismatch: "Al menos 6 caracteres, máximo 12, debe contener una letra minúscula, una mayúscula, un número y no puede contener caracteres especiales."
    },
    nacimiento: {
        valueMissing: "El campo Fecha de nacimiento no puede estar vacío.",
        customError: "Debes tener al menos 18 años de edad."
    },
    numero: {
        valueMissing: "Este campo no puede estar vacío.",
        patternMismatch: "El formato requerido es XXXXXXXXXX 10 números."
    },
    direccion: {
        valueMissing: "Este campo no puede estar vacío.",
        patternMismatch: "La dirección debe contener entre 10 y 40 caracteres."
    },
    ciudad: {
        valueMissing: "Este campo no puede estar vacío.",
        patternMismatch: "La Ciudad debe contener entre 4 y 30 caracteres."
    },
    estado: {
        valueMissing: "Este campo no puede estar vacío.",
        patternMismatch: "El Estado debe contener entre 4 y 30 caracteres."
    }
}

const validadores = {
    nacimiento: (input) => validarNacimiento(input), 
}

function mostrarMensajeError(tipoDeInput,input) {
    let mensaje = "";
    tipoDeErrores.forEach(error => {
        if(input.validity[error]) {
            console.log(tipoDeInput, error);
            console.log(input.validity[error]);
            console.log(mensajesDeError[tipoDeInput][error]);
            mensaje = mensajesDeError[tipoDeInput][error];
        }
    });
    return mensaje;
}

function validarNacimiento(input) {
    const fechaCliente = new Date(input.value);
    mayorDeEdad(fechaCliente);
    let mensaje = ""
    if (!mayorDeEdad(fechaCliente)){
        mensaje = "Debes tener al menos 18 años de edad"
    }
    input.setCustomValidity(mensaje);
}

function mayorDeEdad(fecha) {
    const fechaActual = new Date();
    const diferenciaFechas = new Date(
        fecha.getUTCFullYear() + 18, 
        fecha.getUTCMonth(), 
        fecha.getUTCDate()
    );
    return diferenciaFechas <= fechaActual;
}