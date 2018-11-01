const store = require('./store')
const api = require('./api')
const ui = require('./ui')
const getFormFields = require('../../lib/get-form-fields.js')



let player = 'X'
// By letting the player equal 1, I am able to alternate between 1 and 0 to make
// my if else statement work and alternate between X and O.
const swapXO = function (event) {
  if (player === 'X') {
    player = 'O'
    $(event.currentTarget).text('X')
  } else {
    player = 'X'
    $(event.currentTarget).text('O')
  }
  console.log(player)
}

const didIWin = function () {

}

// Cannot Occupy the same space
let nonOccupy = function () {
  if (target.Text() === '') {
    swapXO()
    didIWin()
  } else {
    console.log('Pick another spot idiot')
  }
}
module.exports = {
  swapXO
}
