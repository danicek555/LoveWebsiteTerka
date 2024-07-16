//PO NAČTENÍ STRÁNKY ZMĚNA TEXTU JAK DLOUHO SPOLU JSME
document.addEventListener("DOMContentLoaded", function () {
  // Input date string
  var dateString1 = "8/11/2023";
  var dateArray1 = dateString1.split("/");
  var date1 = new Date(dateArray1[2], dateArray1[0] - 1, dateArray1[1]); // Month is 0-based in JavaScript dates
  
  // Get today's date
  var today = new Date();

  // Calculate the difference in milliseconds
  var difference = today - date1;

  // Convert milliseconds to days
  var daysDifference = Math.floor(difference / (1000 * 60 * 60 * 24));

  // Update the content of the h1 element
  document.getElementById("loveTimer").textContent += daysDifference + " days";
});



//ANIMACE TEXTU JAK VYJDE Z ČERNA
function showText3s() {
  document.getElementById("loveTimer").classList.add("visible");
}
function showText5s() {
  document.getElementById("date?").classList.add("visible");
  document.getElementById("noButton").classList.add("visible");
  document.getElementById("yesButton").classList.add("visible");
}
function showText7s() {
  document.getElementsByClassName("demonButton")[0].classList.add("visible");
  document
    .getElementsByClassName("bucketListButton")[0]
    .classList.add("visible");
  document.getElementsByClassName("DT")[0].classList.add("visible");
}

window.onload = function () { // Call the function after the website is loaded
  showText3s();
  setTimeout(showText5s, 3000); // Call showText5s after 3 seconds
  setTimeout(showText7s, 3000); // Call showText5s after 3 seconds
};



//TADY FUNKCE ABYCHOM TO MOHLI POUŽÍT ZNOVU PO PŘEJETÍ MYŠÍ PO TEXTU (možná optimalizace)
function howLong() {
  // Input date string
  var dateString1 = "8/11/2023";
  var dateArray1 = dateString1.split("/");
  var date1 = new Date(dateArray1[2], dateArray1[0] - 1, dateArray1[1]); // Month is 0-based in JavaScript dates

  // Get today's date
  var today = new Date();

  // Calculate the difference in milliseconds
  var difference = today - date1;

  // Convert milliseconds to days
  var daysDifference = Math.floor(difference / (1000 * 60 * 60 * 24));

  // Update the content of the h1 element
  document.getElementById("loveTimer").textContent += daysDifference + " days";
}



//NO BUTTON SCRIPT - JAK SE ZVĚTŠUJE A MĚNÍ TEXT
const noButton = document.getElementById("noButton");
var noCounter = 0;
// Attach an event listener to the button
noButton.addEventListener("click", function () {
  const yesButton = document.getElementById("yesButton");

  noCounter++;
  // Get current width and height
  const currentWidth = yesButton.offsetWidth;
  const currentHeight = yesButton.offsetHeight;

  // Calculate new width and height by adding 10% to the current values
  const newWidth = currentWidth * 2;
  const newHeight = currentHeight * 2;

  // Apply new width and height
  yesButton.style.width = newWidth + "px";
  yesButton.style.height = newHeight + "px";

  const currentFontSize = window.getComputedStyle(yesButton).fontSize;
  const newFontSize = parseFloat(currentFontSize) * 2; // Double the font size
  yesButton.style.fontSize = newFontSize + "px";
  noButton.textContent = "nope";
  if (noCounter === 2) {
    noButton.textContent = "I don´t want to";
  } else if (noCounter === 3) {
    noButton.textContent = "please";
  } else if (noCounter === 4) {
    noButton.textContent = "please I love you";
  } else if (noCounter === 5) {
    noButton.textContent = "I am sad";
  } else {
    //console.log("The value of noCounter is not 1, 2, 3, 4, or 5");
  }
 // console.log(noCounter);
});



//YES BUTTON - PŘESMĚROVÁNÍ
const yesButton = document.getElementById("yesButton");

yesButton.addEventListener("click", function () {
  window.location.href = "./yesButton.html";
});



//LOVERTIME MOUSEOVER A MOUSEOUT
const heading = document.getElementById("loveTimer");

heading.addEventListener("mouseover", function () {
  heading.textContent = "Click on me and see <"; // Change the text content on hover
  heading.addEventListener("click", function () {
    window.location.href = "./clickOnMe.html";
  });
});

heading.addEventListener("mouseout", function () {
  heading.textContent = "In love with you for: "; // Restore the original text content when mouse leaves
  howLong();
});


//DATE MOUSEOVER A MOUSEOUT
const date = document.getElementById("date?");

date.addEventListener("mouseover", function () {
  date.textContent = "and mooore?"; // Change the text content on hover
});

date.addEventListener("mouseout", function () {
  date.textContent = "Date?"; // Restore the original text content when mouse leaves
});

//ENVELOPE RANDOM POZICE + OSTATNÍ
const envelope = document.getElementsByClassName("envelope")[0];
function envelopeChangeLeft() {
  var randomLeftEnvelope = Math.floor(Math.random() * 90);
  envelope.style.left = randomLeftEnvelope + "%";
}

// Při načtení stránky nastaví náhodnou pozici obálky
window.addEventListener("load", function() {
  envelopeChangeLeft();
});

envelope.addEventListener("animationiteration", envelopeChangeLeft);

envelope.addEventListener("click", function (){
  window.location.href = "./flowerIndex.html";
})



//KDYŽ KLIKNEŠ NA SRDÍČKO PŘESMĚROVÁNÍ NA STRÁNKU
const srdicka = document.querySelectorAll("img[class^='srdicko']");
srdicka.forEach((image) => {
  image.addEventListener("click", function () {
    window.location.href = "./srdickoStranka.html";
  });
});


//BUCKET LIST BUTTON
const bucketList = document.getElementsByClassName("bucketListButton")[0];

bucketList.addEventListener("click", function () {
  window.location.href = "./bucketListButton.html";
});


//DEMON BUTTON 
const demonButton = document.getElementsByClassName("demonButton")[0];

demonButton.addEventListener("click", function () {
  window.location.href = "./demonButton.html";
});


//DT BUTTON
const DT = document.getElementsByClassName("DT")[0];

DT.addEventListener("click", function () {
  window.location.href = "./danTerka.html";
});
