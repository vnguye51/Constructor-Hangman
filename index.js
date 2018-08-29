var prompt = require('prompt')
var inquirer = require('inquirer')
var Word = require('./Word.js').Word
var possibleWords = require('./possibleWords.js').words


startGame()

function startGame(){
    var randomWord = possibleWords[Math.floor(Math.random()*possibleWords.length)]
    var word = new Word(randomWord)
    promptGuess()
    
    function promptGuess(){
        prompt.message = (word.joinWord())
        prompt.start()
        prompt.get({
            properties: {
                guess: {
                    description: ("\nGuess a letter!")
                },
        
            }
        }, function (err, result) {
            if(!word.guess(result.guess)){
                promptGuess()
                return
            }
            console.log(word.joinWord() + "\nYOU WIN!!!!")
            playAgain()
          });
    }

    function playAgain(){
        inquirer.prompt([{
            type: 'list',
            message: 'Play again?',
            choices: ['Yes','No'],
            name: 'choice'
        }]).then(function(response){
            if(response.choice == 'Yes'){
                startGame()
                return
            }
            console.log('Please come again!')
        })
    }
}

