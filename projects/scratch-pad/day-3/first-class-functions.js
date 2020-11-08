// #!/usr/bin/env node

'use strict';

/**
 * IN CLASS EXERCISE: FIRST CLASS FUNCTIONS
 */

/** 
 * Given an input base to test against, which could be a String or Number, 
 * return a Function that tests whether a given value is greater than the 
 * base.
 */
function createGreaterThanFilter(base) {
    // YOUR CODE BELOW HERE //
    //creating a variable named filter and making it equal the function with a parameter of value
    var filter = function (value) {
        //making an if statement with value being greater than base
        if (value > base) {
            //returning true
            return true;
        }else{
            //returning false
            return false;
        }
        
    }
    //returning filter
    return filter;
    
    // YOUR CODE ABOVE HERE //
}

/** 
 * Given an input base to test against, which could be a String or Number, 
 * return a Function that tests whether a given value is less than the 
 * base.
 */
function createLessThanFilter(base) {
    // YOUR CODE BELOW HERE //
    //returning value function from createGreaterThanFilter
    return function (value) {
        //if startement where vaulue is less than base
        if (value < base) {
            //returning true
            return true;
        } else {
            //returning false
            return false;
        }
    }
    
    
    // YOUR CODE ABOVE HERE //
}

/** 
 * Given a startsWith character, which will be a single character, return a 
 * Function that tests whether a given String starts with the startsWith 
 * character.
 */
function createStartsWithFilter(startsWith) {
    // YOUR CODE BELOW HERE //
    // creating a variable checkFirstLetter than asigning it the function with str1 as a parameter
    var checkFirstLetter = function (str1){
        //creating a variable words and asigning it to the first character of the paramieter and bringing that character toLowerCase
    var words = str1[0].toLowerCase()
    //retutning words with the first letter toLowerCase
    return words === startsWith.toLowerCase()
    }
    //returning variable checkFirstLetter
    return checkFirstLetter;
    // YOUR CODE ABOVE HERE //
}

/** 
 * Given a endsWith character, which will be a single character, return a 
 * Function that tests whether a given String ends with the endsWith 
 * character.
 */
function createEndsWithFilter(endsWith) {
    // YOUR CODE BELOW HERE //
    //creating a variable checkEndsLetter and asinging a function with str1 as it's parameter
    var checkEndsLetter = function (str1){
        //creating variable words and acessing then end of parameter array and making the last letter toLowerCase 
    var words = str1[str1.length -1].toLowerCase()
    //returning words that now end with toLowerCase
    return words === endsWith.toLowerCase()
    }
    //returing checkEndsLetter
    return checkEndsLetter;
    
    // YOUR CODE ABOVE HERE //
}

/** 
 * Given an Array of Strings and a Function designed to modify a String, 
 * return an Array of the Strings, modified.
 * 
 * TIP: You need to loop over the Strings, right? We need to pass each String to 
 * the modify Function, but we need to collect the results into some collection.
 */
function modifyStrings(strings, modify) {
    // YOUR CODE BELOW HERE //
    // imput: an array of strings and a function
    //output: an array of modified string
    var array = [];
    // loop through strings then modifies
    for (var i = 0; i < strings.length; i++) {
        //pushing loop into array
         array.push(modify(strings[i]));
    }
    //returning array
    return array;
    
    // YOUR CODE ABOVE HERE //
}

/** 
 * Given an Array of Strings and a Function designed to test the String in some 
 * way and return a Boolean on whether it passed, return true if ALL Strings pass the test.
 * 
 * Imagine you had a list of names, and you wanted to test they all 
 * begin with "C", or they are all exclaimations that end with "!".
 * 
 * TIP: You need to loop over the Strings, right? And pass them to the test?
 */
function allStringsPass(strings, test) {
    // YOUR CODE BELOW HERE //
    //creating a variable named result and having it equal true
    var result = true;
    //creating a for loop to pass through strings parameter
    for (var i = 0; i < strings.length; i++) {
        //seeing if test come back as fasle
        if (test(strings[i]) === false) {
            //false
            result = false;
    } 
    }
    //returning result
    return result;
    
    
    // YOUR CODE ABOVE HERE //
}

// DON'T REMOVE THIS CODE //////////////////////////////////////////////////////
if((typeof process !== 'undefined') &&
    (typeof process.versions.node !== 'undefined')) {
    // here, export any references you need for tests //
    module.exports.createGreaterThanFilter = createGreaterThanFilter;
    module.exports.createLessThanFilter = createLessThanFilter;
    module.exports.createStartsWithFilter = createStartsWithFilter;
    module.exports.createEndsWithFilter = createEndsWithFilter;
    module.exports.modifyStrings = modifyStrings;
    module.exports.allStringsPass = allStringsPass;   
}