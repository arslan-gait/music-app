function generateAlphabet() {
  var alphabet = new Array();
  var letter = new Object();

  alphabet.push({
    latin: "a",
    uyghur: '\u0627'
  });

  alphabet.push({
    latin: "b",
    uyghur: '\u0628'
  });

  var letter = new Object();
  letter.latin = "s";
  letter.uyghur = '\u0633'; //s
  alphabet.push(letter);

  var letter = new Object();
  letter.latin = "d";
  letter.uyghur = '\u062F'
  alphabet.push(letter);

  var letter = new Object();
  letter.latin = "f";
  letter.uyghur = '\u0641';    //f
  alphabet.push(letter);

  var letter = new Object();
  letter.latin = "g";
  letter.uyghur = '\u06AF';   //g
  alphabet.push(letter);

  var letter = new Object();
  letter.latin = "i";
  letter.uyghur = '\u0649'; //i
  alphabet.push(letter);

  var letter = new Object();
  letter.latin = "j";
  letter.uyghur = '\u062C'; //j
  alphabet.push(letter);

  var letter = new Object();
  letter.latin = "k";
  letter.uyghur = '\u0643'; //k
  alphabet.push(letter);

  var letter = new Object();
  letter.latin = "l";
  letter.uyghur = '\u0644'; //l
  alphabet.push(letter);

  var letter = new Object();
  letter.latin = "m";
  letter.uyghur = '\u0645'; //m
  alphabet.push(letter);

  var letter = new Object();
  letter.latin = "n";
  letter.uyghur = '\u0646'; //n
  alphabet.push(letter);

  var letter = new Object();
  letter.latin = "o";
  letter.uyghur = '\u0648'; //o
  alphabet.push(letter);

  var letter = new Object();
  letter.latin = "\u00F6";
  letter.uyghur = '\u06C6'; //o
  alphabet.push(letter);

  var letter = new Object();
  letter.latin = "p";
  letter.uyghur = '\u067E'; //p
  alphabet.push(letter);

  var letter = new Object();
  letter.latin = "ng";
  letter.uyghur = '\u06AD'; //ng
  alphabet.push(letter);

  var letter = new Object();
  letter.latin = "c";
  letter.uyghur = '\u0686' //q
  alphabet.push(letter);

  var letter = new Object();
  letter.latin = "r";
  letter.uyghur = '\u0631'; //r
  alphabet.push(letter);

  var letter = new Object();
  letter.latin = "s";
  letter.uyghur = '\u0633'; //s
  alphabet.push(letter);

  var letter = new Object();
  letter.latin = "t";
  letter.uyghur = '\u062A'; //t
  alphabet.push(letter);

  var letter = new Object();
  letter.latin = "u";
  letter.uyghur = '\u06C7'; //u
  alphabet.push(letter);

  var letter = new Object();
  letter.latin = "\u00FC";
  letter.uyghur = '\u06C8'; //v
  alphabet.push(letter);

  var letter = new Object();
  letter.latin = "w";
  letter.uyghur = '\u06CB'; //w
  alphabet.push(letter);

  var letter = new Object();
  letter.latin = "y";
  letter.uyghur = '\u064A'; //y
  alphabet.push(letter);

  var letter = new Object();
  letter.latin = "z";
  letter.uyghur = '\u0632'; //z
  alphabet.push(letter);

  var letter = new Object();
  letter.latin = "zh";
  letter.uyghur = '\u0698';   //zh
  alphabet.push(letter);

  var letter = new Object();
  letter.latin = "gh";
  letter.uyghur = '\u063A'; //gh
  alphabet.push(letter);

  var letter = new Object();
  letter.latin = " ";
  letter.uyghur = ' '; //space
  alphabet.push(letter);

  var letter = new Object();
  letter.latin = "?";
  letter.uyghur = '\u061F';   //?
  alphabet.push(letter);

  var letter = new Object();
  letter.latin = ".";
  letter.uyghur = '\u065C';        //.
  alphabet.push(letter);

  var letter = new Object();
  letter.latin = ",";
  letter.uyghur = '\u060C';        //,
  alphabet.push(letter);

  // if x is used as h in uyghur
  // if (letter_h.value === 'x') {

  var letter = new Object();
  letter.latin = "h";
  letter.uyghur = '\u06BE'; //h
  alphabet.push(letter);

  var letter = new Object();
  letter.latin = "x";
  letter.uyghur = '\u062E';   //x is h in uyghur
  alphabet.push(letter);

  // }
  // else {
  // var letter = new Object();
  // letter.latin = "h";
  // letter.uyghur = '\u062E';   //x is h in uyghur
  // alphabet.push(letter);

  // var letter = new Object();
  // letter.latin = "x";
  // letter.uyghur = '\u0634'; //sh as xam
  // alphabet.push(letter);
  // }

  // if (letter_q.value === "ch") {
  var letter = new Object();
  letter.latin = "ch";
  letter.uyghur = '\u0686'; //q
  alphabet.push(letter);

  var letter = new Object();
  letter.latin = "q";
  letter.uyghur = '\u0642';    // kh in hasim 
  alphabet.push(letter);

  // }
  // else {
  // var letter = new Object();
  // letter.latin = "q";
  // letter.uyghur = '\u0686'; //q
  // alphabet.push(letter);
  // }

  // if (letter_sh.value === "sh") {
  var letter = new Object();
  letter.latin = "sh";
  letter.uyghur = '\u0634'; //sh as xam
  alphabet.push(letter);
  // }
  // else {
  // var letter = new Object();
  // letter.latin = "x";
  // letter.uyghur = '\u0634'; //sh as xam
  // alphabet.push(letter);
  // }

  // if (letter_e.value === "e") {
  var letter = new Object();
  letter.latin = "e";
  letter.uyghur = '\u06D5'; //ë
  alphabet.push(letter);

  var letter = new Object();
  letter.latin = "\u00EB";
  letter.uyghur = '\u06D0'; //ë
  alphabet.push(letter);

  var letter = new Object();
  letter.latin = "\u00E9";
  letter.uyghur = '\u06D0'; //ë
  alphabet.push(letter);

  var letter = new Object();
  letter.latin = "\u00E8";
  letter.uyghur = '\u06D0'; //ë
  alphabet.push(letter);
  // }
  // else {
  //   var letter = new Object();
  //   letter.latin = "\u00EB";
  //   letter.uyghur = '\u06D5'; //ë
  //   alphabet.push(letter);

  //   var letter = new Object();
  //   letter.latin = "\u00E9";
  //   letter.uyghur = '\u06D5'; //ë
  //   alphabet.push(letter);

  //   var letter = new Object();
  //   letter.latin = "\u00E8";
  //   letter.uyghur = '\u06D5'; //ë
  //   alphabet.push(letter);


  //   var letter = new Object();
  //   letter.latin = "e";
  //   letter.uyghur = '\u06D0';
  //   alphabet.push(letter);


  // }
  //letter_h.value;   letter h in uyghur  
  return alphabet;
}

const alphabet = generateAlphabet()

export default function ConvertL2U(input) {

  // var alphabet = generateAlphabet();

  var doubleLetterFound = new Boolean();
  doubleLetterFound = false;
  var result = "";

  if (input !== null) {
    var str = input;
    str = str.toLowerCase();

    for (var i = 0; i < str.length; i++) {
      //search double letters   (gh, ch, zh ....)
      if (i < str.length - 1) {
        //search double letter
        for (var j = 0; j < alphabet.length; j++) {
          if (alphabet[j].latin === str.substring(i, i + 2)) {
            //result += "found double" + str.substring(i,i+2);
            doubleLetterFound = true;
            i++;
            break;
          }
        }
      }

      if (doubleLetterFound === false) {
        //search one letter
        for (var j = 0; j < alphabet.length; j++) {
          if (alphabet[j].latin.charCodeAt(0) === str[i].charCodeAt(0)) {
            break;
          }
        }

      }
      else {
        doubleLetterFound = false;
      }
      //if the letter is found
      if (j < alphabet.length) {
        if (i === 0) {
          //if the first letter is a vowel, "emze" is added.
          if (alphabet[j].latin === 'a' || alphabet[j].latin === 'e' || alphabet[j].latin === 'o' || alphabet[j].latin === 'u'
            || alphabet[j].latin === 'i' || alphabet[j].latin === '\u00FC' || alphabet[j].latin === '\u00F6'
            || alphabet[j].latin === '\u00EB' || alphabet[j].latin === '\u00E9' || alphabet[j].latin === '\u00E8') {
            result += '\u0626';
          }
        }
        else {
          //if the first letter of the word is a vowel, "emze" is added.
          if (str[i - 1] === ' ' || str[i - 1] === '\u000A' || str[i - 1] === '\'' || str[i - 1] === '.' || str[i - 1] === ','
            || str[i - 1] === ':' || str[i - 1] === '?' || str[i - 1] === '"')
            if (alphabet[j].latin === 'a' || alphabet[j].latin === 'e' || alphabet[j].latin === 'o' || alphabet[j].latin === 'u'
              || alphabet[j].latin === 'i' || alphabet[j].latin === '\u00FC' || alphabet[j].latin === '\u00F6'
              || alphabet[j].latin === '\u00EB' || alphabet[j].latin === '\u00E9' || alphabet[j].latin === '\u00E8') {
              result += '\u0626';
            }
        }

        result += alphabet[j].uyghur;
      }
      else {
        //remove the syllable seperator '
        if (str[i] !== '\'')
          result += str[i];
      }
    }
  }
  return result;
}

export function ConvertU2L(input) {

  var lastLetterIsUyghur = false;

  var str = input;

  var result = "";
  for (var i = 0; i < str.length; i++) {

    //search one letter
    for (var j = 0; j < alphabet.length; j++) {
      if (alphabet[j].uyghur.charCodeAt(0) === str[i].charCodeAt(0)) {
        break;
      }
    }

    //if the letter is found
    if (j < alphabet.length) {
      result += alphabet[j].latin;
      lastLetterIsUyghur = true;
    }
    else {

      console.log(str[i].charCodeAt(0));
      if (str[i].charCodeAt(0) !== 1574) {
        result += str[i];
        lastLetterIsUyghur = false;
      }
      else {
        if (i > 0) {
          if (lastLetterIsUyghur === true) {
            result += '\'';
          }
        }
      }

      lastLetterIsUyghur = false;
    }
  }

  return result;
}
