let nota, resultado;

function Verificar(){
    nota = Number(document.getElementById("nota").value);
    resultado = document.getElementById("resultado");

    if(nota <5){
        resultado.innerHTML = "Reprovado";
    }
    else if(nota < 7){
    resultado.innerHTML = "Recuperação"
    }

    else{
        resultado.innerHTML = "Aprovado";
    }
}

//Subtração 

let num1, num2, resultado2, subtracao;

function Calcular(){
    num1 = Number(document.getElementById("num1").value);
    num2 = Number(document.getElementById("num2").value);
    resultado2 = document.getElementById("resultado2");

    if(num1 < num2){
        subtracao = num2 - num1;
    }
    else{
        subtracao = num1 - num2;
    }
    resultado2.innerHTML = subtracao;
}

//Média do aluno

let notaA, notaB, notaC, notaD, media, calculomedia, resultado3;

function Media(){
    notaA = Number(document.getElementById("notaA").value);
    notaB = Number(document.getElementById("notaA").value);
    notaC = Number(document.getElementById("notaA").value);
    notaD = Number(document.getElementById("notaA").value);
    media = document.getElementById("media");
    resultado3 = document.getElementById("resultado3");

    calculomedia = (notaA + notaB + notaC + notaD)/4;
    
    if(calculomedia >= 5){
        resultado3.innerHTML = "Aprovado";
    }
    else{   
        resultado3.innerHTML = "Reprovado";

    }
        media.innerHTML = "Media: " + calculomedia;
}