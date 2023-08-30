const myImage = document.querySelector("img");
const myButton = document.querySelector("button");
const myHeading = document.querySelector("h1");

// Function to toggle image and background color
myButton.onclick = () => {
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
};
