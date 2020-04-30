function duplicateCount(text){
    // // break a string into an array of single characters
    // var singleCharacter = text.split();
    
    // set a counter for the number of duplicates
    var counter;

    // transfer all characters into lower case for comparison
    var lowerCaseText = text.map(function (a){
        return a.toLowerCase();
    });

    // count the number of each characters in the string
    for (i=0; i<lowerCaseText.length; i++)
        // if a character has a count number higher than 1, then counter++
    // return counter
}

// run this function