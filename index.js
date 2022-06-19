console.log("Working");

const Title = (document.querySelectorAll(".pageTitle").innerHTML = "TEST");
const searchBar = document.querySelector(".search");
console.log(Title);
const buttonSearch = document.querySelector(".btn");

let foodToSearch = null;
const APP_ID = "6545cc22";
const APP_key = "1423965b1414181c0e6dbb0ddbe0c457";

async function getFood(food) {
  try {
    const response = await fetch(
      `https://api.edamam.com/search?q=${food}&app_id=${APP_ID}&app_key=${APP_key}&from=0&to=6`
    );
    const data = await response.json();
    console.log(data);
  } catch (error) {
    console.error(error);
  }
}

getFood("chicken");
