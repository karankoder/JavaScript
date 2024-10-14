// Window is the global object in the browser
/* Window - DOM and BOM
    - DOM (Document Object Model): Represents the structure of the HTML document as a tree of objects. Each element in the HTML document is represented as a node in the tree.
    - BOM (Browser Object Model): Represents the browser itself and provides methods and properties to interact with the browser, such as the window object, navigator object, and location object.
    - The window object is the global object in the browser environment, meaning that all global variables and functions are properties of the window object.
    - You can access the window object directly or by using the global scope.
    - Example: 
      console.log(window.innerWidth); // Get the width of the browser window
      console.log(window.innerHeight); // Get the height of the browser window
      console.log(window.location.href); // Get the current URL of the page
      console.log(window.navigator.userAgent); // Get the user agent string of the browser
    - The window object also provides methods for opening new windows, alerting messages, and more.
    - Example:
      window.alert('Hello, World!'); // Display an alert dialog
      window.open('https://www.example.com'); // Open a new window with the specified URL
    - The window object is also the context for executing JavaScript code in the browser.
    - Example:
      function myFunction() {
         console.log('This function is executed in the window context');
      }
      myFunction(); // Call the function
    - In summary, the window object is a crucial part of the browser environment, providing access to the DOM, BOM, and global scope.

    Example of BOM - alert, confirm, prompt, location.href
 */

console.log(typeof document); // object
