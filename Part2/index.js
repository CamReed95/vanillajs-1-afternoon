console.log('The House always wins!');

// let cardHearts = document.getElementsById('hearts');
// let cardClubs = document.getElementsById('clubs');
// let cardSpades = document.getElementsById('spades');
// let cardDiamonds = document.getElementsById('diamonds';)

let idInput = document.getElementById('idInput')
let colorInput = document.getElementById('colorInput')

function setCard() {
    let card = document.getElementById(idInput.value);
    card.style.color = colorInput.value;
}
 function reset() {
     let cards = document.getElementsByTagName('section') 
     
     cards[0].style.color = 'gray'
     cards[1].style.color = 'gray'
     cards[2].style.color = 'gray'
     cards[3].style.color = 'gray'
     
 }








// - Open `index.js`.
// - Target the card that is being selected in the function `setCard`.
// - Using the information gathered from the second input field, add the `color` style to the targeted card element.
//     - Assign the appropriate color to each card (Diamonds/Hearts = red, Clubs/Spades = black).

// - The final thing we are going to do is apply a color to the section using the second input we have set up.
// - Using `card.style.color` set it equal to `colorInput.value`, being whatever is typed into the second input.
// - If done properly the text and symbol should change colors appropriately.

