const selectionButtons = document.querySelector


/* 
const getUserChoice = userInput => {
    userInput = userInput.toLowerCase(); 
    if(userInput === 'rock' || userInput === 'paper' || userInput === 'scissors' || userInput === 'bomb'){
      return userInput;
    }else{
      console.log('We\'re sorry, that\'s an invalid response');
    }
  }
  
  const getComputerChoice = () => {
    const randomNumber = Math.floor(Math.random() * 3)
    switch (randomNumber){
      case 0:
      return 'rock';
      case 1:
      return 'paper';
      case 2:
      return 'scissors';
    }
  };
  
  //Paper Beats Rock; Scissors Beats Paper; Rock Beats Scissors
  
  const determineWinner = (userChoice, computerChoice) => {
    if(userChoice === computerChoice){
      return 'This game was a tie!'
    }else if(userChoice === 'rock' && computerChoice === 'paper'){
      return 'Computer wins!'
    }else if(userChoice === 'rock' && computerChoice === 'scissors'){
      return 'User wins!'
      }else if(userChoice === 'paper' && computerChoice === 'scissors'){
        return 'Computer wins!'
      }else if(userChoice === 'paper' && computerChoice === 'rock'){
        return 'User wins!'
      }else if(userChoice === 'scissors' && computerChoice === 'rock'){
        return 'Computer wins!'
      }else if(userChoice === 'scissors' && computerChoice === 'paper'){
        return 'User wins!'
      }else if(userChoice === 'bomb'){
        return 'User wins! Nice Cheat code'
      }
      else {
        return 'Invalid Game'
      }
  };
  
  const playGame = () => {
    const userChoice = getUserChoice('Bomb')
    const computerChoice = getComputerChoice()
    console.log(determineWinner(userChoice, computerChoice));
  }
  
  playGame(); */