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

    // Attach to window (as required)
    window.Animal = Animal;
    window.Dog = Dog;
    window.Cat = Cat;

    // Logging helper
    function log(message) {
      const output = document.getElementById('logOutput');
      output.textContent += message + '\n';
    }

    // Test functions
    function testCat() {
      const myCat = new Cat("Siamese");
      myCat.makeSound();  // The Siamese makes a sound
      myCat.purr();       // purr
    }

    function testDog() {
      const myDog = new Dog("Golden Retriever");
      myDog.makeSound();  // The Golden Retriever makes a sound
      myDog.bark();       // woof
    }