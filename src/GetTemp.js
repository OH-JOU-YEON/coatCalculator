import Test from "./GetTest";
import ParseJson from "./ParseJson";

function GetTemp() {
  const string = ParseJson(Test());

  const coatTitle = document.querySelector(".coatTitle");

  coatTitle.innerText = string;

  coatTitle.removeAttribute("onClick");

  console.log(Test());
}

export default GetTemp;
