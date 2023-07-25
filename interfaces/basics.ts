(() => {
  interface Hero {
    name: string;
    age?: number;
    powers: string[];
    getName?: () => string;
  }

  let flash: Hero = {
    name: 'Barry Allen',
    age: 24,
    powers: ['Super speed', 'Time travelling'],
  };
  let superman: Hero = {
    name: 'Clark Kent',
    age: 60,
    powers: ['Super speed'],
    getName() {
      return this.name;
    },
  };
})();
