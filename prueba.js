let numbers = [];
alert("Bienvenido, vamos a recolectar unos números");

let trys = 3;
let i = 0;

//To add numbers at Arraylist
function AddNumbers() {

    while (i < trys) {

        let number = Number(prompt("Ingresa un numero"));
        //console.log(number);
        numbers.push(number);
        i++;
    }
}

//To order the array, minor to major
function orderToMinor() {
    numbers.sort((a, b) => b - a);
    console.log(numbers);
}

//To order the array, major to minor
function orderToMajor() {
    numbers.reverse();
    console.log(numbers);
}

//Verify if the numbers is similar
function areSimilar() {
    if (numbers[0] === numbers[1] && numbers[1] === numbers[2]) {

        console.log("Los numeros son iguales");
    }
} 

AddNumbers();
orderToMinor();
orderToMajor();
areSimilar();


//Indentify the smallest, the middle and the longest number
let smallestNumber = numbers[0];
console.log(`El numero menor es: ${smallestNumber}`);
let longestNumber = numbers[numbers.length - 1];
console.log(`El numero mayor es: ${longestNumber}`);
let middleNumber = numbers[1];
console.log(`El numero del medio es: ${middleNumber}`);




