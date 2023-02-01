"use strict";

// Inheritance using ES6 Class

/*
class GameObject {
  constructor(x, y, type) {
    this.x = x;
    this.y = y;
    this.type = type;
  }
}

class Movable extends GameObject {
  constructor(x, y, type) {
    super(x, y, type);
  }

  moveTo(x, y) {
    this.x = x;
    this.y = y;
  }
}

class Hero extends Movable {
  constructor(x, y) {
    super(x, y, "Hero");
  }
}

class Tree extends GameObject {
  constructor(x, y) {
    super(x, y, "Tree");
  }
}

const hero = new Hero();
hero.moveTo(5, 5);
console.log(hero);

const tree = new Tree();
console.log(tree);
*/

// Inheritance using Composition

const gameObject = {
  x: 0,
  y: 0,
  type: "",
};

const movable = {
  moveTo(x, y) {
    this.x = x;
    this.y = y;
  },
};

const movableObject = {
  ...gameObject,
  ...movable,
};

const createHero = function (x, y) {
  return {
    ...movableObject,
    x,
    y,
    type: "Hero",
  };
};

const createStatic = function (x, y, type) {
  return {
    ...gameObject,
    x,
    y,
    type,
  };
};

const hero = createHero();
hero.moveTo(5, 5);

const tree = createStatic(0, 0, "Tree");
console.log(hero, tree);
