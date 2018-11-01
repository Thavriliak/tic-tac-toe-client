'use strict'

const events = require('./events')

// use require with a reference to bundle the file and use it in this file
// const example = require('./example')

// use require without a reference to ensure a file is bundled
// require('./example')

$(() => {
  $('#0').on('click', events.swapXO)
  $('#1').on('click', events.swapXO)
  $('#2').on('click', events.swapXO)
  $('#3').on('click', events.swapXO)
  $('#4').on('click', events.swapXO)
  $('#5').on('click', events.swapXO)
  $('#6').on('click', events.swapXO)
  $('#7').on('click', events.swapXO)
  $('#8').on('click', events.swapXO)
})
