const calcular = document.getElementById('calcular');


function imc () {
    const nome = document.getElementById('nome').value;
    const altura = document.getElementById('altura').value;
    const peso = document.getElementById('peso').value;
    const resultado = document.getElementById('resultado');

    if (nome !== '' && altura !== '' && peso !== '') {

        const valorIMC = (peso/(altura**2)).toFixed(2);
        
        let classificacao = '';

        if (valorIMC < 18.5){
            classificacao = 'abaixo do peso. Seu peso ideal está entre, 56.7KG(mínimo) e 76.3KG(máximo)';
        }else if (valorIMC < 25) {
            classificacao = 'peso normal. Seu peso ideal está entre, 56.7KG(mínimo) e 76.3KG(máximo)';
        }else if (valorIMC < 30){
            classificacao = 'levemente acima do peso. Seu peso ideal está entre, 42.7KG(mínimo) e 57.5KG(máximo)';
        }else if (valorIMC < 35){
            classificacao = 'com obesidade grau I. Seu peso ideal está entre, 56.7KG(mínimo) e 76.3KG(máximo)';
        }else if (valorIMC < 40){
            classificacao = 'com obesidade grau II. Seu peso ideal está entre, 56.7KG(mínimo) e 76.3KG(máximo)';
        }else {
            classificacao = 'com obesidade grau III. Seu peso ideal está entre, 56.7KG(mínimo) e 76.3KG(máximo)';
        }

        resultado.textContent = `Olá, ${nome}! Com ${peso}kg e ${altura}m, seu IMC é ${valorIMC}. Atualmente, você está ${classificacao}`;

    }else {
        resultado.textContent = 'Para calcular o seu IMC , preencha todos os campos.';
    }

}
calcular.addEventListener('click', imc);