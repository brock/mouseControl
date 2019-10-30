var robot = require('robotjs');

var click = function() {
	console.log("Screen size is: ", robot.getScreenSize());
	var initial = robot.getMousePos();
	console.log("Mouse is at x:" + initial.x + " y:" + initial.y);	
	robot.moveMouse(4029, 1452);
	robot.mouseClick()
	robot.moveMouse(initial.x, initial.y);
}

click()

setInterval(click, 30000);