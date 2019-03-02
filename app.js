var requestAnimationFrame = window.requestAnimationFrame ||
                            window.mozRequestAnimationFrame ||
                            window.webkitRequestAnimationFrame ||
                            window.msRequestAnimationFrame ||
function (callback) {
    setTimeout (callback, 1000 / 30);
};

var canvas = document.getElementById("canvas-id");
canvas.width = window.innerWidth - 5;
canvas.height = window.innerHeight - 5;
var context = canvas.getContext("2d");

//==========================//

function create2d(n, m, v) {
    var array = [];
    for (var i = 0; i < n; ++i) {
        array[i] = [];
        for (var j = 0; j < m; ++j) {
            array[i][j] = v;
        }
    }
    return array;
}

var map = create2d(100, 100, 0);
var CubeSize = 20;
var mapSize = 100;

var mouseY,
    mouseX;

window.addEventListener("keydown", function (args) {
    
}, false);

window.addEventListener("keyup", function (args) {

}, false);

window.addEventListener("mousemove", function (args) {
    
    mouseX = args.clientX-canvas.offsetLeft;
    mouseY = args.clientY-canvas.offsetTop;
    
}, false);

window.addEventListener("mousedown", function (args) {
    
    map[Math.floor(mouseX/CubeSize)][Math.floor(mouseY/CubeSize)] = 1;
    
}, false);

function update() {
    
    setTimeout(update, 10);
}
function draw() {
    context.clearRect(0, 0, canvas.width, canvas.height);
    context.globalAlpha = 1;
    
    var i, j;
    for(i = 0;i < mapSize;i ++){
        for(j = 0;j < mapSize;j ++){
            if(map[i][j] == 0){
                context.fillStyle = "rgb(255, 0, 0)";
                context.fillRect(i * CubeSize, j * CubeSize, CubeSize-1, CubeSize-1);
            }
        }
    }
    
    requestAnimationFrame(draw);
}
update();
draw();
