function isPositionValid(position) {
  return position.x < 0 || position.x > 7 || position.y < 0 || position.y > 7;
}

function isDirectionValid(direction) {
  return ["UP", "DOWN", "LEFT", "RIGHT"].includes(direction);
}

function calculateNewPosition(position, direction) {
  switch (direction) {
    case "UP":
      position.y--;
      break;
    case "DOWN":
      position.y++;
      break;
    case "LEFT":
      position.x--;
      break;
    case "RIGHT":
      position.x++;
      break;
    default:
      throw new Error("INVALID DIRECTION");
  }
  return position;
}

function checkMovement(board, position, direction) {
  direction = direction.toUpperCase();
  if (!isDirectionValid(direction)) {
    throw new Error("INVALID MOVEMENT");
  }
  position = calculateNewPosition(position, direction);
  if (isPositionValid(position)) {
    throw new Error("INVALID MOVEMENT");
  }
  return board[position.y][position.x] === 0;
}

module.exports = { checkMovement };
