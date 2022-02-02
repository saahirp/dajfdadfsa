canvas = document.getElementById("firstcanvas");
ctx = canvas.getContext("2d");

rover_width = 100;
rover_height = 90;
rover_x = 50;
rover_y = 50;
background_img = "mars.jpg";
rover_img = "roverspace.png.png";
function add(){
background_imgTag = new Image();
background_imgTag.onload = uploadBackground;
background_imgTag.src = background_img;

rover_imgTag = new Image();
rover_imgTag.onload = uploadrover;
rover_img.src = rover_img;
}
function uploadBackground(){
    ctx.drawImage(background_imgTag, 0, 0 , canvas.width,canvas.height);
}
function uploadrover(){
    ctx.drawImage(rover_imgTag, rover_x, rover_y, rover_width, rover_height);
}
window.addEventListener("keydown", my_keydown);
function my_keydown(e){
    keyPressed = e.keyCode;
    console.log(keyPressed);
    if(keyPressed == "38"){
        up();
        console.log("up");
    }
    if(keyPressed == "40"){
        down();
        console.log("down");
    }
    if(keyPressed == "37"){
        left();
        console.log("left");
    }
    if(keyPressed == "39"){
        right();
        console.log("right");
    }
}