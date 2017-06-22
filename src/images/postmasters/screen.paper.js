
var point = view.center;
var highlight = view.center;

var colors = [];
var cycles = 4;
for (var i = 0, l = 100; i < l; i++) {
  var brightness = 1 - (i / l) * 1.75;
  var hue = i / l * cycles * -50;
  var color = {
    hue: hue,
    saturation: 1,
    brightness: brightness
  };
  colors.push(color);
}

var mouseMove = false;

var path = new Path.Rectangle({
  rectangle: view.bounds,
  fillColor: {
    origin: point,
    destination: point,
    gradient: {
      stops: colors,
      radial: true
    }
  }
});

point = new Point(0,0);
highlight = point;

var color = path.fillColor;
var destination = color.destination; 
var gradient = color.gradient;
var mouseDown = false;
var mousePoint = view.center;

var lastmousex=-1; 
var lastmousey=-1;
var mousetravel = 41;


function trackMouse(e) {
  mousePoint = new Point(e.clientX || e.pageX, e.clientY || e.pageY);
   var mousex = e.clientX || e.pageX;
   var mousey = e.clientY || e.pageY;
   if (lastmousex > -1)
       mousetravel += Math.max( Math.abs(mousex-lastmousex), Math.abs(mousey-lastmousey) )/10;
   lastmousex = mousex;
   lastmousey = mousey;
}

document.addEventListener("mousemove", function(e) {
   trackMouse(e);
});

document.getElementById('Postmasters').addEventListener("mousedown", function(event) {
  event.preventDefault();
  mouseDown = true;
});

document.addEventListener("mouseup", function() {
  mouseDown = false;
});

document.getElementById('Postmasters').addEventListener("touchmove", function(e) {
  trackMouse(e);
  mouseDown = true;
});

document.addEventListener("touchend", function() {
  mouseDown = false;
});


var grow = false;
var vector = new Point(150, 0);

function onFrame() {
  for (var i = 0, l = gradient.stops.length; i < l; i++)
    gradient.stops[i].color.hue -= 0.5;

  if (mouseMove === false)
    //color.destination = point - [0.01, 0];
  
  //console.log(color.destination);
  
  //color.destination -= 0.1;
  point = point + (mousePoint - point) / 30;

  if (mouseDown && mousetravel < window.innerWidth*4) {
    mousetravel *= 1.08;
  } else if (mousetravel > 40) {
    mousetravel *= 0.96;
  } else {
    mousetravel = 40;
  }

  highlight = highlight + (mousePoint - highlight) / 10;

  mouseMove = false;
  color.origin = highlight;
  color.destination = point + [mousetravel,mousetravel];
  color.highlight = mousePoint;
}

window.addEventListener("resize", onResize);

function onResize(event){
    view.bounds.width = window.innerWidth;
    view.bounds.height = window.innerHeight;
    path.bounds = view.bounds;
}