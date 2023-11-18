function verificarNotas() {
    var n1 = parseFloat(document.getElementById("n1").value);
    var n2 = parseFloat(document.getElementById("n2").value);
    var n3 = parseFloat(document.getElementById("n3").value);

    var falt = 180 - (n1 + n2 + n3);

    var resultElement = document.getElementById("result");

    if (isNaN(n1) || isNaN(n2) || isNaN(n3)) {
        resultElement.innerHTML = "Por favor, insira notas válidas.";
    } else if ((n1 + n2 + n3) < 180) {
        resultElement.innerHTML = "Reprovado, falta " + falt.toFixed(2) + " pontos para passar.";
    } else {
        resultElement.innerHTML = "Aprovado.";
    }
}
