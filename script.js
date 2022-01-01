let textoCarta = document.getElementById('carta-texto');
const buttonCreate = document.getElementById('criar-carta');
const letter = document.getElementById('carta-gerada');
let classeEstilo = ['newspaper', 'magazine1', 'magazine2'];
let classeTamanho = ['medium', 'big', 'reallybig'];
let classeRotacao = ['rotateleft', 'rotateright'];
let classeInclinacao = ['skewleft', 'skewright'];

function createLetter(){
    let wordText = textoCarta.value;
    let wordList = wordText.split(' ');
    if (wordText == ' ' || wordText == ''){
        let alerta = document.createElement('span');
        alerta.innerText = 'Por favor, digite o conteúdo da carta.';
        letter.appendChild(alerta);
    }
    for (let index = 0; index < wordList.length; index +=1){
    let word = document.createElement('span');
    word.innerText = wordList[index];
    word.classList.add(classeEstilo[Math.floor(Math.random() * 4)]);
    word.classList.add(classeTamanho[Math.floor(Math.random() * 4)]);
    word.classList.add(classeRotacao[Math.floor(Math.random() * 3)]);
    word.classList.add(classeInclinacao[Math.floor(Math.random() * 3)]);
    letter.appendChild(word); 
    }
}

buttonCreate.addEventListener('click', createLetter);


