/*
 * This program will ask the user what calculation they would like to perform
 * they can choose to calculate Celsius, Fahrenheit and Kelvin and it can
 * convert each one to the other
 */

// Ask the user what metric is the temperature they are converting
let metric1 = String(prompt("Enter the metric are you using for this temperature: \n" + "C - Cleslius \n" + "F - Fahrenheit \n" + "K - Kelvin"));

// Ask the user to input the temperature they would like to convert
let temp = Number(prompt("Enter the temperature you would like to covert: "));

// Ask the user what mertic they would like to convert to
let metric2 = String(prompt("Enter the metric you would like to convert to: "));

// Change celsius to fahrenheit
if (metric1 == "C" && metric2 == "F") {
    let fahrenheit = (temp * (9 / 5) + 32);
    console.log(temp + "C is " + fahrenheit + "F");
}

// Change celsius to kelvin
else if (metric1 == "C" && metric2 == "K") {
    let kelvin = (temp + 273);
    console.log(temp + "C is " + kelvin + "K");
}

// Chnage fahrenheit to celsius
else if (metric1 == "F" && metric2 == "C") {
    let celsius = ((temp - 32) * (5 / 9));
    console.log(temp + "F is " + celsius + "C");
}

// Chnage fahrenheit to kelvin
else if (metric1 == "F" && metric2 == "K") {
    let kelvin = ((temp + 459.67) * (5 / 9));
    console.log(temp + "F is " + kelvin + "K");
}

// Change kelvin to celsius
else if (metric1 == "K" && metric2 == "C") {
    let celsius = (temp - 273);
    console.log(temp + "K is " + celsius + "C");
}

// Change kelvin to fahrenheit
else if (metric1 == "K" && metric2 == "F") {
    let fahrenheit = (temp * (9 / 5));
    console.log(temp + "K is " + fahrenheit + "F");
}