(() => {
  class Avenger {
    constructor(public name: string, public realName: string) {
      /*  console.log('Avenger llamado'); */
    }
    protected getFullName() {
      return `${this.name} ${this.realName}`;
    }
  }

  class Xmen extends Avenger {
    constructor(name: string, realName: string, public isMutant: boolean) {
      super(name, realName);
      /*  console.log('Constructor xmen llamado'); */
    }

    get fullName() {
      return `${this.name} - ${this.realName}`;
    }

    set fullName(name: string) {
      this.name = name;
    }

    getFullNameDesdeXmen() {
      /*  console.log(super.getFullName()); */
    }
  }

  const wolverine = new Xmen('Wolverine', 'Logan', true);
  /*  console.log(wolverine.fullName); */
  wolverine.fullName = 'Fernando';
  /* console.log(wolverine.fullName); */
})();
