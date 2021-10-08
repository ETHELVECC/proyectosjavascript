array = ['vértice', 'parábola', 'raíces', 'curva', 'cuadrática', 'resolvente', 'ordenada']

function longestWord(array) {
    let longestWord = '';
    for (var element of array) {
        if (element.length > longestWord.length) {
            longestWord = element;
        }
    }
    return longestWord;
};

console.log(array());
console.log(longestWord(array()));