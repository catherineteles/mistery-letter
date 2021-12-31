let textoCarta = document.getElementById('carta-texto');
const buttonCreate = document.getElementById('criar-carta');
const letter = document.getElementById('carta-gerada');

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
    letter.appendChild(word); 
    }
}

buttonCreate.addEventListener('click', createLetter);


