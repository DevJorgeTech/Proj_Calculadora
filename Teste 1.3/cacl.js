function cacl(tipo, valor) {
    if (tipo === 'acao'){
        if (valor === "c") {
            document.getElementById('result').value = ''
            // Limpa a barra de resultado
        }

        if (valor === "+" || valor === "-" || valor === "*" || valor === "/" || valor === "."){
            document.getElementById('result').value += valor

            // Se for uma ação o resultado continuará sendo concatenado 
        }

        if (valor === "="){
            numFinal = document.getElementById('result').value
            document.getElementById('result').value = eval(numFinal)

            // Eval transforma o valor no seu valor literal para o interpretador do JavaScript
        }

    } else if (tipo === 'valor'){
        document.getElementById('result').value += valor

        // Junta os valores criando uma String
    }

}
