// fetch anime quotes

function getQuotes() {
  fetch("https://animechan.vercel.app/api/quotes")
    .then((response) => response.json())
    .then((quotesArray) =>
      quotesArray.forEach((quote) => {
        createQuotes(quote);
      })
    );
}
getQuotes();

function createQuotes(obj) {
  hero.innerHTML += ` <div class="container">
    <h2 class="heading">Anime name: ${obj.anime}</h2>
    <p class="para">Character name:<span class="character"> ${obj.character}</span></p>
    <p class="para">Character quote:<span class="quote"> ${obj.quote}</span></p>
  </div>`;
}
