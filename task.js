let submitContainer = document.querySelector('submit-container');
const leftButton = document.querySelector('.leftbutton'); 
const rightButton = document.querySelector('.rightbutton');
const submitButton = document.querySelector('.submit');
let counter = document.querySelector('#counter');
let addWord = document.querySelector('.add-word');
let mirror = document.querySelector('.mirror');
let words = ['volcano', 'aa', 'aal', 'aalii', 'aaliis', 'aals', 'aas', 'acari', 'acarine', 'acarines', 'acarpellous', 'acarpelous', 'acarpous']
let currentIndex = -1; 


document.querySelector('.submit').addEventListener('click', function() {
    let mirrorText = document.querySelector('.add-word').value;
    words.push(mirrorText);
    console.log(words);
    let newWords = document.createElement('div');
    newWords.className = 'mirror';
    newWords.innerHTML = `<h3>${addWord}</h3>`;
    document.querySelector('mirror-input').value = "";
});


leftButton.addEventListener('click', function() { 
    if (currentIndex > 0) {
        currentIndex--;
        updateMirror();
        updateCounter();
    }
});

rightButton.addEventListener('click', function() { 
    if (currentIndex < reminders.length - 1) {
        currentIndex++;
        updateMirror();
        updateCounter();
    }
});
