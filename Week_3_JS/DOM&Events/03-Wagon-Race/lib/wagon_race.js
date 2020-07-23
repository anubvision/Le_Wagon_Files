// TODO: write your code here
//function are blue
//let variables are white
//strings are white

const playerOneRaceTrack = document.querySelector('#player1_race');

const playerTwoRaceTrack = document.querySelector('#player2_race');

const handleWin = (playerTrack) => {
  const player = playerTrack.id
    let message;
     if(player === 'player1_race') {
      messege = Player 1
 } else {
  messege = Player 2
 }
 alert ($[messege])
  console.log(player);
}

//node is the name of the function
const moveCardForward = (playerTrack) => {
 const allChildren = playerTrack.querySelectorAll('td')
 //define whats active and next child
   let activeChild
   let nextChild
//get all the <td> children from their parent line
//variable.forEach(function)---in this scenerio
 allChildren.forEach((child, index) => {
  console.log ('index', index)
  // check if child has active class
  const className = child.classList.value;
  if(className === 'active') {
    //if child has active class, set it as active
    activeChild = child;
    //set the next child as the activeChild's index
    nextChild = allChildren[index + 1]
  }
 })
  if(!nextChild){
    return handleWin(playerTrack)
  }

console.log('allChildren.', allChildren)
 activeChild.classList.add('active')
 activeChild.classList.remove('active')
}

const handleKeyDwon = (event) => {
  //console.log("debug mesege for yourself", function)
    if(event.code === 'KeyQ') {
    moveCardForward(playerOneRaceTrack)
    //user pressed Q key
    console.log('The user pressed Q')
  }

  if(event.code === 'KeyP'){
    //user pressed P key
    moveCardForward(playerTwoRaceTrack)
  }
}

//1. when user presses key, we created 'keydown'(-is global event name) event. 'document.addEventListener('event', function)
document.addEventListener('keydown', handleKeyDwon)



//Johnny's

const playerOneRacetrack = document.querySelector('#player1_race')
const playerTwoRacetrack = document.querySelector('#player2_race')

const handleWin = (playerTrack) => {
  const player = playerTrack.id
  let message
  if (player === 'player1_race') {
    message = `Player 1`
  } else {
    message = 'Player 2'
  }

  alert(`${message} won the game!`)
}

const moveCarForward = (playerTrack) => {
  // define activeChild and nextChild
  let activeChild
  let nextChild
  // get all of the <td/> children from the parent element
  const allChildren = playerTrack.querySelectorAll('td')
  // loop through and find active and next
  allChildren.forEach((child, index) => {
    console.log('index', index)
    // check if the child has "active" class
    const className = child.classList.value
    if (className === 'active') {
      // if the child has "active" class, set it as active child
      activeChild = child
      // set the next child as the activeChild's index + 1
      nextChild = allChildren[index + 1]
    }
  })

  if (!nextChild) {
    return handleWin(playerTrack)
  }
  activeChild.classList.remove('active')
  nextChild.classList.add('active')
}

const handleKeyDown = (event) => {
  if (event.code === 'KeyQ') {
    // the user pressed q
    console.log('The user pressed Q')
    moveCarForward(playerOneRacetrack)
  }

  if (event.code === 'KeyP') {
    // the user pressed p
    console.log('The user pressed P')
    moveCarForward(playerTwoRacetrack)
  }
}

document.addEventListener('keydown', handleKeyDown)
