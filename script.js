const footer = document.querySelector('footer');
const button = document.querySelector('button');
const dice1 = document.querySelector('.image1');
const dice2 = document.querySelector('.image2');
const heading = document.querySelector('h1');

const randomNumber1 = Math.floor( Math.random() * 6) + 1;
const randomImageSource1 = './images/dice' + randomNumber1 + '.png'
dice1.setAttribute('src', randomImageSource1);

const randomNumber2 = Math.floor( Math.random() * 6) + 1;
const randomImageSource2 = './images/dice' + randomNumber2 + '.png'
dice2.setAttribute('src', randomImageSource2);

if(randomNumber1 > randomNumber2){
    heading.innerText = 'Player 1 Wins!'
} else if(randomNumber2 > randomNumber1){
    heading.innerText = 'Player 2 Wins!'
} else{
    heading.innerText = 'Draw!'
}

button.addEventListener('click', () => {
    window.location.reload();
})

const copyRightYear = new Date().getFullYear();
footer.innerHTML = '&copy; '  + copyRightYear + ' Daniel Odu';
