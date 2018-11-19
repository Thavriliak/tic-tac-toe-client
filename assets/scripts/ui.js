const store = require('./store.js')

const signUpSuccess = data => {
  $('#message').text('Signed up successfully')
  $('#message').removeClass()
  $('#message').addClass('success')
  console.log('signUpSuccess ran. Data is :', data)
  $('#signUppp').hide()
  $('#signUpModal').modal('toggle')
}

const signUpFailure = error => {
  $('#message').text('Error on sign up')
  $('#message').removeClass()
  $('#message').addClass('failure')
  console.error('signUpFailure ran. Error is :', error)
}

const signInSuccess = data => {
  store.user = data.user
  $('#message').text('Signed in successfully')
  $('#message').removeClass()
  $('#message').addClass('success')
  console.log('signInSuccess ran. Data is :', data)
  $('.buttModals').hide()
  $('#signInModal').modal('toggle')
  $('#afterSignIn').show()
  $('.newGame').show()
  $('.pastGames').show()
}

const signInFailure = error => {
  $('#message').text('Error on sign in')
  $('#message').removeClass()
  $('#message').addClass('failure')
  console.error('signInFailure ran. Error is :', error)
}

const changePasswordSuccess = data => {
  $('#message').text('Password changed successfully')
  $('#message').removeClass()
  $('#message').addClass('success')
  console.log('changePasswordSuccess ran. Data is :', data)
  $('#changePasswordModal').modal('toggle')
}

const changePasswordFailure = error => {
  $('#message').text('Error on password change')
  $('#message').removeClass()
  $('#message').addClass('failure')
  console.error('changePasswordFailure ran. Error is :', error)
}

const signOutSuccess = data => {
  $('#message').text('Signed out successfully')
  store.user = null
  $('#message').removeClass()
  $('#message').addClass('success')
  console.log('signOutSuccess ran. Data is :', data)
  $('.buttModals').show()
  $('#afterSignIn').hide()
  $('.container').hide()
  $('.newGame').hide()
  $('.playAgain').hide()
  $('.pastGames').hide()
}

const signOutFailure = error => {
  $('#message').text('Error on sign out')
  $('#message').removeClass()
  $('#message').addClass('failure')
  console.error('signOutFailure ran. Error is :', error)
}

const onNewGameSuccess = data => {
  console.log('made game')
  store.gameId = data.game.id
  $('.container').show()
  $('.playAgain').show()
  $('.newGame').hide()
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
}

const onNewGameFailure = error => {
  console.log('You had an error when creating a new game')
  console.log(error)
}

const onGameMoveSuccess = data => {
  console.log('congrats B')
}

const onGameMoveFailure = error => {
  console.log(error)
  console.log('Oops you dumb stupid idiot')
}

const onPastGameSuccess = data => {
  console.log(data)
  console.log('SICK')
  // $(#content).html('')
  // data.game.forEach(game => {
  //   const gameHTML = (`
  //     <h4>Cells: ${game.cells}</h4>
  //     <br>
  //   `)
  //   $('#content').append(gameHTML)
  // })
}


const onPastGameFailure = error => {
  console.log(error)
}

module.exports = {
  signUpSuccess,
  signUpFailure,
  signInSuccess,
  signInFailure,
  changePasswordSuccess,
  changePasswordFailure,
  signOutSuccess,
  signOutFailure,
  onNewGameSuccess,
  onNewGameFailure,
  onGameMoveSuccess,
  onGameMoveFailure,
  onPastGameSuccess,
  onPastGameFailure
}
