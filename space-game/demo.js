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

const hero1 = createHero();
hero1.moveTo(5, 5);

const tree = createStatic(0, 0, "Tree");

// Pub/Sub pattern or Event Emitter design pattern

class EventEmitter {
  constructor() {
    this.listeners = {};
  }

  on(message, listener) {
    if (!this.listeners[message]) {
      this.listeners[message] = [];
    }

    this.listeners[message].push(listener);
  }

  emit(message, payload = null) {
    if (this.listeners[message]) {
      this.listeners[message].forEach((listener) => listener(message, payload));
    }
  }
}

const Messages = {
  HERO_MOVE_LEFT: "HERO_MOVE_LEFT",
};

const eventEmitNo1 = new EventEmitter();

console.log(eventEmitNo1);

const hero = new createHero(0, 0);

eventEmitNo1.on(Messages.HERO_MOVE_LEFT, () => hero.moveTo(5, 0));

document.addEventListener("keyup", (evt) => {
  if (evt.key === "ArrowLeft") {
    eventEmitNo1.emit(Messages.HERO_MOVE_LEFT);
  }
  console.log(evt);
});

// another example :

const listener = (evt, payload) => {
  switch (evt) {
    case "login":
      console.log(`User ${payload.username} has logged in`);
      break;
    case "logout":
      console.log(`User ${payload.username} has logged out`);
      break;
    default:
      break;
  }
};

const logEvent = new EventEmitter();

logEvent.on("login", listener);
logEvent.on("logout", listener);

logEvent.emit("login", { username: "rashad" });
logEvent.emit("logout", { username: "mohamed" });
