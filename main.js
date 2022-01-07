song = "";

function preload(){
    song = loadSound("music.mp3");
}

leftX = 0;
leftY = 0;

rightX = 0;
rightY = 0;

function setup(){
    canvas = createCanvas(600, 500);
    canvas.center();

    video = createCapture(VIDEO);
    video.hide();

    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotPoses);
}

function modelLoaded(){
    console.log("PoseNet is Initialized");
}


function gotPoses(results){
    if(results.length > 0){
        console.log(results);
        leftX = results[0].pose.leftWrist.x;
        leftY = results[0].pose.leftWrist.y;
        console.log("Left Wrist's X -"+leftX+" Left Wrist's Y - "+leftY);

        rightX = results[0].pose.rightWrist.x;
        rightY = results[0].pose.rightWrist.y;
        console.log("Right Wrist's X - "+rightX+" Right Wrist's Y - "+rightY);
    }
}

function draw(){
    image(video, 0, 0, 600, 500);
}

function uhoh(){
    song.play();
    song.setVolume(1);
    song.rate(1);
}
