var Letter = require('./Letter.js').Letter
var Word = function(word){
    var formattedWord = []
    for(var i = 0; i < word.length; i++){
        formattedWord.push(new Letter(word[i]))
    }

    this.word = formattedWord //Array of Letters
    this.joinWord = function(){
        return this.word.join(' ')
    }
    this.guess = function(c){
        var win = true
        this.word.forEach(function(letter){
            letter.checkGuess(c)
            if(!letter.guessed){
                win = false
            }
        })
        return win
    }
}

exports.Word = Word