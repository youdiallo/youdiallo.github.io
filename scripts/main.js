let myHeading = document.querySelector('h1');
myHeading.textContent = "Hello world!";

let myImage = document.querySelector('img');

myImage.addEventListener('click', function() {
    let mySrc = myImage.getAttribute('src');
    if (mySrc === 'images/facebook-logo.png') {
      myImage.setAttribute('src', 'images/cdvi-logo.png');
    } else {
      myImage.setAttribute('src', 'images/facebook-logo.png');
    }
});
