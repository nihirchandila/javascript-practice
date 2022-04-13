//canvas
let canvas = document.getElementById('myCanvas');
let ctx = canvas.getContext('2d');
//setting up height and width of canvas
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
//canvas styling
ctx.strokeStyle = 'rgb(255, 0, 0)';
ctx.lineJoin = 'round';
ctx.lineCap = 'round';
ctx.lineWidth = 10;

// variables
let isDrawing = false;
let lastX = 0;
let lastY= 0;
// drawing function
function draw(e){
    if(!isDrawing){
        return;
    }
    ctx.beginPath();
    ctx.moveTo(lastX,lastY);
    ctx.lineTo(e.offsetX,e.offsetY);
    ctx.stroke();
    console.log(e);
    // declare lastX and lastY so it doesn't start all over from 0
    lastX = e.offsetX;
    lastY = e.offsetY;
    ctx.strokeStyle = `rgb(${lastY},${lastX}, 0)`;
}
// to get mouse movement
canvas.addEventListener('mousemove', draw);
canvas.addEventListener('mousedown', function(e){ // can aslo be written as - canvas.addEventListener('mousedown',()=> isDrawing = true);
    isDrawing = true;
    lastX = e.offsetX;
    lastY = e.offsetY;
});
// stop the function on mouse up
canvas.addEventListener('mouseup', function(){
    isDrawing = false;
});
// stop the function on mouseout
canvas.addEventListener('mouseout', function(){
    isDrawing = false;
});

//download image function
download_img = function(el) {
    // get image URI from canvas object
    var imageURI = canvas.toDataURL("image/jpg");
    el.href = imageURI;
};
