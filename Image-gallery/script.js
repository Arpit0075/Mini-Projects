async function getData() {
  let data = await fetch("https://picsum.photos/v2/list?page=2&limit=20");
  let images = await data.json();
  //console.log(images);
  images.forEach((image) => {
    createCard(image);
  });
}
getData();

function createCard(obj) {
  container.innerHTML += ` <div class="card">
  <div class="image-container">
    <img class="image" src=${obj.download_url} alt="" /> </div>
    <p class="para">Author:${obj.author}</p>
  </div>`;
}

function changeMode() {
  container.classList.toggle("light");
  //console.log(btn.innerText);

  if (btn.innerText === "Light Mode") {
    btn.innerText = "Dark Mode";
  } else {
    btn.innerText = "Light Mode";
  }
}
