'use strict'

const config = require('../config')

let planetId = 0
$('#getPlanetsButton').click(function () {
  planetId = Math.floor(Math.random() * 60)
  return planetId
})

let placeId = 14645
$('#getPlacesButton').click(function () {
  placeId = 14645 + Math.floor(Math.random() * 7321)
  return placeId
})

const getPlanets = function () {
  console.log(`planetId is ${planetId}`)
  return $.ajax({
    url: `https://swapi.co/api/planets/${planetId}/`
  })
}

const getPlaces = function () {
  console.log(`placeId is ${placeId}`)
  return $.ajax({
    url: config.apiUrl + `/places/${placeId}`
  })
}

module.exports = {
  getPlanets,
  getPlaces
}
