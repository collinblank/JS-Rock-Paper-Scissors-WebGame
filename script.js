//creating array and logic for moves to correspond with correct win/loss/tie situations. Track who won and lost
const selectionButtons = document.querySelectorAll('[data-selection]')
const finalColumn = document.querySelector('[data-final-column]')
const computerScoreSpan = document.querySelector('[data-computer-score]')
const yourScoreSpan = document.querySelector('[data-your-score]')
const selections = [
  {
    name: 'rock',
    emoji: '🪨',
    beats: ['scissors', 'lizard'],
  },
  {
    name: 'paper',
    emoji: '📄',
    beats: ['rock' , 'spock'],
  },
  {
    name: 'scissors',
    emoji: '✂️',
    beats: ['paper', 'lizard'],
  },
  {
    name: 'lizard',
    emoji: '🦎',
    beats: ['paper', 'spock'],
  },
  {
    name: 'spock',
    emoji: '🖖',
    beats: ['rock', 'scissors'],
  },

]

selectionButtons.forEach(selectionButton => {
  selectionButton.addEventListener('click', e => {
    const selectionName = selectionButton.dataset.selection
    const selection = selections.find(selection => selection.name === selectionName)
    makeSelection(selection)
  })
})

function makeSelection(selection) {
  const computerSelection = randomSelection()
  const personWinner = determineWinner(selection, computerSelection)
  const computerWinner = determineWinner(computerSelection, selection)
  addSelectionResult(computerSelection, computerWinner)
  addSelectionResult(selection, personWinner)

  if (personWinner) incrementScore(yourScoreSpan)
  if (computerWinner) incrementScore(computerScoreSpan)
}

function incrementScore(scoreSpan) {
  scoreSpan.innerText = parseInt(scoreSpan.innerText) + 1
}

function addSelectionResult(selection, winner) {
  const div = document.createElement('div')
  div.innerText = selection.emoji
  div.classList.add('score-selection')
  if (winner) div.classList.add('winner')
  finalColumn.after(div)
}

function determineWinner(selection, opponentSelection) {
  return selection.beats[0] === opponentSelection.name || selection.beats[1] === opponentSelection.name
}

function randomSelection() {
  const randomIndex = Math.floor(Math.random() * selections.length)
  return selections[randomIndex]
}
