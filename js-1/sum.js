function suma(x){

    var suma = 0
    for (var i=1; i<=x; i++){
        suma += i
    }
    return suma
  }
  
console.log(suma(4));//4+3+2+1=10
console.log(suma(10)); // 10+9+8+7+6+5+4+3+2+1=55
console.log(suma(15)); // 15+14+13+12+11+10+9+8+7+6+5+4+3+2+1=120



function sumaInversa(x){

    var suma = 0
    for (var i=x; i<=1; i--){
        suma += i
    }
    return suma
  }
  
console.log(sumaInversa(4));//4+3+2+1=10
console.log(sumaInversa(10)); // 10+9+8+7+6+5+4+3+2+1=55
console.log(sumaInversa(15)); // 15+14+13+12+11+10+9+8+7+6+5+4+3+2+1=120
console.log(sumaInversa(2)); //2+1=3    
