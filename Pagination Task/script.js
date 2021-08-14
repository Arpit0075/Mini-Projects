let container = document.querySelector(".container");
let num = 1;

function displayNum(num) {
  console.log("click");
  container.classList.remove("flex-box");
  if (num == 1) {
    container.innerHTML = "";
    fetch("./pagination.json")
      .then((resp) => {
        return resp.json();
      })
      .then((result) => {
        //console.log(result);
        for (let j = 0; j < 10; j++) {
          container.innerHTML += `<div class="mini-container">
  <p> ${result[j].name}</p>
  <p>${result[j].id}</p>
  <p>${result[j].email}</p>
</div>`;
        }
      })
      .catch((err) => console.log(err));
  }
  if (num == 2) {
    container.innerHTML = "";
    fetch("./pagination.json")
      .then((resp) => {
        return resp.json();
      })
      .then((result) => {
        //console.log(result);
        for (let j = 10; j < 20; j++) {
          container.innerHTML += `<div class="mini-container">
    <p> ${result[j].name}</p>
    <p>${result[j].id}</p>
    <p>${result[j].email}</p>
  </div>`;
        }
      })
      .catch((err) => console.log(err));
  }
  if (num == 3) {
    container.innerHTML = "";
    fetch("./pagination.json")
      .then((resp) => {
        return resp.json();
      })
      .then((result) => {
        //console.log(result);
        for (let j = 20; j < 30; j++) {
          container.innerHTML += `<div class="mini-container">
    <p> ${result[j].name}</p>
    <p>${result[j].id}</p>
    <p>${result[j].email}</p>
  </div>`;
        }
      })
      .catch((err) => console.log(err));
  }
  if (num == 4) {
    container.innerHTML = "";
    fetch("./pagination.json")
      .then((resp) => {
        return resp.json();
      })
      .then((result) => {
        //console.log(result);
        for (let j = 30; j < 40; j++) {
          container.innerHTML += `<div class="mini-container">
    <p> ${result[j].name}</p>
    <p>${result[j].id}</p>
    <p>${result[j].email}</p>
  </div>`;
        }
      })
      .catch((err) => console.log(err));
  }
  if (num == 5) {
    container.innerHTML = "";
    fetch("./pagination.json")
      .then((resp) => {
        return resp.json();
      })
      .then((result) => {
        //console.log(result);
        for (let j = 40; j < 50; j++) {
          container.innerHTML += `<div class="mini-container">
    <p> ${result[j].name}</p>
    <p>${result[j].id}</p>
    <p>${result[j].email}</p>
  </div>`;
        }
      })
      .catch((err) => console.log(err));
  }
  if (num == 6) {
    container.innerHTML = "";
    fetch("./pagination.json")
      .then((resp) => {
        return resp.json();
      })
      .then((result) => {
        //console.log(result);
        for (let j = 50; j < 60; j++) {
          container.innerHTML += `<div class="mini-container">
    <p> ${result[j].name}</p>
    <p>${result[j].id}</p>
    <p>${result[j].email}</p>
  </div>`;
        }
      })
      .catch((err) => console.log(err));
  }

  if (num == 7) {
    container.innerHTML = "";
    fetch("./pagination.json")
      .then((resp) => {
        return resp.json();
      })
      .then((result) => {
        //console.log(result);
        for (let j = 60; j < 70; j++) {
          container.innerHTML += `<div class="mini-container">
    <p> ${result[j].name}</p>
    <p>${result[j].id}</p>
    <p>${result[j].email}</p>
  </div>`;
        }
      })
      .catch((err) => console.log(err));
  }
  if (num == 8) {
    container.innerHTML = "";
    fetch("./pagination.json")
      .then((resp) => {
        return resp.json();
      })
      .then((result) => {
        //console.log(result);
        for (let j = 70; j < 80; j++) {
          container.innerHTML += `<div class="mini-container">
    <p> ${result[j].name}</p>
    <p>${result[j].id}</p>
    <p>${result[j].email}</p>
  </div>`;
        }
      })
      .catch((err) => console.log(err));
  }

  if (num == 9) {
    container.innerHTML = "";
    fetch("./pagination.json")
      .then((resp) => {
        return resp.json();
      })
      .then((result) => {
        //console.log(result);
        for (let j = 80; j < 90; j++) {
          container.innerHTML += `<div class="mini-container">
    <p> ${result[j].name}</p>
    <p>${result[j].id}</p>
    <p>${result[j].email}</p>
  </div>`;
        }
      })
      .catch((err) => console.log(err));
  }
  if (num == 10) {
    container.innerHTML = "";
    fetch("./pagination.json")
      .then((resp) => {
        return resp.json();
      })
      .then((result) => {
        //console.log(result);
        for (let j = 90; j < 100; j++) {
          container.innerHTML += `<div class="mini-container">
    <p> ${result[j].name}</p>
    <p>${result[j].id}</p>
    <p>${result[j].email}</p>
  </div>`;
        }
      })
      .catch((err) => console.log(err));
  }
}

function setNum(e) {
  console.log("clicked me");
  let val = e.target.value;
  if (val === "next") {
    num++;
    if (num == 11) {
      num = 1;
    }
    displayNum(num);
  }
  if (val === "previous") {
    num--;
    if (num == 0) {
      num = 10;
    }
    displayNum(num);
  }

  if (val == 1) {
    num = 1;
    displayNum(num);
  }

  if (val == 2) {
    num = 2;
    displayNum(num);
  }

  if (val == 3) {
    num = 3;
    displayNum(num);
  }

  if (val === "4") {
    num = 4;
    displayNum(num);
  }

  if (val == 5) {
    num = 5;
    displayNum(num);
  }

  if (val == 6) {
    num = 6;
    displayNum(num);
  }

  if (val == 7) {
    num = 7;
    displayNum(num);
  }

  if (val == 8) {
    num = 8;
    displayNum(num);
  }

  if (val == 9) {
    num = 9;
    displayNum(num);
  }

  if (val == 10) {
    num = 10;
    displayNum(num);
  }
}
displayNum(num);
