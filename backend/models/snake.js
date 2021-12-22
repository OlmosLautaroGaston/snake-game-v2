const { v4: uuidv4 } = require("uuid");

class Snake {
  constructor(snakeDots,direction) {
    this.id = uuidv4();
    this.snakeDots = snakeDots;
    this.direction = '';
  }
}

module.exports = Snake;
