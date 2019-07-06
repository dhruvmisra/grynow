let stepsImages = document.getElementsByClassName('steps-img')[0].getElementsByClassName('sec-img');
let steps = document.getElementsByClassName('accordion')[0].getElementsByClassName('card');

console.log(steps);

Array.prototype.forEach.call(steps, e => {
    e.addEventListener('click', showToggle);
})


function showToggle() {
    let step = event.currentTarget;
    let content = step.getElementsByClassName('collapse')[0];
    let currentImage;

    for(let i=0; i<stepsImages.length; i++) {
        if(stepsImages[i].classList.contains('show'))
            currentImage = stepsImages[i];
    }

    console.log(currentImage);

    setTimeout(() => {
        console.log(content.id);
        if(content.classList.contains('show')) {
            switch(content.id) {
                case 'collapseOne' : 
                    console.log('true');
                    currentImage.classList.remove('show');
                    stepsImages[0].classList.add('show');
                    break;
                case 'collapseTwo' : 
                    currentImage.classList.remove('show');
                    stepsImages[1].classList.add('show');
                    break;
                case 'collapseThree' : 
                    currentImage.classList.remove('show');
                    stepsImages[2].classList.add('show');
                    break;
                case 'collapseFour' : 
                    currentImage.classList.remove('show');
                    stepsImages[3].classList.add('show');
                    break;
                case 'collapseFive' : 
                    currentImage.classList.remove('show');
                    stepsImages[4].classList.add('show');
                    break;
            }
        }
    }, 500)
}

