var Letter = function(letter){
    this.letter = letter
    this.guessed = false
    if(letter == ' '){
        this.guessed = true
    }
    this.toString = function(){
        if (this.guessed){
            return (this.letter)
        }
        return '_'
    }
    this.checkGuess = function(c){
        if(this.letter == c){
            this.guessed = true
            return true
        }
    }
}

exports.Letter = Letter