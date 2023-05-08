const divResultado = document.getElementById("resultado");
const h1ElTitulo = document.getElementById("elTitulo");
const losLabels = document.getElementsByTagName("label");

h1ElTitulo.innerHTML = "Nuevo texto desde JavaScript";

const pSaludo = document.createElement("p");
pSaludo.innerHTML = "Hola, saludando desde JS";

divResultado.appendChild(pSaludo);


for (const elLabel of losLabels) {
    elLabel.innerHTML = elLabel.innerHTML.toUpperCase();
    elLabel.setAttribute("class", "texto-rojo");
    elLabel.style.fontSize = "2rem";
}

// losLabels[0].innerHTML = losLabels[0].innerHTML.toUpperCase();