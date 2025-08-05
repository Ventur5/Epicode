function changeText() {
    const title = document.getElementById("title");
    title.innerHTML = "NON AMAZON";
}

function changeColor() {
    const bgColor = document.getElementById("bgColor");
    bgColor.style.backgroundColor = "orange";
}

function changeStreet() {
    const newStreet = document.getElementById("newStreet");
    newStreet.innerHTML = "Sede centrale: Sapessi...";
}

function changeLinks() { 
    const linkElements = document.querySelectorAll("a");
    linkElements.forEach(link => {
        link.classList.toggle("changeLinks");
    });
}

function changeImgs() {
    const imgElements = document.querySelectorAll("#imgs");
    imgElements.forEach(img => {
        img.classList.toggle("changeImgs");
    });
}

function randomColorPrice() {
    const priceElements = document.querySelectorAll("#price");
    priceElements.forEach(price => {
        const randomColor = '#' + Math.floor(Math.random()*16777215).toString(16);
        price.style.color = randomColor;
    });
}