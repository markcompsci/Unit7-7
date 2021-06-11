const FIRST_NUM = document.getElementById('first-num')
const SECOND_NUM = document.getElementById('second-num')
const MULTIPLY_BTN = document.getElementById('multiply-btn')
const MULTIPLICATION_DIV = document.getElementById('multiplication-div')
const RESULT = document.createElement('p')
console.log(document.MULTIPLICATION_DIV)
MULTIPLICATION_DIV.appendChild(RESULT)

// Since it doesn't matter if x is being added y times or vice versa, i just chose the first num to be the repeater and the second num to be added (first num) amount of times

function calc () {
  let result = 0
  for (let i = 0; i < Math.abs(FIRST_NUM.value); i++) {
    result += parseInt(SECOND_NUM.value)
  }
  if (FIRST_NUM.value < 0 && SECOND_NUM.value > 0) {
    RESULT.textContent = -Math.abs(result)
  } else if (FIRST_NUM.value < 0 && SECOND_NUM.value < 0) {
    RESULT.textContent = Math.abs(result)
  } else {
    RESULT.textContent = result
  }
}

MULTIPLY_BTN.addEventListener('click', calc)
