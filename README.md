# mouseControl
Used for mapping F-keys to move the mouse to the right or center monitors

## Usage
* You'll want to identify what the X,Y coordinates are where you want your mouse to go, then set them in the center.js, left.js and right.js files. If you move your mouse to the desired position, then run any of those scripts on the command line like `node center.js` it will spit out the current coordinates that you can then enter in each file.

## Use with AlfredApp
* Create a new Workflow called Mouse Center
* Add a trigger for "Keyword"
  * I set the Keyword trigger to Ctrl+Alt+Cmd + Scroll Lock for the center screen
* Add an Action for "Run Script"
  * Using zsh or bash, I set the full path to the Node version and the full path to the center.js script like so: `/Users/brock/.nvm/versions/node/v10.12.0/bin/node ~/research/mouseControl/center.js`
 
