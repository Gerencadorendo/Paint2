 var mouseEvent = "empty";
    var lastPositionX, lastPositionY;

    canvas = document.getElementById('myCanvas');
    ctx = canvas.getContext("2d");
    
    color = "black";
    widthLine = 1;

    canvas.addEventListener("mousedown", myMouseDown);
    function myMouseDown(e)
    {
         mouseEvent = "mouseDown";
    }

    canvas.addEventListener("mouseup", myMouseUp);
    function myMouseUp(e)
    {
         mouseEvent = "mouseUp";
    }

    canvas.addEventListener("mousemove", myMouseMove);
    function myMouseMove(e)
    {
        PositionMouseX = e.clientX - canvas.offsetLeft
        PositionMouseY = e.clientY - canvas.offsetTop

        if (mouseEvent == "mouseDown") {
            ctx.beginPath();
            ctx.strokeStyle = color;
            ctx.lineWidth = widthLine;

            ctx.moveTo(lastPositionX, lastPositionY);

            ctx.lineTo(PositionMouseX, PositionMouseY);
            ctx.stroke();
        }

        lastPositionX = PositionMouseX;
        lastPositionY = PositionMouseY;
    }
    var lastPositionOfX, lastPositionOfY;
color = "black";
widthOfLine = 2;

canvas = document.getElementById('myCanvas');
ctx = canvas.getContext("2d");

var width = screen.width;
newWidth = screen.width - 70;
newHeight = screen.height - 300;

	if(width < 992)
	{
	document.getElementById("myCanvas").width = newWidth
    document.getElementById("myCanvas").height = newHeight
    document.body.style.overflow ="hidden"
	}
	
    
canvas.addEventListener("touchstart", myTouchStart);
function myTouchStart(e) 
{
    color = document.getElementById("color").value;
    widthOfLine = document.getElementById("widthOfLine").value;
}


canvas.addEventListener("touchmove", myTouchMove);
function myTouchMove(e) 
{
    currentPositionOfTouchX = e.touches[0].clientX - canvas.offsetLeft
    currentPositionOfTouchY = e.touches[0].clientY - canvas.offsetTop
    ctx.beginPath();
    ctx.strokeStyle = color;
    ctx.lineWidth = widthOfLine;

    ctx.moveTo(lastPositionOfX, lastPositionOfY);

    ctx.lineTo(currentPositionOfTouchX, currentPositionOfTouchY);
    ctx.stroke();

    lastPositionOfX = currentPositionOfTouchX
    lastPositionOfY = currentPositionOfTouchY
}

   