// Utility Logic

function noInputtedWord(word, text) {
  return ((text.trim().length === 0) || (word.trim().length === 0));
}

// Business Logic

function wordCounter(text) {
  if (text.trim().length === 0) {
    return 0;
  }
  let wordCount = 0;
  const wordArray = text.split(" ");
  wordArray.forEach(function(element) {
    if (!Number(element)) {
      wordCount++;
    }
  });
  return wordCount;
}

//Psuedo
// function (text){

//   const arr = text.split()
//   ['word', 'words', 'word3', 'word']
//   counter =
//   first loop --> grabs the first word in your arr
//   second loop --> check first word against every other word
//   for(let i =0, ){
//     for(let j=0)
//   }
// }

// if the element matches index+1, then add to frequencyCount & move on.

// const wordArray = text.split(" ");
// let frequencyCount = 0;
// wordArray.forEach(function(index) {
//   if ( 0 === index +1) {
//     frequencyCount++;
//   }
// }

function mostCommonWords (text) {
  const wordArray = text.split(" ");
  let sortedArray = wordArray.sort();
  let frequencyCount = 0;
  word = wordArray[0]
  const countedWords = []

  sortedArray.forEach(function (element) {
    if (element === word) {
      frequencyCount++;
    } else {
     countedWords.push(word + " " + frequencyCount)
     word = element 
    }
  })
  countedWords.push(word + " " + frequencyCount)
}


function numberOfOccurrencesInText(word, text) {
  if (noInputtedWord(word, text)) {
    return 0;
  }
  const wordArray = text.split(" ");
  let wordCount = 0;
  wordArray.forEach(function(element) {
    if (element.toLowerCase().includes(word.toLowerCase())) {
     wordCount++;
    }
  });
    return wordCount;
}

// UI Logic

function boldPassage(word, text) {
  if (noInputtedWord(word, text)) {
    return "";
  }
  let htmlString = "<p>";
  let textArray = text.split(" ");
  textArray.forEach(function(element, index) {
  if (element.toLowerCase().includes(word.toLowerCase())) {
    htmlString = htmlString.concat("<b>" + element + "</b>");
  } else {
    htmlString = htmlString.concat(element);
  }
  if (index !== (textArray.length - 1)) {
    htmlString = htmlString.concat(" ");
    }
  });
  return htmlString + "</p>";
}

$(document).ready(function(){
  $("form#word-counter").submit(function(event){
    event.preventDefault();
    const passage = $("#text-passage").val();
    const word = $("#word").val();
    const wordCount = wordCounter(passage);
    const occurrencesOfWord = numberOfOccurrencesInText(word, passage);
    $("#total-count").html(wordCount);
    $("#selected-count").html(occurrencesOfWord);
    $("#bolded-passage").html(boldPassage(word, passage));
  });
});
