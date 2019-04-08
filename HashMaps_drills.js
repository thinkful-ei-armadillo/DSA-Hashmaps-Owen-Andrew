const HashMap = require('./HashMap');

function main() {
	let lor = new HashMap();
	HashMap.MAX_LOAD_RATIO = 0.5;
	HashMap.SIZE_RATIO = 3;
	// const MAX_LOAD_RATIO = 0.5;
	// const SIZE_RATIO = 3;
	lor.set('Hobbit', 'Bilbo');
	lor.set('Hobbit', 'Frodo');
	lor.set('Wizard', 'Gandalf');
	lor.set('Human', 'Aragorn');
	lor.set('Elf', 'Legolas');
	lor.set('Maiar', 'The Necromancer');
	lor.set('Maiar', 'Sauron');
	lor.set('RingBearer', 'Gollum');
	lor.set('LadyOfLight', 'Galadriel');
	lor.set('HalfElven', 'Arwen');
	lor.set('Ent', 'Treebeard');
	console.log(lor);
	console.log(lor.get('Maiar'));
	console.log(lor.get('Hobbit'));

	// What are the values of Maiar and Hobbit that you have? Is there a discrepancy? Explain your answer.
	// Sauron and Frodo. No there is no discrepancy because with each call of the set method at the same key, the method
	// is just rewriting that value.

	// What is the capacity of your hash table after you have hashed all the above items? Explain your answer.
	// 24. Only one resize was required so we have a capacity of 8 * 3. And since we did not add over 50% of 24,
	// we didn't need to resize again.
}

// main();

const WhatDoesThisDo = function() {
	let str1 = 'Hello World.';
	let str2 = 'Hello World.';
	let map1 = new HashMap();
	map1.set(str1, 10);
	map1.set(str2, 20);
	let map2 = new HashMap();
	let str3 = str1;
	let str4 = str2;
	map2.set(str3, 20);
	map2.set(str4, 10);

	console.log(map1.get(str1));
	console.log(map2.get(str3));
};

// WhatDoesThisDo();

// outputs 20, 10
// this is because str1 and str2 are the same key
// used to set the value in the hash table, so the second
// .set value from each map is console logged

let str = 'google all that you think can think of';
const removeDuplicates = str => {
	let letters = new HashMap();
	HashMap.MAX_LOAD_RATIO = 0.5;
	HashMap.SIZE_RATIO = 3;
	let dupeRemoved = '';

	for (let i = 0; i < str.length; i++) {
		let charAt = str.charAt(i);
		try {
			letters.get(charAt);
		} catch {
			dupeRemoved += charAt;
			letters.set(charAt);
		}
	}
	console.log(letters);
	return dupeRemoved;
};

// console.log(removeDuplicates(str));

// input string
// output : true/false

// generate hashmap with all permutations
// use stack method to identify palindrome
// return boolean

// for each character in string
// slice that character
// 0, 1, 2, 3
// input recursive: prefix, position=0

const palDetection = str => {
	let unpaired = new Map();
	for (let char of str) {
		try {
			if (unpaired.get(char) === undefined) {
				throw new Error();
			}
			unpaired.set(char, true);
		} catch {
			unpaired.set(char, false);
		}
	}
	let pairedStatus = Array.from(unpaired.values());
	let unpairedLetters = 0;
	for (let i = 0; i < pairedStatus.length; i++) {
		if (!pairedStatus[i]) {
			unpairedLetters++;
		}
		if (unpairedLetters === 2) {
			return false;
		}
	}
	return true;
};

// console.log(palDetection('acecarr'));
// console.log(palDetection('uunnff'));
// console.log(palDetection('rturt'));
// console.log(palDetection('a'));

let inputWords = ['east', 'cars', 'acre', 'arcs', 'teas', 'eats', 'race'];

// iterate over input
//
const anaGroups = input => {
	let anagram = new Map();
	let sortedInput = input;

	for (i = 0; i < sortedInput.length; i++) {
		key = sortedInput[i]
			.split('')
			.sort()
			.join('');
		if (anagram.get(key) === undefined) {
			anagram.set(key, [sortedInput[i]]);
		} else {
			anagram.get(key).push(sortedInput[i]);
		}
	}
	// sortedInput not sorted, and inserts all inputs as keys
	// for (let item of sortedInput) {
	// 	anagram.set(item, []);
	// }
	// console.log(anagram);

	// for (let word of input) {
	// 	let index = input.indexOf(word);
	// 	console.log(index);
	// 	let storedValue = anagram.get(sortedInput[index]);
	// 	anagram.set(sortedInput[index], [...storedValue, word]);
	// }

	return Array.from(anagram.values());

	// sort elements of input
	// iterate through sortedInput, put into a hashmap
	//['aest', 'acrs', 'acer']
	// walk through input
	// anagram.set(sorted, [...anagram.get(sorted).value, input])
	// return Array.from(anagram.values())
};

console.log(anaGroups(inputWords));
