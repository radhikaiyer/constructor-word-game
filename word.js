var Letter = require("./Letter");

var Word = function(myWord) {
	//Taking a word from the chosen list.
	this.myWord = myWord;
	//Array of letters representing the letters of the random chosen word.
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


