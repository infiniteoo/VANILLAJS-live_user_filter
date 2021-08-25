const result = document.getElementById("result");
const filter = document.getElementById("filter");
const listItems = [];

getData();

async function getData() {
  const response = await fetch("https://randomuser.me/api?results=50");
  const data = await response.json();

  // clear results
  result.innerHTML = "";
}
