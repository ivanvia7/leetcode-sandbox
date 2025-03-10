let n = 3;
let n2 = 2;
let commands = ["DOWN", "RIGHT", "UP"];
let commands2 = ["RIGHT", "DOWN"];

function finalPositionOfSnake(n, commands) {
  let output = 0;

  for (let command of commands) {
    if (command === "LEFT") {
      output -= 1;
    } else if (command === "RIGHT") {
      output += 1;
    } else if (command === "UP") {
      output -= n;
    } else if (command === "DOWN") {
      output += n;
    }
  }

  return output;
}

console.log(finalPositionOfSnake(n2, commands2));
