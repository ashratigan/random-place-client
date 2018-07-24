'use strict'

const api = require('./api.js')
const ui = require('./ui.js')

const onGetPlaces = (event) => {
  console.log(event)
  event.preventDefault()
  api.getPlaces()
    .then(ui.getPlacesSuccess)
    .catch(ui.failure)
}

const addHandlers = () => {
  $('#getPlacesButton').on('click', onGetPlaces)
}

module.exports = {
  addHandlers
}
