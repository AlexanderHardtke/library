let numbers = [0, 5, 9, 4, 3, 1, 7, 15];
let sortedNumbers = [];

while (numbers.length > 0) {
    // Finde das kleinste Element im Array
    let minIndex = 0;
    for (let i = 1; i < numbers.length; i++) {
        if (numbers[i] < numbers[minIndex]) {
            minIndex = i;
        }
    }
    // Entferne das kleinste Element aus `numbers` und füge es in `sortedNumbers` ein
    sortedNumbers.push(numbers[minIndex]);
    numbers.splice(minIndex, 1); // Entferne das Element aus `numbers`
}

console.log(sortedNumbers); // Ausgabe: [0, 1, 3, 4, 5, 7, 9, 15]


function findFirstDoubleLetter(string) {
    for (let i = 0; i < string.length - 1; i++) {
        if (string[i] === string[i + 1]) {
            return { position: i, letter: string[i] };
        }
    }
    return { position: null, letter: null }; // Falls kein Doppel gefunden wird
}

// Beispiel
const string = "lksanlienasioowlknewen";
const result = findFirstDoubleLetter(string);

if (result.position !== null) {
    console.log(`Der erste doppelte Buchstabe ist '${result.letter}' an Position ${result.position}.`);
} else {
    console.log("Es gibt keine doppelten Buchstaben.");
}