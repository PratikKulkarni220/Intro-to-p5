function preload(){

}

function setup(){
    canvas= createCanvas(640, 480);
    canvas.center();
    video= createCapture(VIDEO);
    video.hide();

}

function draw(){
    image(video, 0, 0, 640, 480);
    fill(255, 0, 0);
    stroke(255, 0 , 0);
    circle( 50, 50, 80);

    fill(0, 128, 0);
    stroke(0, 128 , 0);
    rect( 90, 40, 460, 80);

    rect( 90, 420, 460, 80);
}