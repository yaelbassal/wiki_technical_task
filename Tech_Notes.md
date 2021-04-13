# Notes:

Steps for development:
1. Reviewed the task.
2. Did some basic research into mySQl, html forms, php, and reading txt files in Node. Technologies that were new/newer to me. Get a since about the technologies independtly and how they work together.

3. Package.json

- remembers all packages that your app depends on and their versions

- A JSON file that exists in the root of the parent directory of a Javascript/Node project. Holds metadata relevant to the project (describes the app, how it is performing, and the technologies it uses) and is used for managing dependencies, scripts, versions.

- ran npm(node package manager) init in the parent directory to create a package.json file. Created script npm start so that when the command is run in the terminal, the server automatically runs. The script tells the computer to go into my server directory and run index.js.

- when I was ready to start developing testing for the app, planned on going back in to edit the test script.

4. Server

- set up a server using express. This is one way we learned to do it in my program. Express is software that works with the node - a js runtime environment - that helps you manage multiple different http requests at a specific url. Used documentation from express for reference and prior apps I have built.
https://expressjs.com/en/starter/hello-world.html

- uses get, post, put, delete vs. Create, Read, Update, and Delete (http action verbs)

- Node is non blocking, which means methods execute asynchronously Vs. blocking where methods execute synchronously.

- Node Concepts:
  - Event Driven Programming (checks for events using an event listener, then executes an event "handler", typically a callback function or method). Res only runs once when we get a request.
  - Node Event Loop - can tell when something is happening/waiting for an http request. The event loop works synchronously, it is single thread, so you must use async functions to run asynchronously.

- Express middlewares are functions that process the incoming requests before handling them down to the routes

- Alternative to express: could use the http module from node.
https://www.w3schools.com/nodejs/met_server_listen.asp

5. public folder
- holds static files. Files that do not change.
- holds html pages, a txt document, and style document.
- looking back, index.html is not static b/c of its dynamic features, could have put it into a folder called "views".
- index.html
  - define attributes for your tags. the name property is the one that req.body uses when it is displayed.
  - define your route in the form tag. This route connects to the routes defined in our server file. When the form is submitted, as we can see from the server file, the user is redirected to the confirmation page.
  - The id attribute is most used to point to a style in a style sheet, and by JavaScript (via the HTML DOM) to manipulate the element with the specific id.
  - The for attribute specifies which form element a label is bound to. Needs to be the same as id.
  - For <button>, <input> and <option> elements, the value attribute specifies the initial value of the element. Name attribute is the field and the value attribute is set as the values in req.body when the form is submitted. Certain inputs such as text don't seem to need it.

- countries list dropdown: at first I thought that I had to use php, but then realized I can do it just using js. I've never programmed with php.
 - turned the source into a text file.
 - made a util file to hold a function that reads a text file using fs module (file system)





repository - rather db.

# Dropdown
- Frontend
- github url
1. fetch/ajax remote route the content of a page. index.html -- github url
2. string swap out fs.
3. in index.html, when document.ready, then call function. Can be in util.js
