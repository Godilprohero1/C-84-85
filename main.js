canvas = document.getElementById("myCanvas")
ctx = canvas.getContext("2d");

nasa_mars_images_array = ["Nasa1.jpg", "nasa2.jpg", "nasa3.jpg", "nasa4.jpg"];

random_number = Math.floor(Math.random() * 4);
console.log(random_number);

mars_img = nasa_mars_images_array[random_number];

console.log("background image =" + mars_img);


 rover_img = "rover.png"

 rover_x = 10;
 rover_y = 10;
 rover_width = 100;
 rower_height = 90;

 function add_img(){
     background_imgtag = new Image();
     background_imgtag.onload = uploadbackimg;
     background_imgtag.src = mars_img;


     rover_imgtag = new Image();
     rover_imgtag.onload = uploadroverimg;
     rover_imgtag.src = rover_img;
 }

function uploadbackimg(){
    ctx.drawImage(background_imgtag, 0, 0, canvas.width, canvas.height);
}
function uploadroverimg(){
    ctx.drawImage(rover_imgtag, rover_x, rover_y, rover_width, rower_height);
}

window.addEventListener("keydown" ,my_keydown);


function my_keydown(e){
keyPressed = e.keyCode;
console.log(keyPressed);

if(keyPressed == '38'){
    up();
    console.log("up");
}
if(keyPressed == '40'){
    down();
    console.log("down");
}
if(keyPressed == '37'){
    left();
    console.log("left");
}
if(keyPressed == '39'){
    right();
    console.log("right");
}
}


function up()
{
    if(rover_y >= 0){
        rover_y = rover_y - 10;
        console.log("When up Arrow is pressed, x = "+ rover_x +"y = "+rover_y);
        uploadbackimg();
        uploadroverimg();
    }
}

function down()
{
    if(rover_y <=550){
        rover_y = rover_y + 10;
        console.log("When Down Arrow is pressed, x = "+ rover_x +"y = "+rover_y);
        uploadbackimg();
        uploadroverimg();
    }
}

function left()
{
    if(rover_x >= 0){
        rover_x = rover_x - 10;
        console.log("When Left Arrow is pressed, x = "+ rover_x +"y = "+rover_y);
        uploadbackimg();
        uploadroverimg();
    }
}

function right()
{
    if(rover_x <= 750){
        rover_x = rover_x + 10;
        console.log("When right Arrow is pressed, x = "+ rover_x +"y = "+rover_y);
        uploadbackimg();
        uploadroverimg();
    }
}