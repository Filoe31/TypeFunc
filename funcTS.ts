//// convertingPoundsToKg
function PoundsToKg(Pounds: number){
    let Kg = Pounds * 0.45359237;
    return Kg;
}
console.log(PoundsToKg(3))

// converting Inches to Centimeters
function InchesToCentimeters(inches: number){
    let Centimeters = inches * 2.54;
    return Centimeters;
}
console.log(InchesToCentimeters(3))

// converting fahrenheit to celsius
function FahrenheitToCelsius(Fahrenheit: number){
    let Celsius = Fahrenheit  - 32 * 5/9;
    return Celsius;
}
console.log(FahrenheitToCelsius(3))

// converting feet to meters
function FeetToMeters(feet: number){
    let Meters = feet * 0.3048;
    return Meters;
}
console.log(FeetToMeters(3));

//Even or Odd
function getNum(num: number): string{
    if (num % 2 != 0){
        return "is odd"
    }else{
        return "it is even"
    }
}
console.log(getNum(3))

// Fizz-Buzz 
function fizzBuzz(num: number): string{
    if (num % 3 == 0 && num % 5 ==0){
        return "Fizz-buzz"
    }else if (num % 3 == 0){
        return "Fizz"
    }else if (num%5==0) {
        return "Buzz"
    }
    else{
        return "The number is " + num
    }
}
console.log(fizzBuzz(4));
