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