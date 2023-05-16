function max(miArray){
    let maxNumber = miArray[0];
    for (let i = 0; i < miArray.length; i++) {
        if (miArray[i] > maxNumber) {
            maxNumber =miArray[i];
        }else if(miArray.length === 0){

            return undefined;
        }
    }
    return maxNumber;
}

console.log(max([1, 3, 2])) // 3
console.log(max([10, 9, 8, 7, 6, 5, 4])) // 10
console.log(max([])) // undefined