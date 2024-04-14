function calcularRendimientos() {
    const inversionInicial = parseFloat(document.getElementById('inversionInicial').value);
    const duracionDias = parseInt(document.getElementById('duracionDias').value);

    const tasaAnual = 0.1475; // Tasa de interés anual (14.75% dividido por 100)
    const tasaDiaria = Math.pow(1 + tasaAnual, 1/365) - 1; // Convertir tasa anual a tasa diaria

    let inversionActual = inversionInicial;
    let rendimientos = [];

    for (let dia = 1; dia <= duracionDias; dia++) {
        inversionActual *= (1 + tasaDiaria); // Aplicar interés compuesto diario
        rendimientos.push(inversionActual.toFixed(2)); // Agregar al arreglo redondeando a 2 decimales
    }

    const resultadoHTML = `
        <h2>Rendimientos diarios durante ${duracionDias} días:</h2>
        <ul>
            ${rendimientos.map((valor, index) => `<li>Día ${index + 1}: $${valor}</li>`).join('')}
        </ul>
        <p>Total después de ${duracionDias} días: $${inversionActual.toFixed(2)}</p>
    `;

    document.getElementById('resultado').innerHTML = resultadoHTML;
}