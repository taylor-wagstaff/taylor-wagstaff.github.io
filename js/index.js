// Select all buttons inside .color-grid
let buttons = document.querySelectorAll('.color-grid button')

buttons.forEach(function (button) {
  button.addEventListener('click', function (e) {
    let buttonHTML = e.target.innerHTML
    console.log(buttonHTML)

    let selectColor = document.getElementsByClassName('select-box')[0]
    selectColor.style.backgroundColor = `${buttonHTML}`
    selectColor.style.color = 'black'

    let selectText = document.querySelector('.select-box p')
    selectText.innerHTML = `${buttonHTML}`
  })
})

function createBox() {

  let newBox = document.createElement('div')

  newBox.classList.add('box')

  let addBox = document.querySelector('.palette-container')
  addBox.appendChild(newBox)

  let selectText = document.querySelector('.select-box p').innerHTML

  newBox.style.backgroundColor = `${selectText}`
  newBox.textContent = `${selectText}`
}

function clearColors() {
  let addBox = document.querySelector('.palette-container')
  let boxes = addBox.querySelectorAll('.box')

  boxes.forEach(function (box) {
    addBox.removeChild(box)
  })
}

function randomButton() {
  const randomNum = Math.floor(Math.random() * buttons.length)
  const randomTerm = buttons[randomNum]
  // https://stackoverflow.com/questions/73979102/pulling-out-a-random-object-of-an-array-in-a-nodelist

  let newBox = document.createElement('div')
  
  newBox.classList.add('box')

  let addBox = document.querySelector('.palette-container')
  addBox.appendChild(newBox)

  newBox.style.backgroundColor = `${randomTerm.innerHTML}`
  newBox.textContent = `${randomTerm.innerHTML}`
}
