// set correct age
const birthday = new Date("2004-03-16");
const timeSinceBrith = Date.now() - birthday.getTime(); // in milliseconds

const ageItem = document.getElementById('age');
ageItem.textContent = Math.floor(timeSinceBrith / (1000 * 60 * 60 * 24 * 365)); // formatted to amount of years