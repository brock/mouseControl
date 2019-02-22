var robot = require('robotjs');

module.exports = function(x, y) {
    console.log("Screen size is: ", robot.getScreenSize());
    var initial = robot.getMousePos();
    console.log("Mouse is at x:" + initial.x + " y:" + initial.y);

    robot.moveMouse(x, y);

    var final = robot.getMousePos();
    console.log("Mouse is at x:" + final.x + " y:" + final.y);

};

