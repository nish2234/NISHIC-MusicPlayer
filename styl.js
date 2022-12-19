console.log("welcome to the bass boosted programme");
//initializing variables
let index = 1;
let audioElement = new Audio("1.mp3");
let masterPlay = document.getElementById("masterplay");
let myProgressBar = document.getElementById("ran");
let myGif = document.getElementById("gif");
let speaker = document.getElementById("speaker");

let songs = ["Insane - Ap Dhillon", "Excuses - AP Dhillon", "Brown Munde - AP Dhillon", "No Lie- Sean Paul", "Amplifier - Imran Khan", "Eshay - Gucci Dassy", "Ae Zindagi - Arijit Singh", "Brown Rang - Honey Singh", "swag mera desi - Raftaar"];

//handle play and pause click
masterPlay.addEventListener('click', () => {
    if (audioElement.paused || audioElement.currentTime == 0) {
        audioElement.play();
        masterPlay.classList.remove("fa-play-circle");
        masterPlay.classList.add("fa-pause-circle");
        myGif.style.opacity = 1;
        speaker.style.opacity = 1;
        let str = document.getElementById("changename");
        str.innerHTML = songs[index - 1];
        let ch = document.getElementById((index - 1) + "");
        ch.classList.remove("fa-play-circle");
        ch.classList.add("fa-pause-circle");
    } else {
        audioElement.pause();
        let ch = document.getElementById((index - 1) + "");
        ch.classList.remove("fa-pause-circle");
        ch.classList.add("fa-play-circle");
        masterPlay.classList.remove("fa-pause-circle");
        masterPlay.classList.add("fa-play-circle");
        myGif.style.opacity = 0;
        speaker.style.opacity = 0;
    }
})


//handling progressBar
audioElement.addEventListener('timeupdate', () => {

    let progress = parseInt((audioElement.currentTime / audioElement.duration) * 100);
    myProgressBar.value = progress;
    if (audioElement.currentTime == audioElement.duration) {
        if (index > 8) {
            index = 1;
        } else {
            index += 1;
        }

        xt = index + "";
        audioElement.src = xt + '.mp3';
        console.log(xt);
        audioElement.currentTime = 0;
        audioElement.play();
        let str = document.getElementById("changename");
        str.innerHTML = songs[index - 1];
        myGif.style.opacity = 1;
        speaker.style.opacity = 1;
        masterPlay.classList.remove("fa-play-circle");
        masterPlay.classList.add("fa-pause-circle");
        makeallplay();
        let ch = document.getElementById((index - 1) + "");
        ch.classList.remove("fa-play-circle");
        ch.classList.add("fa-pause-circle");

    }

})
myProgressBar.addEventListener('change', () => {
    audioElement.currentTime = (myProgressBar.value * audioElement.duration) / 100;

})
function makeallplay() {
    Array.from(document.getElementsByClassName("songItemPlay")).forEach((element) => {


        element.classList.remove("fa-pause-circle");
        element.classList.add("fa-play-circle");




    })


}

Array.from(document.getElementsByClassName("songItemPlay")).forEach((element) => {
    element.addEventListener('click', () => {

        makeallplay();
        element.classList.remove("fa-play-circle");
        element.classList.add("fa-pause-circle");
        index = parseInt(element.id) + 1;
        xt = index + "";
        audioElement.src = xt + '.mp3';
        audioElement.currentTime = 0;
        audioElement.play();
        let str = document.getElementById("changename");
        str.innerHTML = songs[index - 1];
        myGif.style.opacity = 1;
        speaker.style.opacity = 1;
        masterPlay.classList.remove("fa-play-circle");
        masterPlay.classList.add("fa-pause-circle");



    })

})

document.getElementById("forward").addEventListener('click', () => {
    if (index > 8) {
        index = 1;
    } else {
        index += 1;
    }

    xt = index + "";
    audioElement.src = xt + '.mp3';
    console.log(xt);
    audioElement.currentTime = 0;
    audioElement.play();
    let str = document.getElementById("changename");
    str.innerHTML = songs[index - 1];
    myGif.style.opacity = 1;
    speaker.style.opacity = 1;
    masterPlay.classList.remove("fa-play-circle");
    masterPlay.classList.add("fa-pause-circle");
    makeallplay();
    let ch = document.getElementById((index - 1) + "");
    ch.classList.remove("fa-play-circle");
    ch.classList.add("fa-pause-circle");


})
document.getElementById("backward").addEventListener('click', () => {
    if (index == 1) {
        index = 9;
    } else {
        index -= 1;
    }

    xt = index + "";
    audioElement.src = xt + '.mp3';
    console.log(xt);
    audioElement.currentTime = 0;
    audioElement.play();
    let str = document.getElementById("changename");
    str.innerHTML = songs[index - 1];
    myGif.style.opacity = 1;
    speaker.style.opacity = 1;
    masterPlay.classList.remove("fa-play-circle");
    masterPlay.classList.add("fa-pause-circle");
    makeallplay();
    let ch = document.getElementById((index - 1) + "");
    ch.classList.remove("fa-play-circle");
    ch.classList.add("fa-pause-circle");

})








