const config = require('./config.js')
const store = require('./store.js')

const signUp = data => {
  return $.ajax({
    url: config.apiUrl + '/sign-up',
    method: 'POST',
    data
  })
}

const signIn = data => {
  return $.ajax({
    url: config.apiUrl + '/sign-in',
    method: 'POST',
    data
  })
}

const changePassword = data => {
  return $.ajax({
    url: config.apiUrl + '/change-password',
    method: 'PATCH',
    headers: {
      Authorization: 'Token token=' + store.user.token
    },
    data
  })
}

const signOut = () => {
  return $.ajax({
    url: config.apiUrl + '/sign-out',
    method: 'DELETE',
    headers: {
      Authorization: 'Token token=' + store.user.token
    }
  })
}

// ---------------------------------------------------------------------------

// const getAllMovesFromApi = function () {
//   // use AJAX to send request
//   const response = $.ajax({
//     url: config.apiUrl + '/books',
//     method: 'GET'
//   })
//   // return the AJAX object
//   return response
// }
//
// const getOneGameFromApi = function (id) {
//   return $.ajax({
//     url: config.apiUrl + `/games/${id}`,
//     method: 'GET'
//   })
// // }
//
// const deleteOneGameFromApi = function (id) {
//   return $.ajax({
//     url: config.Url + `/games/${id}`,
//     method: 'DELETE'
//   })
// }

const updateOneMoveFromApi = data => {
  return $.ajax({
    url: config.apiUrl + `/games/${store.gameId}`,
    method: 'PATCH',
    headers: {
      Authorization: 'Token token=' + store.user.token
    },
    data
  })
}

const newGameToApi = () => {
  return $.ajax({
    url: config.apiUrl + `/games`,
    method: 'POST',
    headers: {
      Authorization: 'Token token=' + store.user.token
    },
    data: {}
  })
}

const getPastGamesFromApi = function () {
  // use AJAX to send request
  return $.ajax({
    url: config.apiUrl + '/games',
    method: 'GET',
    headers: {
      Authorization: 'Token token=' + store.user.token
    }
  })
}

module.exports = {
  signUp,
  signIn,
  changePassword,
  signOut,
  // getAllMovesFromApi,
  // getOneGameFromApi,
  // deleteOneGameFromApi,
  updateOneMoveFromApi,
  newGameToApi,
  getPastGamesFromApi
}
