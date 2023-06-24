const one = document.getElementsByClassName("one")[0];
const two = document.getElementsByClassName("two")[0];
const three = document.getElementsByClassName("three")[0];
const four = document.getElementsByClassName("four")[0];
const five = document.getElementsByClassName("five")[0];
const six = document.getElementsByClassName("six")[0];
const seven = document.getElementsByClassName("seven")[0];
const eight = document.getElementsByClassName("eight")[0];
const nine = document.getElementsByClassName("nine")[0];
const square = document.getElementsByClassName("square");
let stopGame = false;
for (let i = 0; i < square.length; i++) {
  square[i].addEventListener("click", circle);
}
function circle(e) {
  e.srcElement.innerText = "O";
  e.srcElement.classList.remove("ok");
  e.srcElement.removeEventListener("click", circle);
  checkWinner();
  !stopGame ? X() : null;
}
function X() {
  okDiv = document.getElementsByClassName("ok");
  num = Math.floor(Math.random() * okDiv.length);
  okDiv[num].removeEventListener("click", circle);
  okDiv[num].innerText = "X";
  okDiv[num].classList.remove("ok");
  checkWinner();
}
function checkWinner() {
  if (
    (one.innerText == "X" && two.innerText == "X" && three.innerText == "X") ||
    (four.innerText == "X" && five.innerText == "X" && six.innerText == "X") ||
    (seven.innerText == "X" &&
      eight.innerText == "X" &&
      nine.innerText == "X") ||
    (one.innerText == "X" && four.innerText == "X" && seven.innerText == "X") ||
    (two.innerText == "X" && five.innerText == "X" && eight.innerText == "X") ||
    (three.innerText == "X" && six.innerText == "X" && nine.innerText == "X") ||
    (one.innerText == "X" && five.innerText == "X" && nine.innerText == "X") ||
    (three.innerText == "X" && five.innerText == "X" && seven.innerText == "X")
  ) {
    alert("X winner");
    return (stopGame = true);
  } else if (
    (one.innerText == "O" && two.innerText == "O" && three.innerText == "O") ||
    (four.innerText == "O" && five.innerText == "O" && six.innerText == "O") ||
    (seven.innerText == "O" &&
      eight.innerText == "O" &&
      nine.innerText == "O") ||
    (one.innerText == "O" && four.innerText == "O" && seven.innerText == "O") ||
    (two.innerText == "O" && five.innerText == "O" && eight.innerText == "O") ||
    (three.innerText == "O" && six.innerText == "O" && nine.innerText == "O") ||
    (one.innerText == "O" && five.innerText == "O" && nine.innerText == "O") ||
    (three.innerText == "O" && five.innerText == "O" && seven.innerText == "O")
  ) {
    alert("O winner");
    return (stopGame = true);
  }
}
