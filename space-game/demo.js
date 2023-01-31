"use strict";

class GameObject {
  constructor(x, y, type) {
    this.x = x;
    this.y = y;
    this.type = type;
  }
}

const plane = new GameObject(5, 10, "Airbus");
console.log(plane);

const car = { x: 25, y: 30, type: "BMW" };
console.log(car);
