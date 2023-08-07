let myLibrary = [];


// Object
function Book(title, arrayPos) {
  // the constructor...
	this.title = title;
  this.arrayPos = arrayPos;
  this.read = false;
}

// Adds books to both the array and creates card to be shown in the 'Library' section
function addBookToLibrary() {

  // Stores name of book
	let name = (prompt("Type the name of the book you want added to your library."));
  
  let cardNum = myLibrary.length;
  
  // Validates user input
  if ((name !== null) && (name !== "")) {
    let userInput = new Book(name, cardNum); // needs to take in name, array position #
    
    alert("You entered: " + userInput.title);
    
    myLibrary.push(userInput);
    
    
    alert("Book added!\n\n") 		 
    // console.log(userInput);
    return userInput; // returns object with (string, digit)

} 
  
  // Lets user know, no book was added because of empty input
  else {
    alert("No input provided.");
    let blank = "";
    return blank;
}
  
}

// Setup for removing book from myLibrary[] array
function removeBook(position){
  
  // myLibrary.removeAt(position); // not a function
  myLibrary.splice(position, 1);
  
}

// Displays Library to user    
function displayLibrary(){
  
  let counter = 0;

  while(counter < myLibrary.length){
  	console.log(myLibrary[counter].title); // Not displaying correctly
  	counter += 1;
  }    
  
  return;
}


// Listens for clicks for adding books to library
document.getElementById("svg-button").addEventListener("click", function(){
  
  // variables for selecting relevant library card sections
  const libraryDiv = document.querySelector(".library");
  
  let result = addBookToLibrary(); // returns 'book name' and 'array #'

  // Creates and adds card for 'library' section
  if(result[0] !== ""){
    const newDiv = document.createElement("div");
    const secDiv = document.createElement("div");
    const newPar = document.createElement("p");
    const label = document.createElement("label"); // check container
    const readDiv = document.createElement("input"); // check item
    const secPar = document.createElement("p");
    
    newDiv.className = "card";
    
    
    newPar.className = "title";
    // console.log(result.title);
    newPar.textContent = result.title; // book title
    
    label.className = "check";
    readDiv.type = "checkbox";
    readDiv.className = "checkbox";
    
    secDiv.className = "close";
    // console.log(result.arrayPos);
    secDiv.dataset.id = result.arrayPos; // card Number
    secDiv.id = "close";
    secDiv.textContent = "X";
    
    secPar.className = "description"
    secPar.textContent = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud...";
    
    libraryDiv.appendChild(newDiv);
    newDiv.appendChild(newPar);
    newDiv.appendChild(label);
    label.appendChild(readDiv);
    newDiv.appendChild(secDiv);
    newDiv.appendChild(secPar);
    
    // Place hover eventListeners for 'X' div in card creation function
    secDiv.addEventListener("mouseenter", function() {
      this.style.boxShadow = "0 4px 8px rgba(0, 0, 0, 0.2)";
    });

    secDiv.addEventListener("mouseleave", function() {
      this.style.boxShadow = "none";
    });
    
    // - Listen for card deletion click
    secDiv.addEventListener("click", function(){
      
      const card = secDiv.parentNode; // actual card
      const library = card.parentNode; // parent section
      
      // - delete the actual card elements
      library.removeChild(card);
      
      // - remove from the array - ** CURRENT WORK **
      let position = secDiv.dataset.id;
      
      removeBook(position);
      // displayLibrary();
      
    });
    
    
    readDiv.addEventListener("change", function() {
  
      // if checked modify book object 'read' parameter to 'true'
      if (readDiv.checked){
        result.read = true;
        // console.log(result.read);
      }
      
      // else modify book object 'read' parameter to 'false'
      else {
        result.read = false;
        // console.log(result.read);
      }
    });
    
    
  } // ends 'if userInput is valid' conditional statement

  
});

// For adding shadow when hovering over SVG button
const hoverButton = document.getElementById("svg-button");
const closeButton = document.getElementById("close");
// const readButton = document.getElementById("checkbox");

hoverButton.addEventListener("mouseenter", function() {
  this.style.boxShadow = "0 4px 8px rgba(0, 0, 0, 0.2)";
});

hoverButton.addEventListener("mouseleave", function() {
  this.style.boxShadow = "none";
});

// removeable after complete
closeButton.addEventListener("mouseenter", function() {
  this.style.boxShadow = "0 4px 8px rgba(0, 0, 0, 0.2)";
});
// removeable after complete
closeButton.addEventListener("mouseleave", function() {
  this.style.boxShadow = "none";
});


// Need eventListener to check if 'checked'



  




// Runs addition of Book object to Library array
// addBookToLibrary();
// displayLibrary();
