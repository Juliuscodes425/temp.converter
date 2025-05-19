function ConvertToCelsius(fahrenheit) {
  return ((fahrenheit - 32) * 5) / 9;
}
function describeTemperature(fahrenheit) {
  const celsius = ConvertToCelsius(fahrenheit);
  let description;
  if (celsius < 0) {
    description = "very cold";
  } else if (celsius < 20) {
    description = "cold";
  } else if (celsius < 30) {
    description = "warm";
  } else if (celsius < 40) {
    description = "hot";
  } else {
    description = "it's very hot";
  }
  return `${fahrenheit} in celsius is ${celsius} which means that it is ${description}`;
}
const fahrenheit = prompt("What is the temperature in fahrenheit?");
const description = describeTemperature(fahrenheit);
alert(description);
