const containerEl = document.querySelector('.container')

const career = ["SHARIQ ALAM.","WEB DEVELOPER.","HACKER.","GAMER." ]

let careerIndex = 0;

let characterIndex = 0;

updateText()

function updateText(){

    characterIndex++;
    containerEl.innerHTML = `<h1>I Am A ${career[careerIndex].slice(0,characterIndex)}</h1>`;


    if (characterIndex === career[careerIndex].length) {
        careerIndex++;
        characterIndex = 0
    }

    if (careerIndex === career.length) {
        careerIndex = 0;
    }
    setTimeout(updateText, 300);
}


