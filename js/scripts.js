
var isVowel = function(character){
  var charLow = character.toLowerCase();
  if (charLow === "a" || charLow === "e" || charLow === "i" || charLow === "o" || charLow === "u"){
    return true;
  } else {
    return false;
  }
};

var translateWord = function(word) {
  if ((isVowel(word.charAt(0))) && (word.length === 1)){
    return word.concat("ay");
  } else if (word.includes("qu") || word.includes("Qu")) {
    var indexCapQU = word.indexOf("Qu");
    var indexLowQU = word.indexOf("qu")
    if (indexCapQU === 0 || indexLowQU === 0){
      var qu = word.substring(0,2);
      var sliced = word.slice(2);
      return sliced + qu + "ay";
    } else if (indexCapQU === 1 || indexLowQU === 1) {
      var qu = word.substring(0,3);
      var sliced = word.slice(3);
      return sliced + qu + "ay";
    }
  } else if ((isVowel(word.charAt(0))) && (word.length !== 1)){
    return word.concat("way");

  } else if ((!isVowel(word.charAt(0))) && (isVowel(word.charAt(1)))){
    var firstChar = word.charAt(0);
    var sliced = word.slice(1);
    return sliced + firstChar + "ay";

  } else if ((!isVowel(word.charAt(0))) && (!isVowel(word.charAt(1))) && (isVowel(word.charAt(2)))){
    var firstTwo = word.substring(0,2);
    var sliced = word.slice(2);
    return sliced + firstTwo + "ay";

  } else if ((!isVowel(word.charAt(0))) && (!isVowel(word.charAt(1))) && (!isVowel(word.charAt(2)))){
    var firstThree = word.substring(0,3);
    var sliced = word.slice(3);
    return sliced + firstThree + "ay";
  }
};

var buildSentence = function(sentence){
  var sentenceArray = sentence.split(" ");
  var result = "";
  sentenceArray.forEach(function(word){
    result += translateWord(word) + " ";
  });
  return result;
}



$(document).ready(function(){
  $("form#translator").submit(function(event){
    event.preventDefault();
    var userInput = $("input#sentence").val();
    var result = buildSentence(userInput);
    $("#result").text(result);

  });
});
