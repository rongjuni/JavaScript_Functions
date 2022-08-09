console.log("Hello World!\n==========\n");

// Exercise 1 Section
console.log("EXERCISE 1:\n==========\n");

function printOdds(count) {
  for (let i = 0; i < count.length; i++) {
    if (count[i] % 2 == 1) {
      console.log(count[i]);
    }
  }
}

printOdds([1, 2, 3, 4, 5]);

// Exercise 2 Section
console.log("EXERCISE 2:\n==========\n");

function checkAge(userName, age) {
  let aboveSixteen = `Contrats ${userName}, you can drive!`;
  let belowSixteen = `Sorry ${userName}, but you need to wait until you're 16.`;

  if (age > 16) {
    console.log(aboveSixteen);
  } else {
    console.log(belowSixteen);
  }
}

checkAge("matthew", 17);

function quantum(x, y) {
  if (x > 0 && y > 0) {
    console.log(`${x} and ${y} is on Quadrant 1`);
  } else if (x > 0 && y < 0) {
    console.log(`${x} and ${y} is on Quadrant 2`);
  } else if (x < 0 && y < 0) {
    console.log(`${x} and ${y} is on Quadrant 3`);
  } else if (x < 0 && y > 0) {
    console.log(`${x} and ${y} is on Quadrant 4`);
  } else if (x == 0) {
    console.log(`${x} and ${y} is on the x axis`);
  } else if (y == 0) {
    console.log(`${x} and ${y} is on the y axis`);
  }
}

quantum(1, 7);
quantum(1, -7);
quantum(-1, 7);
quantum(-1, -7);
quantum(0, 7);
quantum(1, 0);
