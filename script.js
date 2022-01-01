let textoCarta = document.getElementById('carta-texto');
const buttonCreate = document.getElementById('criar-carta');
const letter = document.getElementById('carta-gerada');
let contadorParagrafo = document.getElementById('carta-contador');
let classeEstilo = ['newspaper', 'magazine1', 'magazine2'];
let classeTamanho = ['medium', 'big', 'reallybig'];
let classeRotacao = ['rotateleft', 'rotateright'];
let classeInclinacao = ['skewleft', 'skewright'];



function createLetter(){
    letter.innerHTML = '';
    let wordText = textoCarta.value;
    let wordList = wordText.split(' ');
    //https://stackoverflow.com/questions/10261986/how-to-detect-string-which-contains-only-spaces/50971250
    if (wordText == '' || !wordText.replace(/\s/g, '').length){
        let alerta = document.createElement('span');
        alerta.innerText = 'Por favor, digite o conteúdo da carta.';
        letter.appendChild(alerta);
    }
    else{
        for (let index = 0; index < wordList.length; index +=1){
        let word = document.createElement('span');
        let estilo = classeEstilo[Math.floor(Math.random() * 4)];
        let tamanho = classeTamanho[Math.floor(Math.random() * 4)];
        let rotacao = classeRotacao[Math.floor(Math.random() * 3)];
        let inclinacao = classeInclinacao[Math.floor(Math.random() * 3)];
        word.innerText = wordList[index];
        word.classList.add(estilo, tamanho, rotacao, inclinacao);
        letter.appendChild(word); 
        }

        let contador = document.getElementById('carta-gerada').children.length;
        contadorParagrafo.innerText = contador;

    }
}

buttonCreate.addEventListener('click', createLetter);




