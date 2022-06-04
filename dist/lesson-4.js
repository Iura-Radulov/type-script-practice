"use strict";
const button = document.querySelector('button');
if (button) {
    button.addEventListener('click', () => {
        console.log('Click');
    });
}
;
class Key {
    constructor() {
        this.signature = Math.random();
    }
    ;
    getSignature() {
        return this.signature;
    }
}
;
class Person {
    constructor(key) {
        this.key = key;
    }
    getKey() {
        return this.key;
    }
}
class House {
    constructor(key) {
        this.key = key;
        this.door = false;
        this.tenants = [];
    }
    comeIn(person) {
        if (!this.door) {
            throw new Error('Door is close');
        }
        this.tenants.push(person);
        console.log("Person inside");
    }
}
class MyHouse extends House {
    openDoor(key) {
        if (key.getSignature() !== this.key.getSignature()) {
            throw new Error('Key to another door');
        }
        return this.door = true;
    }
}
const key = new Key();
const myHouse = new MyHouse(key);
const person1 = new Person(key);
const person2 = new Person(key);
myHouse.openDoor(person1.getKey());
myHouse.openDoor(person2.getKey());
myHouse.comeIn(person1);
myHouse.comeIn(person2);
//# sourceMappingURL=lesson-4.js.map