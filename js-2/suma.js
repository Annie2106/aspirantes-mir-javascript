function suma(array){
    let sum = 0;
    for (let i = 0; i < array.length; i++) {
        sum += array[i];
        
    }

    return sum;
}


console.log(suma([1, 2, 3])) // 6
console.log(suma([10, 8, 12, 5])) // 35
console.log(suma([])) // 0