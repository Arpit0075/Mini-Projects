//combine two countries
const asianCountries = fetch("https://restcountries.eu/rest/v2/region/Asia")
  .then((res) => res.json())
  .catch((err) => console.log(err));

const europeanCountries = fetch(
  "https://restcountries.eu/rest/v2/region/europe"
)
  .then((res) => res.json())
  .catch((err) => console.log(err));

Promise.all([asianCountries, europeanCountries]).then((countries) =>
  console.log(countries)
);

//countries who speaks spanish in europe
fetch("https://restcountries.eu/rest/v2/lang/es")
  .then((res) => res.json())
  .then((countries) =>
    //display all countries speaking spanish
    // (countries) => console.log(countries)

    //display european countries speaking spanish
    //   countries
    //     .filter((country) => country.region === "Europe")
    //     .forEach((country) => createFlag(country))

    console.log(countries.filter((country) => country.region === "Europe"))
  );
