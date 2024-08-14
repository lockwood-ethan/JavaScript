/*

A regular expression is a string pattern that is matched against a string. Regular expressions may be defined with a RegEx object or between two forward slashes.

*/

// Example 
let re = new RegExp("abc");

let re = /abc/;

// The RegExp methos test(str) returns true if the string matches the regex, and false otherwise

let words = ["ban", "babble", "make", "flab"];

let re = /ab/;

words.forEach(function(word) {
    if (re.test(word)) {
        console.log(word + " matches!");
    }
});


// Special characters

/*

* - Match the preceding character 0 or more times

+ - Match the preceding character 1 or more times

? - Match the preceding character 0 or 1 time

^ - Match at the beginning

$ - Match at the end

| - Match string on the left OR the right

*/


// Character ranges

/* Square brackets are used to match and character in a range of characters

let re = /[aeiou]/ matches any vowel

let re = /[0-9]/ matches any digit

*/

/* The not operator(^) negates a range

let re = /[^str]/ matches any character except s, t, or r

*/


// Metacharacters

/* A metacharacter is a character or character sequence that matches a class of characters

. - Match any single character except newline

\w - Match any word character (alphanumeric and underscore)

\W - Match any non-word character

\d - Match any digit

\D - Match any non-digit

\s - Match any whitespace character (space, tab, form feed, line feed)

\S - Match any non-whitespace character

*/


// Mode modifiers

/* A mode modifier (sometimes called a flag) changes how a regex matches and is placed after the second slash in a regex

i - Case insensitivity - Pattern matches uppercase or lowercase

m - Multiline - Pattern with ^ and $ match beginning and end of any line in a multiline string

g - Global search - Pattern is matched repeatedly instead of just once

*/

// Example
let re = /aBc/i // Matches "abc" and "AbC"


// Determining what matches

/* The RegExp method exec(str) determines what part of the string str matches a regex. The exec() method returns a result array, or returns null if the pattern does not match */

// Example
let re = /t.+r/;
let result = re.exec("Raise the bar high.");

if (result === null) {
    console.log("No match.");
}
else {
    // Index 0 is the full string that matched
    console.log(result[0]); // the bar
}

/* Parentheses in a regex are used to "remember" different parts of a matched string */

// Example
let re = /(B.+)'s (.+day)/;
let result = re.exec("When is Becky's birthday?");

// Index 0 is the full string that matched
console.log(result[0]); // Becky's birthday

// Index 1 is the first remembered part
console.log(result[1]); // Becky

// Index 2 is the second remembered part
console.log(result[2]); // birthday

// String methods that use regex

/* Several String methods work with regular expressions

match() - Returns an array of the matches made when matching the string against a regex

replace() - Returns a new string that replaces matching strings with a replacement string

search() - Returns the index of the first match between the regex and the given string, or -1 if no match is found

split() - Returns an array of strings created by separating the string into substrings based on the regex

*/