function remove_first_occurrence(str, searchstr)       {
	var index = str.indexOf(searchstr);
	if (index === -1) {
		return str;
	}
	return str.slice(0, index) + str.slice(index + searchstr.length);
}

let remover = prompt("Enter a collection of word or words you want removed: ");
let sentence = prompt("Enter a sentence: ");

console.log(remove_first_occurrence(sentence, remover));
