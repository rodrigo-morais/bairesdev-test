function isAlmostPalindrome(word) {
	var newWord = reverse(word);

	return word === newWord || testNumberOfDifferentLetters(word, newWord);
}

function reverse(word) {
	if(word === '') return '';
	else return reverse(word.slice(1)) + word.slice(0,1);
}

function testNumberOfDifferentLetters(word, newWord){
	var counter = 0,
		isEqual = word === newWord;

	if(word.length === newWord.length) {
		while(counter < word.length && isEqual === false){
			if(word[counter] !== newWord[counter]){
				var changedNewWord = substituteChar(newWord, counter, word.slice(counter, counter + 1))
				isEqual = changedNewWord === word;
			}
			counter = counter + 1;
		}
	}

	return isEqual;
}

function substituteChar(word, position, char) {
	if(position === 0) {
		return char + word.slice(1);
	}
	else if(position === word.length) {
		return word.slice(0, word.length) + char;
	}

	return word.slice(0, position) + char + word.slice(position, position + 1) + word.slice(position + 2);
}

function testNumberOfDifferentLetters2(word, newWord, changes){
	if(word.length <= 0 || word === newWord) return changes <= 1;
	else testNumberOfDifferentLetters2(word.slice(1), newWord.slice(1), changes + 1);
}