// Write your code here!
// remove the <main> node with id 'main'
document.querySelector("#main").remove();

// create a new <h1> node with id 'victory' and the text "YOUR-NAME is the champion"
let newHeader = document.createElement("h1");
newHeader.id = "victory";
newHeader.innerHTML = "YOUR-NAME is the champion";

// add the new <h1> node to the body of the HTML
document.body.appendChild(newHeader);
