//P5js functions
function preload(){
    //There is nothing here.
}

function setup(){
    video = createCapture(VIDEO);
    video.size(420,520);
    
    canvas = createCanvas(420,420);
    canvas.position(520,250);

    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotPoses);
}

function modelLoaded(){
    console.log('model loaded');
}

function gotPoses(results){
    if(results.length > 0){
        console.log(results);
    }
}

function draw(){
    background('#value');
}