let arrSimple = [];
let arrComplex = [];
let simpleInputElems = document.querySelectorAll(".simpleInput");

//console.log(simpleInputElems);

let paneer, egg, pulao, chickenBiryani, pizza;

function paneerValue(event) {
  paneer = event.target.value;
  // console.log(panerr);
}
function eggValue(event) {
  egg = event.target.value;
}
function pulaoValue(event) {
  pulao = event.target.value;
}
function chickenBiryana(event) {
  chickenBiryani = event.target.value;
}
function pizzaValue(event) {
  pizza = event.target.value;
  //console.log(pizza);
}

let simpleTDS = document.querySelectorAll(".simpleTDS");
console.log(simpleTDS);
let complexTDS = document.querySelector(".complexTDS");
//simpleTDS[0].innerText = firstName;

function displayData(e) {
  e.preventDefault();

  for (let i = 0; i < simpleInputElems.length; i++) {
    if (simpleInputElems[i].value !== undefined) {
      arrSimple.push(simpleInputElems[i].value);
    }
  }

  if (paneer !== undefined) {
    arrComplex.push(paneer);
  }
  if (egg !== undefined) {
    arrComplex.push(egg);
  }
  if (pulao !== undefined) {
    arrComplex.push(pulao);
  }
  if (chickenBiryani !== undefined) {
    arrComplex.push(chickenBiryani);
  }
  if (pizza !== undefined) {
    arrComplex.push(pizza);
  }

  console.log(arrComplex);

  complexTDS.innerText = arrComplex;

  for (let i = 0; i < arrSimple.length; i++) {
    simpleTDS[i].innerText = arrSimple[i];
  }

  for (let i = 0; i < simpleInputElems.length; i++) {
    simpleInputElems[i].value = "";
  }

  console.log("done");
}
