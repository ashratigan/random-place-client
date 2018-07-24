'use strict'

// const showPlacesTemplate = require('../templates/book-listing.handlebars')

const getPlanetsSuccess = (data) => {
  console.log(`planets is ${data.name}`)
  console.log(`planets is ${data.terrain}`)
  $('#contentH').html(`${data.name}`)
  $('#contentP').html(`The climate here is ${data.climate} and the terrain is ${data.terrain}`)
  $('#contentP2').html(`The population is ${data.population}`)
  // const showPlacesHtml = showPlacesTemplate({ planets: data })
  // console.log(showPlacesHtml)
  // $('.content').html(showPlacesHtml)
}

const getPlacesSuccess = (data) => {
  console.log(`planets is ${data}`)
  console.log(`planets is ${data.place.id}`)
  console.log(`planets is ${data.place.city}`)
  console.log(`planets is ${data.place.country}`)
  $('#contentH').html(`${data.place.city}`)
  $('#contentP').html(`Located in ${data.place.province}, ${data.place.country}`)
  $('#contentP2').html(`The population is ${data.place.pop}`)
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
