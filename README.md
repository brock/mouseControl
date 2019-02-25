# mouseControl
Used for mapping F-keys to move the mouse to the right or center monitors

## Use with AlfredApp
* Create a new Workflow called Mouse Center
* Add a trigger for "Keyword"
  * I set the Keyword trigger to Ctrl+Alt+Cmd + Scroll Lock for the center screen
* Add an Action for "Run Script"
  * Using zsh or bash, I set the full path to the Node version and the full path to the center.js script like so: `/Users/brock/.nvm/versions/node/v10.12.0/bin/node ~/research/mouseControl/center.js`
 
