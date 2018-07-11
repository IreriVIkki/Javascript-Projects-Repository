// [a e i o u]  === ay

// consecutive consonants === end + ay

// qu move to end

//  check for beginnings with vowels
//     ad 'ay'

// check for consonants beginings.
// check first vowel in word
// split begining consonants
// move consonants to the end
// add 'ay' at the end

//  check for benining with 'qu'
//  move these to the end

// madness

$(document).ready(function () {

    // business logic
    var sentence = 'this is a quail pig year for instance'
    var vowels = ['a', 'e', 'i', 'o', 'u', 'y']
    var newWordsArray = []

    // split sentence to words and return new array
    var splitSentenceToWords = function (input) {
        var wordsArray = input.split(' ');
        return wordsArray
    }

    var wordsArray = splitSentenceToWords(sentence)
    console.log(wordsArray)

    // check if word word begins with vowel and add 'ay'
    for (var index = 0; index < wordsArray.length; index++){
        var charArray = wordsArray[index].split('');

        //  check for vowels and adding 'ay'
        if (vowels.includes(charArray[0])){
            charArray.push('ay');
            var joinVowels = charArray.join('')
            newWordsArray.push(joinVowels)


        
        }else if(charArray[0]=== 'q' && charArray[1] === 'u'){
            charArray.splice(0,2);
            charArray.push('uq')
            var qu = charArray.join('')
            newWordsArray.push(qu)


        }else{
            //  check for consonants and adding consecutive consonants at the end
            var cons = [charArray[0]]
            for(var i = 1; i < charArray.length; i++){
                if (vowels.includes(charArray[i])){
                    break
                }else{
                    cons.push(charArray[i])
                }
            }   
            //  push ay at the end of the new consonant
            cons.push('ay')
            var joinedCons = cons.join('')
            charArray.push(joinedCons)
            var joinConsonants = charArray.join('')
            newWordsArray.push(joinConsonants)
        }
    }

    console.log(newWordsArray)

});

 