let sentence = "this tsheet is not allowed bad, this is nice !";

let wordNot = sentence.indexOf("not");
let wordBad = sentence.indexOf("bad");


if (wordBad > wordNot && wordBad != -1 && wordNot != -1) {
    sentence = `${sentence.slice(0,wordNot)} good ${sentence.slice(wordBad + 3)}`
    console.log(sentence);
}else if (wordBad < wordNot || wordBad == -1 ||wordNot == -1) {
    console.log(sentence);
}
