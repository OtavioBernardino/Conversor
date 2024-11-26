function calcular() {
    var medida = parseFloat(document.getElementById("regua").value);
    
    var valor = (medida*26.57);

    var resultado = document.getElementById("result");
    resultado.textContent = valor.toFixed(0)+" Litros";
    if (valor>21000){
        alert("Valor muito alto!");
    }
    else if (valor==0){
        alert("Valor inválido!");
    }


}