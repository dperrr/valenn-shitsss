const btnYes = document.querySelector(".btn-yes");
const btnNo = document.querySelector(".btn-no");
const image = document.querySelector('.js-img');
const body = document.querySelector('.js-bod');
const title = document.querySelector('.js-title');
const audio = document.querySelector('.js-audio');

let stupidText = ['Are you sure?', 'Really sure?', 'Think again!', 'Last Chance', 'surely not?', 'You might regret this!', 'Give it another thought', 'Are you absolutely sure?', 'This could be a mistake!', 'Have a heart!', 'Don\'t be so cold!', 'Change of Heart?', 'Wouldn\'t you reconsider', 'Is that your final answer?', "You're breaking my heart :(", 'You leave me no choice!'];

let sadCat = ['./images/cat-kitten.gif', './images/qwer.gif', './images/sad-cat.gif', './images/sad-sad-cat.gif','./images/cat-kitten.gif', './images/qwer.gif', './images/sad-cat.gif', './images/sad-sad-cat.gif','./images/cat-kitten.gif', './images/qwer.gif', './images/sad-cat.gif', './images/sad-sad-cat.gif','./images/cat-kitten.gif', './images/qwer.gif', './images/sad-cat.gif','./images/angry-angry-cat.gif'];

let currentIndex = 0;

btnYes.addEventListener('click', () => {
    image.src = './images/kiss.gif';
    
    hideButtons();
    
    body.classList.remove('bg-cyan-200');
    body.classList.add('bg-red-400m');
    setInterval(createHeart, 300);
    createHeart();
    title.innerText = 'MWAAAAAA!';
})

btnNo.addEventListener('click', () => {
    const { width: currentWidth, height: currentHeight, fontSize: currentFontSize } = getComputedStyle(btnYes);

    if (currentIndex < stupidText.length) {
        btnNo.innerText = stupidText[currentIndex];
        image.src = sadCat[currentIndex];
        changeThePosition();
        currentIndex++;

        btnYes.style.width = `${parseInt(currentWidth) + 18}px`;
        btnYes.style.height = `${parseInt(currentHeight) + 18}px`;
        btnYes.style.fontSize = `${parseInt(currentFontSize) + 5}px`;
    }

    if (currentIndex === stupidText.length) {
        setTimeout(() => {
            disableNoButton();
        }, 0);
    }
});

function hideButtons() {
    btnYes.style.display = 'none';
    btnNo.style.display = 'none';
    audio.classList.remove('hidden');
}

function disableNoButton() {
    btnNo.classList.add('cursor-not-allowed');
    btnNo.disabled = true;
}

function changeThePosition() {
    const wrapper = document.querySelector(".wrapper");
    const wrapperRect = wrapper.getBoundingClientRect();
    
    const maxDistanceX = wrapperRect.width - btnNo.offsetWidth - 50;
    const maxDistanceY = wrapperRect.height / 2 - btnNo.offsetHeight; 

    const randomX = Math.random() * maxDistanceX;
    const randomY = Math.random() * maxDistanceY;

    btnNo.style.transform = `translate(${randomX}px, ${randomY}px)`;
}

function createHeart() {
    const heart = document.createElement('div');
    heart.classList.add('heart');
    
    heart.style.left = Math.random() * 100 + "vw";
    heart.style.animationDuration = Math.random() * 2 + 3 + "s";
    
    heart.innerText = '💗';
    
    document.body.appendChild(heart);
    
    setTimeout(() => {
                heart.remove();
                }, 5000);
  }
  
  