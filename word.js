var Letter = require("./Letter");

var Word = function(myWord) {
	//Take chosen word from word list.
	this.myWord = myWord;
	//This is an array of letters representing the letters of the random chosen word.
	this.letters = [];
	
	this.underscores = [];

	this.splitWord = function() {
		this.letters = this.myWord.split("");

		numberUnderscoresNeeded = this.letters.length;
		
		console.log(this.underscores.join(" "));
	}
	this.generateLetters = function() {
		for (i=0; i < this.letters.length; i++){
			this.letters[i] = new Letter (this.letters[i]);
			
			this.letters[i].showCharacter();
		}
	}
}

module.exports = Word;


