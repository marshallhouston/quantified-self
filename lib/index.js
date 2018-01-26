var foodsRequests = require('./requests/foods')
require('./foods')

$(document).ready(() => {
  foodsRequests.getFoods()
  $('#submit-food').on('click', event => {
    event.preventDefault()
    newFoodSequence()
  })
})

const newFoodSequence = () => {
  var nameInput = $('#food-name').val()
  if (nameInput != '') {
    foodsRequests.addNewFood()
  } else {
    validateNameAlert()
  }
}

const validateNameAlert = () => {
  $('#name-notice').css('display', 'block')
}