function preload(){
mustache=loadImage="https://i.postimg.cc/3x3QzSGq/m.png";
}

function setup(){
canvas=createCanvas(350,350);
canvas.center();

video=createCapture(VIDEO);
video.size(350,350)
video.hide();

posenet=ml5.poseNet(video,modelLoaded)

posenet.on("pose",gotPoses)

}


function draw(){
image(video,0,0,350,350);
image(mustache,nose_x,nose_y,30,30)
}

function snapshot(){
    save("Moustache/Lipstick_filter.png");
}


function modelLoaded(){
    console.log("POSENET IS iNITIALIZED")
}

function gotPoses(results){
    if(results.length>0){
        console.log(results);
        nose_x=results[0].pose.nose.x-20;
        nose_y=results[0].pose.nose.y-20;
        console.log("Nose x ="+nose_x);
        console.log("nose y ="+nose_y);
    }
}