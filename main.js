song = "";

function preload() {
    song = loadSound("music.mp3");
}

function setup() {
    canvas = createCanvas(600, 500);
    canvas.center();
    video = createCapture(VIDEO);
    video.hide()
}

function draw() {
    image(video, 50, 50, 600, 500)
}

function start() {
    song.play();
}