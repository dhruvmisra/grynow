const images = [];

let i = 0, n = 23;
let creatorInterval;

// Creators' Data
let creatorsData = [];
creatorsData[0] = {
    name: 'Name1',
    info: 'XYZlkasjdlkasjdlkajwklfnvlajzfn',
    img: '1.jpeg',
    videoId: 'O2iorLuSjOg'
}
creatorsData[1] = {
    name: 'Triggered Insaan',
    info: 'ABClkasjdlkasjdlkajwklfnvlajzfn',
    img: 'Triggered Insaan.jpeg',
    videoId: 'k-9qpmmCH7E'
}
creatorsData[2] = {
    name: 'Kangra Boys',
    info: 'XYZlkasjdlkasjdlkajwklfnvlajzfn',
    img: 'Kangra Boys.jpeg',
    videoId: 'COBt7Lf_SMI'
}
creatorsData[3] = {
    name: 'Prince Dhimann',
    info: 'XYZlkasjdlkasjdlkajwklfnvlajzfn',
    img: 'Prince Dhimann.jpeg',
    videoId: '0SwVZ1_Bxlc'
}

creatorsData[4] = {
    name: 'DAHIYA FILMS',
    info: 'XYZlkasjdlkasjdlkajwklfnvlajzfn',
    img: 'DAHIYA FILMS.jpeg',
    videoId: 'MEZmT893Vlo'
}
creatorsData[5] = {
    name: 'Aman Aujla',
    info: 'XYZlkasjdlkasjdlkajwklfnvlajzfn',
    img: 'Aman Aujla.jpeg',
    videoId: 'jur55eYunmM'
}
creatorsData[6] = {
    name: 'STAR INDIA FILMS',
    info: 'XYZlkasjdlkasjdlkajwklfnvlajzfn',
    img: 'STAR INDIA FILMS.jpeg',
    videoId: 'KkJSyTPk-Is'
}
creatorsData[7] = {
    name: 'GAURAVZONE',
    info: 'XYZlkasjdlkasjdlkajwklfnvlajzfn',
    img: 'GAURAVZONE.jpeg',
    videoId: 'Z9JCzksr_BM'
}
creatorsData[8] = {
    name: 'Bhawani pareek',
    info: 'XYZlkasjdlkasjdlkajwklfnvlajzfn',
    img: 'Bhawani pareek.jpeg',
    videoId: 'jaqdjQIOt8I'
}
creatorsData[9] = {
    name: 'Old Delhi Films',
    info: 'XYZlkasjdlkasjdlkajwklfnvlajzfn',
    img: 'Old Delhi Films.jpeg',
    videoId: 'Mfuk4gk1U2I'
}
creatorsData[10] = {
    name: 'Rakhi Lohchab',
    info: 'XYZlkasjdlkasjdlkajwklfnvlajzfn',
    img: 'Rakhi Lohchab.jpeg',
    videoId: 'q2lBsyQyZww'
}
creatorsData[11] = {
    name: 'desi manch',
    info: 'XYZlkasjdlkasjdlkajwklfnvlajzfn',
    img: 'desi manch.jpeg',
    videoId: 'FCSybMd2xRg'
}
creatorsData[12] = {
    name: 'Sam Khan',
    info: 'XYZlkasjdlkasjdlkajwklfnvlajzfn',
    img: 'Sam Khan.jpeg',
    videoId: 'WlhRhPDGLAE'
}
creatorsData[13] = {
    name: 'fun friend india',
    info: 'XYZlkasjdlkasjdlkajwklfnvlajzfn',
    img: 'fun friend india.jpeg',
    videoId: 'CVvqyuzXiF4'
}
creatorsData[14] = {
    name: 'vishal goswami baba',
    info: 'XYZlkasjdlkasjdlkajwklfnvlajzfn',
    img: 'vishal goswami baba.jpeg',
    videoId: 'K6ju6Ba35sM'
}
creatorsData[15] = {
    name: 'Funky Joker',
    info: 'XYZlkasjdlkasjdlkajwklfnvlajzfn',
    img: 'Funky Joker.jpeg',
    videoId: 'TZslA71CfaE'
}
creatorsData[16] = {
    name: 'PaGaL LaDkA',
    info: 'XYZlkasjdlkasjdlkajwklfnvlajzfn',
    img: 'PaGaL LaDkA.jpeg',
    videoId: 'Mdrrk4ysghw'
}
creatorsData[17] = {
    name: 'COMEDY TV',
    info: 'XYZlkasjdlkasjdlkajwklfnvlajzfn',
    img: 'COMEDY TV.jpeg',
    videoId: 'AGUUIGHR2jw'
}
creatorsData[18] = {
    name: 'Surana Film Studio',
    info: 'XYZlkasjdlkasjdlkajwklfnvlajzfn',
    img: 'Surana Film Studio.jpeg',
    videoId: 'W2Hw_HWbDcI'
}
creatorsData[19] = {
    name: 'Kudiyo Da Tashan',
    info: 'XYZlkasjdlkasjdlkajwklfnvlajzfn',
    img: 'Kudiyo Da Tashan.jpeg',
    videoId: 'Lghhcc04qdk'
}
creatorsData[20] = {
    name: 'Jaggie Tv',
    info: 'XYZlkasjdlkasjdlkajwklfnvlajzfn',
    img: 'Jaggie Tv.jpeg',
    videoId: 'SN6Br7B198E'
}
creatorsData[21] = {
    name: 'Aayu and Pihu Show',
    info: 'XYZlkasjdlkasjdlkajwklfnvlajzfn',
    img: 'Aayu and Pihu Show.jpeg',
    videoId: 'LNIbXSEjy0A'
}
creatorsData[22] = {
    name: 'KHANDESHI MOVIES',
    info: 'XYZlkasjdlkasjdlkajwklfnvlajzfn',
    img: 'KHANDESHI MOVIES.jpeg',
    videoId: 'jlmQmUpY2cE'
}
creatorsData[23] = {
    name: 'Shruti Arjun Anand',
    info: 'XYZlkasjdlkasjdlkajwklfnvlajzfn',
    img: 'Shruti Arjun Anand.jpeg',
    videoId: 'L6_Xb4r9fE8'
}


let creatorMain = document.getElementById('creator-main');
let creators = document.getElementsByClassName('creator-secondary');
let windowHeight;

//Animate creators on scroll
function init() {
    windowHeight = window.innerHeight;
    addEventHandlers();
    checkPosition();
}
function addEventHandlers() {
    window.addEventListener('scroll', checkPosition);
    window.addEventListener('resize', init);
}
function removeEventHandlers() {
    window.removeEventListener('scroll', checkPosition);
    window.removeEventListener('resize', init);
}
function checkPosition() {
    let positionFromTop = creatorMain.getBoundingClientRect().top;
    if (positionFromTop - windowHeight <= -300) {
        removeEventHandlers();
        console.log(windowHeight, positionFromTop);
        creatorInterval = setInterval(() => {
            changeCreatorImg();
        }, 100);
    }            
}

//Creator's (secondary) images
let creatorsArea = document.getElementById('creators-area');
//Path
let creatorPath = './assets/creators/';

//Initianlising the images
while(i < n) {
    images[i] = creatorPath + creatorsData[i].img;
    i++;
}
for(i=1; i<n-1; i++) {
    let img = document.createElement("img");
    img.classList.add("creator-secondary", "rounded-circle");
    setImageAttributes(img, i)
    creatorsArea.appendChild(img);
}
// for(let i=0; i < creatorsArea.children.length; i++) {
//     creatorsArea.children[i].addEventListener('click', showModal);
// }
i = 0;

init();

function changeCreatorImg() {
    creatorMain.src = images[i];
    i++;

    if(i == 9) {
        clearInterval(creatorInterval);
        creatorMain.src = images[n-1];
        setImageAttributes(creatorMain, n-1)

        setTimeout(() => {
            creatorMain.classList.add('creator-zoom-out');

            setTimeout(() => {
                i = 0;
                let delay;
                Array.prototype.forEach.call(creators, (e) => {
                    delay = i*100 + 'ms';
                    setAnimation(e, delay);
                    i++;
                    i %= 6;
                });
            }, 500);
        }, 200);

        i = 0;
        // setInterval(() => {
        //     creators[13].classList.remove('animated', 'fadeInUp');
        //     creators[13].style.opacity = 1;
        //     if(i == 0) {
        //         creators[13].classList.add('animated', 'zoomOut');
        //         setTimeout(() => {
        //             creators[13].src = creatorPath + creatorsData[23].img;
        //             creators[13].classList.remove('animated', 'zoomOut');
        //             creators[13].classList.add('animated', 'zoomIn');  
        //         }, 400)    
        //         i = 1;
        //     } else if(i == 1) {
        //         creators[13].classList.add('animated', 'zoomOut');
        //         setTimeout(() => {
        //             creators[13].src = creatorPath + creatorsData[14].img;
        //             creators[13].classList.remove('animated', 'zoomOut');
        //             creators[13].classList.add('animated', 'zoomIn');  
        //         }, 400)    
        //         i = 2;
        //     } else {
        //         creators[13].classList.add('animated', 'zoomOut');
        //         setTimeout(() => {
        //             creators[13].src = creatorPath + creatorsData[10].img;
        //             creators[13].classList.remove('animated', 'zoomOut');
        //             creators[13].classList.add('animated', 'zoomIn');  
        //         }, 400)    
        //         i = 0;
        //     }
        // }, 3000)
        
    }
}

function setAnimation(element, delay) {
    element.style.animationDelay = delay;
    element.style.animationDuration = '0.8s';
    element.classList.add('animated', 'fadeInUp');
}

function setImageAttributes(img, j) {
    img.src = images[j];
    img.alt = j;
}


//Read more
let read = document.getElementById('read-more');
let content = document.getElementById('read-content');
content.style.display = 'none';
read.addEventListener('click', () => {
  console.log('clicked');
  if(content.style.display == 'none') {
    console.log('if');
    content.style.display = 'block';
    read.innerHTML = 'Read Less';
  } else {
    console.log('else');
    content.style.display = 'none';
    read.innerHTML = 'Read More';
  }
});


window.onload = () => {
    let creatorContainer = document.getElementById('creator-container');

    creatorContainer.scrollLeft = 1000000
    let maxScroll = creatorContainer.scrollLeft;
    creatorContainer.scrollLeft = maxScroll/2.1;
};
