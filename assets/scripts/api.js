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

const getAllMovesFromApi = function () {
  // use AJAX to send request
  const response = $.ajax({
    url: config.apiUrl + '/books',
    method: 'GET'
  })
  // return the AJAX object
  return response
}

const getOneBookFromApi = function (id) {
  return $.ajax({
    url: config.apiUrl + `/books/${id}`,
    method: 'GET'
  })
}

const deleteOneBookFromApi = function (id) {
  return $.ajax({
    url: config.Url + `/books/${id}`,
    method: 'DELETE'
  })
}

// { book: { id: 55, title: 'something', author: 'some author'} }
const updateOneBookFromApi = function (bookObject) {
  return $.ajax({
    url: config.Url + `/books/${bookObject.book.id}`,
    method: 'PATCH',
    data: bookObject
  })
}

const createOneBookFromApi = function (bookObject) {
  return $.ajax({
    url: config.Url + `/books/`,
    method: 'POST',
    data: bookObject
  })
}

module.exports = {
  signUp,
  signIn,
  changePassword,
  signOut,
  getAllMovesFromApi,
  getOneBookFromApi,
  deleteOneBookFromApi,
  updateOneBookFromApi,
  createOneBookFromApi
}
