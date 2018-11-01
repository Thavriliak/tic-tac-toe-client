const baseUrl = 'https://wdi-library-api.herokuapp.com'

const getAllBooksFromApi = function () {
  // use AJAX to send request
  const response = $.ajax({
    url: baseUrl + '/books',
    method: 'GET'
  })
  // return the AJAX object
  return response
}

const getOneBookFromApi = function (id) {
  return $.ajax({
    url: baseUrl + `/books/${id}`,
    method: 'GET'
  })
}

const deleteOneBookFromApi = function (id) {
  return $.ajax({
    url: baseUrl + `/books/${id}`,
    method: 'DELETE'
  })
}

// { book: { id: 55, title: 'something', author: 'some author'} }
const updateOneBookFromApi = function (bookObject) {
  return $.ajax({
    url: baseUrl + `/books/${bookObject.book.id}`,
    method: 'PATCH',
    data: bookObject
  })
}

const createOneBookFromApi = function (bookObject) {
  return $.ajax({
    url: baseUrl + `/books/`,
    method: 'POST',
    data: bookObject
  })
}

module.exports = {
  getAllBooksFromApi,
  getOneBookFromApi,
  deleteOneBookFromApi,
  updateOneBookFromApi,
  createOneBookFromApi
}
