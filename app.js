let age = Number(prompt("How old are you?"));
if (age < 0) {
  alert("ERROR!");
} else if (age < 18) {
  alert("Sorry, come back when you're older");
} else if (age < 21) {
  alert("You can party but you can't drink");
} else if (age === 21) {
  alert("HAPPY 21st BIRTHDAY! YOU'RE LEGAL NOW!");
} else if (age % 2 !== 0) {
  alert("Your age is odd");
} else if (Math.sqrt(age) % 1 === 0) {
  alert("Perfect square!");
} else {
  alert ("Go party you old fart");
}
