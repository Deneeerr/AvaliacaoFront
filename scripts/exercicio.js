const botao = document.getElementById("botao");
const resultado = document.getElementById("resultado")

        botao.onclick = function() {
            const numero1 = Number(document.getElementById("numero1").value);
            const numero2 = Number(document.getElementById("numero2").value);

            const soma = numero1 + numero2;
            const subtracao = numero1 - numero2;    
            const multiplica = numero1 * numero2;
            const dividir = numero1 / numero2;

            resultado.innerHTML = 
            "Soma: " + soma + 
            " Subtração: "+ subtracao + 
            " Multiplicação: "+ multiplica + 
            " Divisão: " + dividir;
        };