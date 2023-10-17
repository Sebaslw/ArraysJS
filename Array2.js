const num = ["1", "2", "3", "4", "5"];
const abc = ["A", "B", "C", "D", "F"];

function recibirnumero() {
    let numero = document.getElementById("numeros").value;

    // Agregar el número al final del arreglo
    num.push(numero);

    // Actualizar el contenido HTML
    document.getElementById("recibir-numeros").innerHTML = num.join(", ");
}

function recibirletras() {
    let letra = document.getElementById("letras").value;

    // Reemplazar el primer elemento del arreglo
    abc.splice(0, 1, letra);

    // Actualizar el contenido HTML
    document.getElementById("recibir-letras").innerHTML = abc.join(", ");
}

