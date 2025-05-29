// Playlist de músicas
const playlist = [
    {
        name: "Música 1"
        scr:"songs/Touch - Anno Domini Beats.mp3"
        img:"Images/next.png"
    },
    {
        name: "Música 2",
        scr:"musica2.mp3",
        img:"capa2.jpg"
    },
    {
        name: "Música 3",
        scr:"musica3.mp3",
        img:"capa3.jpg"
    },
]

// Elementos DOM
const audio = document.getElementById('audio-play');
const playBtn = document.getElementById('play');
const nextBtn = document.getElementById('next');
const prevBtn = document.getElementById('prev');
const musicName = document.getElementById('song-title');
const musicImage = document.getElementById('song-image-img');

let currentIndex = 0;
let isPlaying = false;

// Carregar música
function loadMusic(index) {
    const music = playlist[index];
    musicName.textCotent = music.name;
    musicImage.src = music.name;
    audio.src = music.src;
}

// Play / Pause
function playMusic() {
    if (isPlaying) {
        audio.pause();
        playBtn.textContent = '';
    } else {
        audio.play();
        playBtn.textContent = '';
    }
    isPlaying = !isPlaying;
}

// Próxima música
function nextMusic() {
    currentIndex = (currentIndex + 1) % playlist.length;
    loadMusic(currentIndex);
    audio.play();
    playBtn.textContent = '';
    isPlaying = true;
}

// Música anterior
function prevMusic() {
    currentIndex = (currentIndex - 1 + playlist.length) % playlist.length;
    loadMusic(currentIndex);
    audio.play();
    playBtn.textContent = '';
    isPlaying = true;
}

// Eventos dos botões
playBtn.addEventListener('click', playMusic);
nextBtn.addEventListener('click', nextMusic);
prevBtn.addEventListener('click', prevMusic);

loadMusic(currentIndex);
