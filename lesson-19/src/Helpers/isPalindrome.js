function ispalindrome(inputWord) {

    // this verion does not take 'alus ari ira sula' as a palindrome

    // let wordClean = inputWord.toLowerCase().replace(/ /g, '')

    // let wordReverse = wordClean.split('').reverse().join('')

    // return inputWord === wordReverse

    inputWord = inputWord.toUpperCase().replace(/ /g, '')

    return inputWord === inputWord.split('').reverse().join('')
}

export default ispalindrome;