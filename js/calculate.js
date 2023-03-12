// calculate the value
export default function calculate() {
  // function 'eval()' is not recommended !! can be dangerous in big projects...
  const resultInput = document.getElementById("result");
  resultInput.value = "ERROR";
  resultInput.classList.add("error");
  const result = eval(input.value);
  resultInput.value = result;
  resultInput.classList.remove("error");
}
