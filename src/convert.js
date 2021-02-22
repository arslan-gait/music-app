const alphabet = [
  {
    latin: "a",
    uyghur: '\u0627'
  },
  {
    latin: "b",
    uyghur: '\u0628'
  },
  {
    latin: "s",
    uyghur: '\u0633' //s
  },
  {
    latin: "d",
    uyghur: '\u062F',
  },
  {
    latin: "f",
    uyghur: '\u0641'    //f
  },
  {
    latin: "g",
    uyghur: '\u06AF'   //g
  },
  {
    latin: "i",
    uyghur: '\u0649' //i
  },
  {
    latin: "j",
    uyghur: '\u062C' //j
  },
  {
    latin: "k",
    uyghur: '\u0643' //k
  },
  {
    latin: "l",
    uyghur: '\u0644' //l
  },
  {
    latin: "m",
    uyghur: '\u0645' //m
  },
  {
    latin: "n",
    uyghur: '\u0646' //n
  },
  {
    latin: "o",
    uyghur: '\u0648' //o
  },
  {
    latin: "\u00F6",
    uyghur: '\u06C6' //o
  },
  {
    latin: "p",
    uyghur: '\u067E' //p
  },
  {
    latin: "ng",
    uyghur: '\u06AD' //ng
  },
  {
    latin: "c",
    uyghur: '\u0686' //q
  },
  {
    latin: "r",
    uyghur: '\u0631' //r
  },
  {
    latin: "s",
    uyghur: '\u0633' //s
  },
  {
    latin: "t",
    uyghur: '\u062A' //t
  },
  {
    latin: "u",
    uyghur: '\u06C7' //u
  },
  {
    latin: "\u00FC",
    uyghur: '\u06C8' //v
  },
  {
    latin: "w",
    uyghur: '\u06CB' //w
  },
  {
    latin: "y",
    uyghur: '\u064A' //y
  },
  {
    latin: "z",
    uyghur: '\u0632' //z
  },
  {
    latin: "zh",
    uyghur: '\u0698'   //zh
  },
  {
    latin: "gh",
    uyghur: '\u063A' //gh
  },
  {
    latin: " ",
    uyghur: ' ' //space
  },
  {
    latin: "?",
    uyghur: '\u061F'   //?
  },
  {
    latin: ".",
    uyghur: '\u065C'        //.
  },
  {
    latin: ",",
    uyghur: '\u060C'        //,
  },
  {
    latin: "h",
    uyghur: '\u06BE' //h
  },
  {
    latin: "x",
    uyghur: '\u062E'   //x is h in uyghur
  },
  {
    latin: "ch",
    uyghur: '\u0686' //q
  },
  {
    latin: "q",
    uyghur: '\u0642'    // kh in hasim 
  },
  {
    latin: "sh",
    uyghur: '\u0634' //sh as xam
  },
  {
    latin: "e",
    uyghur: '\u06D5' //ë
  },
  {
    latin: "\u00EB",
    uyghur: '\u06D0' //ë
  },
  {
    latin: "\u00E9",
    uyghur: '\u06D0' //ë
  },
  {
    latin: "\u00E8",
    uyghur: '\u06D0' //ë
  }
];


export default function ConvertL2U(input) {

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
