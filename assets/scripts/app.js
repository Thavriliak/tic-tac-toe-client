'use strict'

const events = require('./events')

// use require with a reference to bundle the file and use it in this file
// const example = require('./example')

// use require without a reference to ensure a file is bundled
// require('./example')

$(() => {
  $('#0').on('click', events.nonOccupy)
  $('#1').on('click', events.nonOccupy)
  $('#2').on('click', events.nonOccupy)
  $('#3').on('click', events.nonOccupy)
  $('#4').on('click', events.nonOccupy)
  $('#5').on('click', events.nonOccupy)
  $('#6').on('click', events.nonOccupy)
  $('#7').on('click', events.nonOccupy)
  $('#8').on('click', events.nonOccupy)
  $('.playAgain').on('click', events.playAgain)
})
