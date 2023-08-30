const myImage = document.querySelector("img");
const myButton = document.querySelector("button");
const myHeading = document.querySelector("h1");

// Function to change image, background color, and heading text
function changeUser() {
  const mySrc = myImage.getAttribute("src");
  if (mySrc === "images/firefox-icon.png") {
    myImage.setAttribute("src", "images/firefox2.png");
    document.body.style.backgroundColor = "white";
    myHeading.textContent = "Is Brave even cooler?";
  } else {
    myImage.setAttribute("src", "images/firefox-icon.png");
    document.body.style.backgroundColor = "#FF9500";
    myHeading.textContent = "Mozilla is cool";
  }
}

// Apply the changeUser function when mouse is over the image
myImage.addEventListener("mouseover", changeUser);

// Apply the changeUser function when the button is clicked
myButton.addEventListener("click", changeUser);
