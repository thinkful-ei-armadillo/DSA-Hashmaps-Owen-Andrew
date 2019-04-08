
/*=================================================================================
Exercise 1 - Counting Sheep

Write a recursive function that counts how many sheep jumps over the fence. Your program should take a number as an input. That number should be the number of sheep you have. The function should display the number along with the message "Another sheep jump over the fence" until no more sheep are left.

Input: 3
Output:
	3 - Another sheep jump over the fence
	2 - Another sheep jump over the fence
	1 - Another sheep jump over the fence
*/

/*
 * @function countSheep
 * @desc     Recursive program that counts how many sheep jumps over the fence. 
 * @param    {number} num - the number sheep 
 * @returns  
 * @display  displays how many sheep jumped over the fence
 */

function countSheep(num){
    //stopping condition of base case
    if(num === 0){
        console.log(`All sheep jumped over the fence`);
    } 
    //this is the recursive case
    //this will be executed until it reaches base case
    else{
        console.log(`${num}: Another sheep jump over the fence`);
        countSheep(num-1);
    }
}
/*=================================================================================
Array Double
Write a function that takes an array as input which contains an unknown set of numbers, 
and outputs an array with each input value doubled. Test your solution by trying a 
handful of different arrays. For example,
Input: [1, 2, 3]
Output: [2, 4, 6]
*/
function double_all(arr) {
    if (!arr.length) {
        return [];
    }
    return [arr[0] * 2, ...double_all(arr.slice(1))];
}

/*=================================================================================
Exercise 3 - Reverse String

Write a program that reverses a string. Take a string as input, 
reverse the string, and return the new string.

Input: 'tauhida'
Output: adihuat
*/

function reverseString(str) {
    if (str.length < 2) {
        return str;
    }
    return reverseString(str.slice(1)) + str[0];
}


/*=================================================================================
Exercise 4 - Triangular Number

Calculates the nth triangular number.
A triangular number counts the objects that can form an equilateral triangle. 
The nth triangular number is the number of dots composing a triangle with n dots on a side, 
and is equal to the sum of the n natural numbers from 1 to n. 
This is the Triangular Number Sequence: 1, 3, 6, 10, 15, 21, 28, 36, 45
                          *
            *           *    *
*     |   *   *  |   *    *    *  |
 1st     2nd             3rd             nth?  

1st trianular number = 1
2nd = (1+2) = 3
3rd = (1+2+3) = 6 
5th = (1+2+3+4+5) = 15

Input: 5
Output: 15

*/
//Should always return n*(n+1)/2
function triangle(n) {
    if (n < 2) 
        return n;
    return n + triangle(n - 1);
}

/*=================================================================================
Exercise 5 - String Splitter

Split a string based upon a separator (similar to String.prototype.split).

Input: '1/21/2018'
Output: 1212018 OR ["1", "21", "2018"]
*/
function split(str, sep) {
    var idx = str.indexOf(sep);
    if (idx == -1) 
        return [str];
		//you don't have to return an array, you can return a string as an array of 
		//character 
		//return str;
    return [str.slice(0, idx)].concat(split(str.slice(idx + sep.length), sep))
	//all these are valid syntax
	//return (str.slice(0,idx) + (split(str.slice(idx + sep.length), sep)))
	//return str.slice(0,idx).concat(split(str.slice(idx + sep.length), sep))
}

/*=================================================================================
Exercise 6 - Binary Representation

Write a recursive function that prints out the binary representation of a given number. 
For example the program should take 3 as an input and print 11 as output, or 25 as an input 
and print 11001 as an output. Note that the binary representation of 0 should be 0. 

Input: 25
Output: 11001
*/
function convertToBinary(num){
    if(num>0){
        let binary = Math.floor(num%2); //save the reminder in binary
		//divide the number by 2 and send that to the function again
		//carry the reminder to the next recursion call
        return (convertToBinary(Math.floor(num/2))+ binary);
    }else{
        return ''; //base case - at some point the divisions will lead to 0
    }
}

/*=================================================================================
Exercise 7 - Anagrams

An anagram is any word or phrase that exactly reproduces the letters in another order. 
Write a program that creates an anagram (listing all the rearrangements of a word) of a given word. 
For example, if the user types east, the program should list all 24 permutations, including eats, etas, teas, 
and non-words like tsae.

Hint: For your algorithm, you might want to think about a prefix and use that to create the new words. 
For example, given east, use e as a prefix and you would place e in front of all six permutations of ast 
— ast, ats, sat, sta, tas, and tsa. This will give you the words east, eats, esat, esta, etas, and etsa. 
Continue this way until you find all the anagrams for east. There should be 24 of them.

Input: 
Output: 

*/

function anagrams(prefix, str){
    if(str.length <= 1){
        console.log(`The anagram is ${prefix}${str}`);
    } else {
        for(let i=0; i<str.length; i++){
            let currentLetter = str.substring(i, i+1); 
            let previousLetters = str.substring(0,i);
            let afterLetters = str.substring(i+1);
            anagrams(prefix+currentLetter, previousLetters+afterLetters);
        }
    }
}
function printAnagram(word){
    //console.log(`The word for which we will find an anagram is ${word}`);
    anagrams(' ', word);

}

/* ==============================
Exercise 8: Animal Hierarchy
Step through the code and find the input to the program, input to each recursive calls, 
output of each recursive calls and the output of the program. The purpose of this 
exercise is not for you to copy paste the code and find out the output but rather 
step through each line, analyze each step to understand how recursion works.
*/

const animalHierarchy = [
    {id: 'Animals', parent: null},
    {id: 'Mammals', parent: 'Animals'},
    {id: 'Dogs', parent:'Mammals' },
    {id: 'Cats', parent:'Mammals' },
    {id: 'Golden Retriever', parent: 'Dogs'},
    {id: 'Husky', parent:'Dogs' },
    {id: 'Bengal', parent:'Cats' }
]

// ==============================
function traverse(animalHierarchy, parent) {
    let node = {};
    animalHierarchy.filter(item => item.parent === parent)
                   .forEach(item => node[item.id] = traverse(animalHierarchy, item.id));
    return node;  
}

/*=================================================================================
Exercise 9 - Factorial

Write a recursive program that finds the factorial of a given number. 
The factorial of a number can be found by multiplying that number by each number 
between itself and one. The factorial of 5 is equal to 5 * 4 * 3 * 2 * 1 = 120

Input: 5
Output: 120

*/
function factorial(n) {  
  // Base Case - when n is equal to 0, we stop the recursion
  if (n === 0) {
    return 1;
  }
  // This is our Recursive Case
  // It will run for all other conditions except when n is equal to 0
  return n * factorial(n - 1);
}

/*=================================================================================
Exercise 9 - Fibonacci

Write a recursive program that prints the fibonacci sequence of a given number. 
The fibonnaci sequence a series of numbers in which each number is the sum of the 
two preceding numbers. 
For example the 7th fibonacci number in a fibonaci sequence is  13. 
The sequence looks as follows: 1 1 2 3 5 8 13.

Input: 7
Output: 13
*/
function fibonacci(n) {
  // Base case
  if (n <= 0) {
    return 0;
  }
  // Base case
  if (n <= 2) {
    return 1;
  }	
  // Recursive case
  return fibonacci(n - 1) + fibonacci(n - 2);	
}

// with sequence
// by Wences:
/*
function fibonacci(num){
  if(num === 0){ return; }
  if(num === 1){ return [0,1]; }
  else { 
    let results = fibonacci(num - 1); 
    const newNum = results[results.length -1] + results[results.length -2]; 
    results.push(newNum);
    return results;
  }
}
console.log(fibonacci(5));
*/
// by Tauhida:
function main(){
 
 console.log('#10 - Fibonacci Sequence');

    const fib = 7;

    for(let i=1; i<=fib; i++){
        console.log(fibonacci(i));
    }

    console.log('#10 - Fibonacci total');
    console.log(fibonacci(fib));
}
// =================== //


/*
Organization Chart
Write a recursive function that prints the following organization chart. 
Your output should be as shown below with proper indentation to show the hierarchy.
*/

let organization = {
	"Zuckerberg": {		
		"Schroepfer": {
			"Bosworth": {
				"Steve":{},
				"Kyle":{},
				"Andra":{}
			},
			"Zhao": {
				"Richie":{},
				"Sofia":{},
				"Jen":{}
			},
			"Badros": {
				"John":{},
				"Mike":{},
				"Pat":{}
			},
			"Parikh": {
				"Zach":{},
				"Ryan":{},
				"Tes":{}
			}
		},
		"Schrage": {
			"VanDyck": {
				"Sabrina":{},
				"Michelle":{},
				"Josh":{}
			},
			"Swain": {
				"Blanch":{},
				"Tom":{},
				"Joe":{}
			},
			"Frankovsky": {
				"Jasee":{},
				"Brian":{},
				"Margaret":{}
			}
		},
		"Sandberg": {
			"Goler": {
				"Eddie":{},
				"Julie":{},
				"Annie":{}
			},
			"Hernandez": {
				"Rowi":{},
				"Inga":{},
				"Morgan":{}
			},
			"Moissinac": {
				"Amy":{},
				"Chuck":{},
				"Vinni":{}
			},
			"Kelley": {
				"Eric":{},
				"Ana":{},
				"Wes":{}
			}
		}
	}
};

function traverseA(data, depth = 0) {
	let indent = " ".repeat(depth * 4);
	Object.keys(data).forEach(key => {
		console.log(indent + key);
		traverseA(data[key], depth + 1)
	});
}

function traverseB(node, indent=0) {
	for (var key in node) {
		console.log(" ".repeat(indent), key);
		traverseB(node[key], indent + 4);
	}
}


function main(){
	//console.log('#1 - count sheep');
	//countSheep(5);

	//console.log('#2 - Array Doubler');
	//let arr = [10,5,3,4];
	//console.log(double_all(arr));

	//console.log('#3 - Reverse String');
	//console.log(reverseString("tauhida"));

	//console.log('#4 - nth Triangular Number');
	//console.log(triangle(5));

	//console.log('#5 - String Splitter');
	//console.log(split('1/21/2018', '/'));

	//console.log('#6 - Binary Representation');
	//console.log(convertToBinary(25));

	//console.log('#7 - Anagrams');
	//printAnagram("east");

	//console.log('#8 - animalHierarchy');
	//console.log(traverse(animalHierarchy, null));

	//console.log('#9 - Factorial');
	//console.log(factorial(5)); //120

	//console.log('#10 - Fibonacci');
	//console.log(fibonacci(7));

	console.log('#11 - Organization Chart');
	console.log(traverseA(organization));
	//console.log(traverseB(organization));

}
main()



