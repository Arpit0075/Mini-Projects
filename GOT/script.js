// api key for NASA= eu1JRGlyHIoAf09e5UQT4pZ4KsPmUXRQiPc69H3f

function getData() {
  mainContainer.innerHTML = "";
  fetch("https://thronesapi.com/api/v2/Characters")
    .then((res) => res.json())
    .then((arrays) =>
      arrays.forEach((array) => {
        createCard(array);
      })
    )
    .catch((err) => console.error(err));
}

getData();

function createCard(obj) {
  mainContainer.innerHTML += ` <div class="card">
  <h3>Full Name: ${obj.fullName}</h3>
  <p class="para">Title: ${obj.title}</p>
  <p class="para">Family: ${obj.family}</p>
  <div class="image-container"><img class="image" src="${obj.imageUrl}" alt="image"  </div>
</div>`;
}

function searchChar(e) {
  let char = e.target.value;
  //console.log(char);

  mainContainer.innerHTML = "";
  fetch("https://thronesapi.com/api/v2/Characters")
    .then((res) => res.json())
    .then((arrays) =>
      arrays.filter((array) => {
        let match = array.fullName.toLowerCase().match(char.toLowerCase());
        if (match) {
          //console.log(match);
          //console.log(array)
          createCard(array);
        }
      })
    )
    .catch((err) => console.error(err));
}

// let str = "arcade dc kayn";
// let res = str.match("de");
// console.log(res);
