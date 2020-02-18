function maskify(cc) {
  var changeToString = cc.toString();
  var lastFourLetters = changeToString.substr(changeToString.length-4);
  if (changeToString.length <= 4){
    return cc;
  } else {
    var numberOfHushTags = changeToString.length - 4;
    var result ='#'.repeat(numberOfHushTags) + lastFourLetters;
    return result;
  }
}
maskify();