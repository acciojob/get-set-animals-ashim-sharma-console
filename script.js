class Animal {
  constructor(species) {
    this._species = species;
  }

  get species() {
    return this._species;
  }

  makeSound() {
    log(`The ${this.species} makes a sound`);
  }
}

class Dog extends Animal {
  bark() {
    log("woof");
  }
}

class Cat extends Animal {
  purr() {
    log("purr");
  }
}

function log(message) {
  document.getElementById("output").textContent += message + "\n";
}

document.getElementById("testCatBtn").addEventListener("click", () => {
  const cat = new Cat("Siamese");
  cat.makeSound();
  cat.purr();
});

document.getElementById("testDogBtn").addEventListener("click", () => {
  const dog = new Dog("Golden Retriever");
  dog.makeSound();
  dog.bark();
});

// For Cypress testing
window.Animal = Animal;
window.Cat = Cat;
window.Dog = Dog;
