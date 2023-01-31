# copy_paste_challenge

Provides a solution to the control-c, control-v challenge using JavaScript and Node.js. Tests using Jest were written whilst building functionality to handle string input and manipulate input based on copy/cut/paste commands within the input.

# Challenge criteria
When [CTRL+C] is encountered in the string, the string up to that point should be copied to a clipboard.
When [CTRL+X] is encountered, contents of the string up to that point should be cut from the sentence and copied to a clipboard.
When [CTRL+V] is encountered, the contents of the clipboard should be pasted into the sentence in its place.

To run the function do the following: 

- Clone / fork this repository 
- In your terminal navigate to the folder where the repo was cloned
- In your terminal run the command ```npm install``` to install dependencies e.g. Jest
- In the terminal, run the tests using this command: ```npm test```
- To run the function without tests, in your terminal, run ```node index.js``` - a console log will print out in the terminal the output of the string passed to the function.

Example sentences provided as part of the challenge are commented out in the index.js file. Switch out the string input in the line where the function is called, or add your own.
