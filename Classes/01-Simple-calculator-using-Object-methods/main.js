const numA = document.getElementById('numberA')
const numB = document.getElementById('numberB')
const calcBtn = document.querySelector('.btn')
const resultsContainer = document.getElementById('results-container')
const resultSum = document.getElementById('resultSum')
const resultMul = document.getElementById('resultMul')

const calculator = {
  a: 0,
  b: 0,

  read() {
    this.a = parseFloat(numA.value) || 0
    this.b = parseFloat(numB.value) || 0

    if (isNaN(this.a) || isNaN(this.b)) {
      alert('Please, enter valid numbers!')
      return false
    }
    return true
  },

  sum() {
    return this.a + this.b
  },

  mul() {
    return this.a * this.b
  },

  calculateAndDisplay() {
    if (this.read()) {
      const sum = this.sum()
      const mul = this.mul()

      resultSum.textContent = `The result of summation: ${sum}`
      resultMul.textContent = `The result of multiplying: ${mul}`

      resultsContainer.classList.remove('hidden')
    }
  }
}

calcBtn.addEventListener('click', () => {
  calculator.calculateAndDisplay()
})