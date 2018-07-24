'use strict'

// const showPlacesTemplate = require('../templates/book-listing.handlebars')

const getPlanetsSuccess = (data) => {
  console.log(`planets is ${data.name}`)
  console.log(`planets is ${data.terrain}`)
  $('#content').html(`Welcome to ${data.name}!`)
  $('#content').append(`The terrain here is ${data.terrain}`)
  // const showPlacesHtml = showPlacesTemplate({ planets: data })
  // console.log(showPlacesHtml)
  // $('.content').html(showPlacesHtml)
}

const getPlacesSuccess = (data) => {
  console.log(`planets is ${data}`)
  console.log(`planets is ${data.place.id}`)
  console.log(`planets is ${data.place.city}`)
  console.log(`planets is ${data.place.country}`)
  $('#content').html(`Welcome to ${data.place.city}!`)
  $('#content').append(`Located in ${data.place.country}`)
  // const showPlacesHtml = showPlacesTemplate({ planets: data })
  // console.log(showPlacesHtml)
  // $('.content').html(showPlacesHtml)
}

const failure = (error) => {
  console.error(error)
}

module.exports = {
  getPlanetsSuccess,
  getPlacesSuccess,
  failure
}
