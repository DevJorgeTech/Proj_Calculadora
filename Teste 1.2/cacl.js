let resultAba = document.getElementById('result')
let num1
let num2 

function cacl(tipo,valor){
    if (tipo == 'valor' && valor != undefined){       
        resultAba.innerHTML = valor
        num1 = valor
        console.log(num1);
    } 
    
}