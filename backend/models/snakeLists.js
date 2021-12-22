const Snake = require("./snake");

class SnakeLists {
  constructor() {
    this.snakes = [
      new Snake([
        [0, 0],
        [2, 0],
      ],'RIGHT'),
      new Snake([
        [0, 30],
        [2, 30],
      ],'RIGHT'),
    ];
  }
  getSnakes() {
    return this.snakes;
  }
  setDirection(id, newDirection) {
    this.snakes = this.snakes.map((snakes) => {
      if (snakes.id === id) {
        snakes.direction = newDirection;
      }
      return snakes;
    });
  }
}

module.exports = SnakeLists;
