let player = 1

const swapXO = function (event) {
  if (player === 1) {
    player = 0
    $(event.currentTarget).text('X')
  } else {
    player = 1
    $(event.currentTarget).text('O')
  }
  console.log(player)
}

module.exports = {
  swapXO
}
