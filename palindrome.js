function isAlmostPalindrome(word) {
	var newWord = '';

	for(var counter = 0; counter < word.length; counter = counter + 1) {
		newWord = word[counter] + newWord;
	}

	return word === newWord || testNumberOfDifferentLetters(word, newWord);
}

function testNumberOfDifferentLetters(word, newWord){
	var counter = 0,
		changes = 0,
		isEqual = false;

	if(word.length === newWord.length) {
		while(counter < word.length && isEqual){
			if(word[counter] !== newWord[counter]){
				if(counter == 0) {
					isEqual = newWord.slice(1, newWord.length) === word.slice(0, word.length)
				}
				else {
					isEqual = (newWord.slice(0, counter - 1) + newWord(counter + 1, newWord.length)) === (word.slice(0, counter - 1) + word(counter + 1, word.length))
				}
				changes = changes + 1;
			}
			counter = counter + 1;
		}
	}

	return isEqual && changes <= 1;
};