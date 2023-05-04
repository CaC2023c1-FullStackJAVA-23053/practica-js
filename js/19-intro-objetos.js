const persona = {
    // Propiedades (atributos)
    nombre: "Alan",
    edad: 23,
    apellido: "Turing",
    sexo: "M",
    estadoCivil: "Soltero",
    DNI: 145615,
    nacionalidad: "Inglesa",
    celular: {
        marca: "Samsung",
        modelo: "A32",
        encendido: true,
        compania: {
            nombre: "Movistar",
            anioFundacion: 1990,
            colorLogo: "Verde"
        },
        encender: function() {
            this.encendido = !this.encendido;
        }
    },
    // Operaciones (métodos)
    nombreCompleto: function() {
        return `${this.nombre} ${this.apellido}`;
    },
    presentarseEnLaConsola: function(conEntusiasmo) {
        let mensaje = `Hola, soy ${this.nombreCompleto()}`;
        if (conEntusiasmo) {
            mensaje += "!!!!!";
        }
        console.log(mensaje);
    }
};

/*
console.log(persona);
console.log(persona.nombre);
persona.estadoCivil = "Casado";
console.log(persona);
*/
console.log( persona.nombreCompleto() );
