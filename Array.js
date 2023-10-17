const miarray = ["sebas", "santiago", "samuel", "matias"];

        function pushData() {
            // Obtener el valor del campo de entrada de texto
            const arry1 = document.getElementById('arry1').value;

            // Agregar datos al array
            miarray.unshift(arry1);

            // Mostrar los elementos del array separados por saltos de línea en el párrafo
            document.getElementById('pText').innerHTML = miarray.join("<br/>");
        }