// Task Slideshow - Task - (optional - animation)
// 5 pictures - every 2s it should change
// < > to go forward or backward picture
// hover over Slideshow must pause
// hover out it Slideshow must resume

let imgSrc = [
  "https://upload.wikimedia.org/wikipedia/en/7/7f/Red_Hood_%28Jason_Todd_-_circa_2016%29.png",
  "https://upload.wikimedia.org/wikipedia/en/e/e2/BatmanRobinAnnualv2.jpg",
  "https://upload.wikimedia.org/wikipedia/en/c/c7/Batman_Infobox.jpg",
  "https://upload.wikimedia.org/wikipedia/en/9/98/Joker_%28DC_Comics_character%29.jpg",
  "https://upload.wikimedia.org/wikipedia/en/e/e1/Bane_Batman_Vol_3_18.png",
];

let i = 0;

//function for hover events
function slideShow() {
  let figure = document.querySelector(".figure");
  figure.src = imgSrc[i];
  i++;

  if (i === imgSrc.length) {
    i = 0;
  }
}
// it will start slideshow on load
let clearShow;
clearShow = setInterval(() => slideShow(), 1500);

//it will start slideshow once we move cursor out or after clicking on buttons
function startShow() {
  clearShow = setInterval(() => slideShow(), 1500);
}

//to stop on cursor in or clicking on buttons
function stopShow() {
  clearInterval(clearShow);
}

//function for buttons
function slideImgLeft() {
  clearInterval(clearShow);
  i--;
  if (i === -1) {
    i = imgSrc.length - 1;
  }
  let figure = document.querySelector(".figure");
  figure.src = imgSrc[i];
  startShow();
}

function slideImgRight() {
  clearInterval(clearShow);
  i++;
  if (i === imgSrc.length) {
    i = 0;
  }
  let figure = document.querySelector(".figure");
  figure.src = imgSrc[i];
  startShow();
}
