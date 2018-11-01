const store = require('./store')
const api = require('./api')
const ui = require('./ui')
const getFormFields = require('../../lib/get-form-fields.js')

// Cannot Occupy the same space
const nonOccupy = (event) => {
  const target = $(event.target)
  if (target.text() === '') {
    swapXO()
  } else {
    console.log('Pick another spot idiot')
  }
}
// create empty array, call each move into proper array spot
let tacBoard = ['', '', '', '', '', '', '', '', '']
let player = 'X'
// By letting the player equal 1, I am able to alternate between 1 and 0 to make
// my if else statement work and alternate between X and O.
const swapXO = function () {
  if (player === 'X') {
    player = 'O'
    $(event.currentTarget).text('X')
    tacBoard[event.currentTarget.id] = 'X'
    console.log(tacBoard)
  } else {
    player = 'X'
    $(event.currentTarget).text('O')
    tacBoard[event.currentTarget.id] = 'O'
    console.log(tacBoard)
  }
  console.log(player)
  didIWin()
  // nonOccupy()
}

const didIWin = function () {
  if (
    tacBoard[0] === 'X' && tacBoard[3] === 'X' && tacBoard[6] === 'X' ||
    tacBoard[1] === 'X' && tacBoard[4] === 'X' && tacBoard[7] === 'X' ||
    tacBoard[2] === 'X' && tacBoard[5] === 'X' && tacBoard[8] === 'X' ||
    tacBoard[0] === 'X' && tacBoard[4] === 'X' && tacBoard[8] === 'X' ||
    tacBoard[2] === 'X' && tacBoard[4] === 'X' && tacBoard[6] === 'X' ||
    tacBoard[0] === 'X' && tacBoard[1] === 'X' && tacBoard[2] === 'X' ||
    tacBoard[3] === 'X' && tacBoard[4] === 'X' && tacBoard[5] === 'X' ||
    tacBoard[6] === 'X' && tacBoard[7] === 'X' && tacBoard[8] === 'X'
) {
    console.log('Player One won the game!')
    $('.playerWins').append('<h3>Player One Wins</h3>')
  }
else if (
    tacBoard[0] === 'O' && tacBoard[3] === 'O' && tacBoard[6] === 'O' ||
    tacBoard[1] === 'O' && tacBoard[4] === 'O' && tacBoard[7] === 'O' ||
    tacBoard[2] === 'O' && tacBoard[5] === 'O' && tacBoard[8] === 'O' ||
    tacBoard[0] === 'O' && tacBoard[4] === 'O' && tacBoard[8] === 'O' ||
    tacBoard[2] === 'O' && tacBoard[4] === 'O' && tacBoard[6] === 'O' ||
    tacBoard[0] === 'O' && tacBoard[1] === 'O' && tacBoard[2] === 'O' ||
    tacBoard[3] === 'O' && tacBoard[4] === 'O' && tacBoard[5] === 'O' ||
    tacBoard[6] === 'O' && tacBoard[7] === 'O' && tacBoard[8] === 'O'
  ) {
    console.log('Player Two won the game!')
    $('.playerWins').append('<h3>Player Two Wins</h3>')
  }
}

const playAgain = function (event) {
  $('#pAgain').click(function () {
    tacBoard = ['', '', '', '', '', '', '', '', '']
    console.log(tacBoard)
    $('#0').text('')
    $('#1').text('')
    $('#2').text('')
    $('#3').text('')
    $('#4').text('')
    $('#5').text('')
    $('#6').text('')
    $('#7').text('')
    $('#8').text('')
    $('.playerWins').text('')
  })
}

module.exports = {
  nonOccupy,
  playAgain
}
