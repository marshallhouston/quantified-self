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
  clearAlerts()
    foodsRequests.addNewFood()
  } else {
    validateNameAlert()
  }
}

const validateNameAlert = () => {
  $('#name-notice').css('display', 'block')
}

const validateCaloriesAlert = () => {
  $('#calories-notice').css('display', 'block')
}

const clearAlerts = () => {
  $('#name-notice').css('display', 'none')
  $('#calories-notice').css('display', 'none')
}