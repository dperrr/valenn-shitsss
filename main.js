const btnYes = document.querySelector(".btn-yes");
const btnNo = document.querySelector(".btn-no");
const image = document.querySelector('.js-img')

let stupidText = ['Are you sure?', 'Really sure?', 'Think again!', 'Last Chance', 'surely not?', 'You might regret this!', 'Give it another thought', 'Are you absolutely sure?', 'This could be a mistake!', 'Have a heart!', 'Don\'t be so cold!', 'Change of Heart?', 'Wouldn\'t you reconsider', 'Is that your final answer?', "You're breaking my heart :(", 'You leave me no choice!'];

let sadCat = ['cat-kitten', 'sad-cat(1)', 'sad-cat', 'sad-sad-cat','cat-kitten', 'sad-cat(1)', 'sad-cat', 'sad-sad-cat','cat-kitten', 'sad-cat(1)', 'sad-cat', 'sad-sad-cat','cat-kitten', 'sad-cat(1)', 'angry-angry-cat'];


let currentIndex = 0;
btnNo.addEventListener('click', () => {
    if (currentIndex < stupidText.length) {
        btnNo.innerText = (`${stupidText[currentIndex]}`);
        img.src = sadCat[currentIndex];
        currentIndex++;
    }

    if (currentIndex === stupidText.length) {
        setTimeout(() => {
            btnNo.classList.add('cursor-not-allowed');
            btnNo.disabled = true; 
        }, 0);
    }
});
