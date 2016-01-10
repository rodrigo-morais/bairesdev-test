function isAlmostPalindrome(word) {
	var newWord = reverse(word);

	return word === newWord || testNumberOfDifferentLetters(word, newWord, 0);
}

function reverse(word) {
	if(word === '') return '';
	else return reverse(word.slice(1)) + word.slice(0,1);
}

function testNumberOfDifferentLetters(word, newWord, changes){
	if(word.length === 0)
		return changes <= 1;
	else if(word.slice(0,1) === newWord.slice(0,1))
		return testNumberOfDifferentLetters(word.slice(1,-1), newWord.slice(1,-1), changes);
	else
		return testNumberOfDifferentLetters(word, newWord.slice(-1) + newWord.slice(1,-1) + newWord.slice(0,1), changes + 1);
}