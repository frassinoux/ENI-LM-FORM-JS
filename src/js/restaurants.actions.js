import { validateRestaurantForm } from './validation/forms.validation'

// On sélectionne le bouton par son ID
const fabButton = document.querySelector('#fab')
const backdrop = document.querySelector('#backdrop')
const modal = document.querySelector('#modal')
const inputNom = document.querySelector('#nom')
const selectType = document.querySelector('#type')
const sendButton = document.querySelector('#SendButton')
const restaurantToAdd = {
  nom: '',
  type: ''
}

function showModal () {
  backdrop.classList.remove('hidden')
  backdrop.classList.add('block')
  modal.classList.remove('hidden')
  modal.classList.add('block')
  document.body.classList.add('overflow-hidden')
}

function hideModal () {
  backdrop.classList.remove('block')
  backdrop.classList.add('hidden')
  modal.classList.remove('block')
  modal.classList.add('hidden')
  document.body.classList.remove('overflow-hidden')
}

function handleChangeInput (event) {
  console.log(event.target.id, event.target.value)
  restaurantToAdd[event.target.id] = event.target.value
  console.log(restaurantToAdd)
}

function handleFormError (fieldId, error) {
  const field = document.querySelector(`#${fieldId}`)
  const errorMessage = document.createElement('span')
  errorMessage.textContent = error
  errorMessage.classList.add('error', 'text-red-400', 'italic')
  field.after(errorMessage)
}

function clearErrors () {
  const errors = document.querySelectorAll('.error')
  errors.forEach(error => error.remove())
}

async function validateForm (event) {
  try {
    // Ajout en début de fonction pour nettoyer à chaque fois.
    clearErrors()
    const result = await validateRestaurantForm(restaurantToAdd)
    if (result) {
      sendButton.disabled = false
      console.log('OK')
    }
  } catch (error) {
    // console.error(error)
    // ajout de la fonction pour remonter les erreurs
    console.error(error.inner)
    // = for (const error of error.inner)
    error.inner.forEach(error => {
      handleFormError(error.path, error.message)
    })
  }
}

function init () {
  // On connecte le getionnaire d'évènement
  fabButton.addEventListener('click', showModal)
  backdrop.addEventListener('click', hideModal)
  // Empêcher la propagation lors d'un click sur le model
}modal.addEventListener('click', (event) => {
  event.stopImmediatePropagation()
})

//  Récupérer les valeurs saisies par l'utilisateur dans le formulaire
inputNom.addEventListener('change', handleChangeInput)
selectType.addEventListener('input', handleChangeInput)
inputNom.addEventListener('blur', validateForm)
selectType.addEventListener('blur', validateForm)
init()
