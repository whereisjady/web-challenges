console.clear();

const url = "https://swapi.py4e.com/api/people";

async function fetchData() {
  const response = await fetch(url);
  const data = await response.json();

  //  console.log("All data: ", data);
  // console.log("Name first character: ", data.results[0].name);
  // console.log("R2-D2 eye color: ", data.results[2].eye_color);

  const R2D2 = data.results.find((person) => {
    if (person.name === "R2-D2") {
      return true;
    } else {
      return false;
    }
  });
  console.log(R2D2.eye_color);
}

fetchData();
