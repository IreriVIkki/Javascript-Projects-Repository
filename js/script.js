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

    // Grocery List Project

    //  business logic

    // var shoppingList = ['cabbage', '  tomato', 'garlic', 'spinach', 'carrots', 'fruits']

    // console.log(groceries)

    function outputGroceries (groceries){
        var ouputArray = []
        for (var index = 0; index < groceries.length; index++) {
            var upper = groceries[index].toUpperCase().trim()
            ouputArray.push(upper)
        }
        var finalArray = ouputArray.sort()
        // console.log(finalArray)
        return finalArray
    };


    $('#Submit').click(function(event){
        console.log('asdfafd');
            $('#my-form').submit(function (event) {
                var output = $('textarea').val()
                $('#print').text(output)
            })
        event.preventDefault()
    });

//  **************************************************************

    // business logic


    //  calculator
    var inputNumber1 = 6
    var inputNumber2 = 3

    //  addition function

    function add(num1 , num2){
        var result = num1 + num2;
        return result;
    };
    // multiplication function

    function multiply(numb1 , numb2){
    var results = numb1 * numb2;
    return results;
    }
    //division function
    function divide(numbs1 , numbs2){
        var success = numbs1 / numbs2;
        return success;
    }
    //  subtraction function

    function subtract(numb1 , numb2){
        var outcome = numb1 - numb2;
        return outcome;
    }

    console.log(add(inputNumber1, inputNumber2))
    console.log(subtract(inputNumber1, inputNumber2))
    console.log(multiply(inputNumber1,inputNumber2))
    console.log(divide(inputNumber1,inputNumber2))

    //  user logic

    $('#calcForm').submit(function(event){
        event.preventDefault()

        var firstNumber = parseFloat($('#firstNumber').val())
        var secondNumber = parseFloat($('#secondNumber').val())

        $('#add').click(function(){
            $('#calcResults').text(add(firstNumber, secondNumber))
        })

        $('#subtract').click(function(){
            $('#calcResults').text(subtract(firstNumber,secondNumber))
        })

        $('#multiply').click(function(){
            $('#calcResults').text(multiply(firstNumber,secondNumber))
        })

        $('#divide').click(function(){
            $('#calcResults').text(divide(firstNumber,secondNumber))
        })

    });
});

//  ***************************************************************


    // numbers = '41'
    // rom = ""

    // console.log(+numbers)

    // var xxx = toRomanNumbers(numbers)
    // console.log(xxx)

    // outputGroceries(shoppingList);

    // user logic
