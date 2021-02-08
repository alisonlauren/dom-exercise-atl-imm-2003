//Start index at beginning, index is less than length of list
//and move up the list on the indexes
for (let index = 0; index < addresses.length; index++) {
    // creating a new element, an achor tag
    var NewElement = document.createElement('a');
    //new elelent setting attribute to link while looping through the indexes
    NewElement.setAttribute('href', addresses[index]);
    //change textcontent of new element to click here and the addresses index
    NewElement.textContent = `click here to enter this site ${addresses[index]}`;
    //in a new div, append the new element
    aNewDiv.appendChild(NewElement);
    //add to the document body of the new element
    document.body.appendChild(aNewDiv)
    console.log(aNewDiv);

}