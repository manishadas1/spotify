console.log("Welcome to Spotify");

// Initialize the variables

let songIndex = 0;
let audioElement = new Audio('1.mp3');
let masterPlay = document.getElementById('masterPlay');
let myProgressBar = document.getElementById('myProgressBar');
let gif = document.getElementById('gif');
let songItems = Array.from(document.getElementsByClassName('songItem'));


let songs = [
    { songName: "Warriyo - Mortals (feat, Laura Brehm) [NCS Release]", filePath: "1.mp3", coverPath: "1.jpg" },
    { songName: "Cielo - Huma-Huma", filePath: "2.mp3", coverPath: "2.jpg" },
    { songName: "DEAF KEV - invincible [NCS Release]-320k", filePath: "3.mp3", coverPath: "3.jpg" },
    { songName: "Different Heaven & EH!DE - My Heart [NCS Release]-320k", filePath: "4.mp3", coverPath: "4.jpg" },
    { songName: "Janji-Heroes-Tonight-feast [NCS Release] ", filePath: "5.mp3", coverPath: "5.jpg" },
    { songName: "Salam-e-Ishq", filePath: "6.mp3", coverPath: "6.jpg" },
    { songName: "Salam-e-Ishq", filePath: "7.mp3", coverPath: "7.jpg" },
    { songName: "Salam-e-Ishq", filePath: "8.mp3", coverPath: "8.jpg" },
    { songName: "Salam-e-Ishq", filePath: "9.mp3", coverPath: "9.jpg" },
    { songName: "Salam-e-Ishq", filePath: "10.mp3", coverPath: "10.jpg" }
];

songItems.forEach((element, i) => {
    // console.log(element, i);
    element.getElementsByTagName("img")[0].src = songs[i].coverPath;
    element.getElementsByClassName("songName")[0].innerText = songs[i].songName;
})


//Handle play/pause click
masterPlay.addEventListener('click', () => {
    if (audioElement.paused || audioElement.currentTime <= 0) {
        audioElement.play();
        masterPlay.classList.remove('fa-play-circle');
        masterPlay.classList.add('fa-pause-circle');
        gif.style.opacity = 1;
    } else {
        audioElement.pause();
        masterPlay.classList.remove('fa-pause-circle');
        masterPlay.classList.add('fa-play-circle');
        gif.style.opacity = 0;
    }
})



//listen to events
audioElement.addEventListener('timeupdate', () => {
    // console.log('timeupdate');
    //update Seekbar
    progress = parseInt((audioElement.currentTime / audioElement.duration) * 100);
    console.log(progress);
    myProgressBar.value = progress;
})

myProgressBar.addEventListener('change', () => {
    audioElement.currentTime = myProgressBar.value * audioElement.duration / 100;
})



const makeAllPlays = () => {
    Array.from(document.getElementsByClassName('songItemPlay')).forEach((element) => {
        element.classList.remove('fa-pause-circle');
        element.classList.add('fa-play-circle');
    })
}

Array.from(document.getElementsByClassName('songItemPlay')).forEach((element) => {
    element.addEventListener('click', (e) => {
        makeAllPlays();
        index = parseInt(e.target.id);
        e.target.classList.remove('fa-play-circle');
        e.target.classList.add('fa-pause-circle');
        audioElement.src = '${index+1}.mp3';
        audioElement.currentTime = 0;
        audioElement.play();
        masterPlay.classList.remove('fa-play-circle');
        masterPlay.classList.add('fa-pause-circle'); 
    })
})






