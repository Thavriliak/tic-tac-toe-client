'use strict'

const events = require('./events')

// use require with a reference to bundle the file and use it in this file
// const example = require('./example')

// use require without a reference to ensure a file is bundled
// require('./example')

$(() => {
  $('#box1').on('click', events.swapXO)
  $('#box2').on('click', events.swapXO)
  $('#box3').on('click', events.swapXO)
  $('#box4').on('click', events.swapXO)
  $('#box5').on('click', events.swapXO)
  $('#box6').on('click', events.swapXO)
  $('#box7').on('click', events.swapXO)
  $('#box8').on('click', events.swapXO)
  $('#box9').on('click', events.swapXO)
})
