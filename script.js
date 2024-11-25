function calcular() {
    var medida = parseFloat(document.getElementById("regua").value);
    
    var valor = (medida*26.57);

    var resultado = document.getElementById("result");
    resultado.textContent = valor.toFixed(0)+" Litros";


}