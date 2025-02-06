import Test from "./GetTest";
import ParseJson from "./ParseJson";

function GetTemp() {
  const string = ParseJson(Test());

  document.querySelector(".coatTitle").innerText = string;
}

export default GetTemp;
