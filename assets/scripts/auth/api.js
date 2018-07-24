'use strict'

// const config = require('../config')

let id = 0
$('#getPlacesButton').click(function () {
  id = Math.floor(Math.random() * 60)
  return id
})

const getPlaces = function () {
  return $.ajax({
    url: `https://swapi.co/api/planets/${id}/`
  })
}

module.exports = {
  getPlaces
}
