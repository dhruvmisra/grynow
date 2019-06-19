let i = 0, n = 24;
let creatorInterval;

// Creators' Data
let creatorPath = './assets/creators/';
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

for(i=0; i < creatorsData.length; i++) {
    creatorsData[i].thumbnail = 'https://i.ytimg.com/vi/' + creatorsData[i].videoId + '/mqdefault.jpg';
}

// Initial videos
let videos = document.getElementById('videos').children[0];
i = 0;

const baseUrl='https://www.googleapis.com/youtube/v3/videos?part=statistics&id=';
const apiKey = 'AIzaSyDJuSGSwGBHIW3KMSLWG_RJ6emvFbtYWRc';
let views;

// Array.prototype.forEach.call(videos.children, async (video) => {
//     video.getElementsByClassName('thumbnail')[0].src = creatorsData[i].thumbnail;
//     video.getElementsByClassName('info')[0].getElementsByClassName('name')[0].innerHTML = creatorsData[i].name;

//     await fetch(baseUrl + creatorsData[i++].videoId + '&key=' + apiKey)
//         .then(data => {
//             return data.json();
//         })
//         .then(res => {
//             views = res.items[0].statistics.viewCount;
//             console.log(views);
//             video.getElementsByClassName('info')[0].getElementsByClassName('stats')[0].getElementsByClassName('views')[0].innerHTML = views;
//         });
// });

let seeMore = async () => {
    console.log('seeMore')
    for(let j=0; j < 6; j++) {
        let video = document.createElement('div');
        let img = document.createElement('img');
        let info = document.createElement('div');
        let name = document.createElement('h5');
        let stats = document.createElement('div');
        let viewsIcon = document.createElement('i');
        let views = document.createElement('span');
    
        video.classList.add('card', 'video');
        img.classList.add('thumbnail');
        img.src = creatorsData[i].thumbnail;
        info.classList.add('info');
        name.classList.add('name', 'd-inline');
        stats.classList.add('stats', 'd-inline', 'float-right');
        viewsIcon.classList.add('fas', 'fa-eye');
        views.classList.add('views');

        name.innerHTML = creatorsData[i].name;

        stats.appendChild(viewsIcon);
        stats.appendChild(views);

        info.appendChild(name);
        info.appendChild(stats);

        video.appendChild(img);
        video.appendChild(info);

        video.setAttribute('alt', i++);
        
        videos.appendChild(video);

        await fetch(baseUrl + creatorsData[i].videoId + '&key=' + apiKey)
        .then(data => {
            return data.json();
        })
        .then(res => {
            views.innerHTML = res.items[0].statistics.viewCount;

        });

    }
    addListeners();
}
seeMore();

let button = document.getElementById('see-more');
button.addEventListener('click', seeMore);


// Youtube Iframe API
let tag = document.createElement('script');
tag.src = "https://www.youtube.com/iframe_api";
let firstScriptTag = document.getElementsByTagName('script')[0];
firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

let player;
function onYouTubeIframeAPIReady() {
    player = new YT.Player('player', {
        height: '360',
        width: '640'
    });
}

//Modal
let modal = document.getElementById("creatorModal");
function showModal() {
    console.log('modal');
    let current = event.currentTarget;
    let id = current.getAttribute('alt');
    let name = document.getElementById('creator-name');
    let img = document.getElementById('creator-img');
    let info = document.getElementById('creator-info');
    let iframe= player.getIframe();

    name.innerHTML = creatorsData[id].name;
    img.src = creatorPath + creatorsData[id].img;
    info.innerHTML = creatorsData[id].info;
    iframe.src = 'https://www.youtube.com/embed/' + creatorsData[id].videoId + '?enablejsapi=1';
    
    modal.style.display = "block";
}

window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
        player.stopVideo();
    }
}

function addListeners() {
    let shownVideos = document.getElementsByClassName('video');
    Array.prototype.forEach.call(shownVideos, (e) => {
        //console.log(e);
        e.addEventListener('click', showModal);
    })
}

