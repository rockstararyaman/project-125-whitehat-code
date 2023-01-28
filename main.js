difference = 0;
rightWrist_x = 0;
leftWrist_x = 0;

function setup() {
    video = createCapture(500, 550);
    video.size(500, 550);

    canvas = createCanvas(600, 470);
    canvas.position(560, 160);

    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotPoses);
}

function modelLoaded() {
    console.log('PoseNet is now initialised');
}

function draw() {
    background("#39e75f");

    document.getElementById("name_size").innerHTML = "Size of name is " + difference +"px";
    textSize(difference);
    fill('#1E90FF');
    text('Furious', 50, 400);
}

function gotPoses(results,error){
    if(error){
        console.error(error);
    }
    if(results.length > 0){
        console.log(results);

        leftWrist_x = results[0].pose.leftWrist.x;
        rightWrist_x = results[0].pose.rightWrist.x;

        difference = floor(leftWrist_x - rightWrist_x);

        console.log("rightWrist_x = "+results[0].pose.rightWrist.x + " rightWrist_y = "+results[0].pose.rightWrist.y);
        console.log("leftWrist_x = "+results[0].pose.leftWrist.x + " leftWrist_y = "+results[0].pose.leftWrist.y);
    }
}


