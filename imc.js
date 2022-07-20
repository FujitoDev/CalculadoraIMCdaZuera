
const calcular = document.getElementById('calcular');


function imc() {
    const nome = document.getElementById('nome').value;
    const altura = document.getElementById('altura').value;
    const peso = document.getElementById('peso').value;
    const resultado = document.getElementById('resultado');

    if (nome.value !== '' && altura !== '' && peso !== '') {

        const valorIMC = (peso / (altura * altura)).toFixed(1);

        let classificação = '';

        if (valorIMC < 18) {
            classificação = 'Tá Precisando Comer Uns Panetone E Tomar Uns Vitaminado!';
        } else if (valorIMC < 25) {
            classificação = "Tá Na media! Continue Assim";
        } else if (valorIMC < 30) {
            classificação = "Tá Meigo.... Meigordin!!";
        } else if (valorIMC < 35) {
            classificação = "Tá Gordex! Ja Chega Né!!"
        } else if (valorIMC < 50) {
            classificação = "Para De Comer O Gordo(A) Do Caralho!";
        }

        resultado.textContent = `${nome} Seu IMC é ${valorIMC}, e Você ${classificação}`;

    } else {
        resultado.textContent = 'Preencha todos os Campos'
    }

}

calcular.addEventListener('click', imc);