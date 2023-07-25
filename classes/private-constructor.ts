(() => {
  class Apocalipse {
    static instance: Apocalipse;

    private constructor(public name: string) {}

    static callApocalipse(): Apocalipse {
      if (!Apocalipse.instance) {
        Apocalipse.instance = new Apocalipse('Soy apocalipsis');
      }

      return Apocalipse.instance;
    }

    changeName(newName: string): void {
      this.name = newName;
    }
  }
  const apocalipsis = Apocalipse.callApocalipse();
  apocalipsis.changeName('Xavier');
  console.log(apocalipsis);
})();
