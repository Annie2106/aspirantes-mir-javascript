function joinFunction(myArray){
    let stringArray = ' ';
    for (let i = 0; i < myArray.length; i++) {
        stringArray += myArray[i] + ' ';
    }
    return stringArray;
}

console.log(joinFunction([1, 2, 3, 4, 5]));// 1 2 3 4 5
console.log(joinFunction(['Hola,', 'git', 'no', 'me', 'gusta']));  // Hola, git no me gusta   




