var Letter = function(character) {
	//String value to store the underlying character for the letter
    this.character = character.toUpperCase();
    
	// Boolean that stores if the letter has been chosen yet
    this.letterGuessedCorrectly = false;
    
	// A function that returns the underlying character if the letter has been guessed, 
	this.showCharacter = function() {
		if (this.letterGuessedCorrectly) {
			console.log(this.character);
		}
		else {
			//console.log ("_");
		}

	}
}

module.exports = Letter