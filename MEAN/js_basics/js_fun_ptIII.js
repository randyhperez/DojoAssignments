function personConstructor(name) {
  const person = {
    name: name,
    distance_traveled: 0,
    say_name: function (){
      console.log(this.name);
    },
    say_something: function (str) {
      console.log(`${this.name} says ${str}`);
    },
    walk: function () {
      console.log(`${this.name} is walking!`);
      this.distance_traveled += 3;
      return this;
    },
    run: function () {
      console.log(this.name + ' is running!');
      this.distance_traveled += 10;
      return this;
    },
    crawl: function () {
      console.log(this.name + " is crawling!");
      this.distance_traveled += 1;
      return this;
    }
  }
  return person;
}

function ninjaConstructor(name, cohort) {
  const ninja = {
    name: name,
    cohort: cohort,
    belt: 'yellow',
    levelup: function () {
      if (this.belt == 'yellow') {
        this.belt = 'red';
      }
      else if (this.belt == 'red') {
        this.belt = 'black';
      }
      return this;
    }
  }
  return ninja;
}
