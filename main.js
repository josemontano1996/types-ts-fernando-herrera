"use strict";
(() => {
    class Mutant {
        constructor(name, realName) {
            this.name = name;
            this.realName = realName;
        }
    }
    class Xmen extends Mutant {
        saveWorld() {
            return 'World Saved';
        }
    }
    class Villian extends Mutant {
        conquerWorld() {
            return 'World Conquered';
        }
    }
    const wolverine = new Xmen('Wolverine', 'Logan');
    const magneto = new Villian('Magneto', 'Magnus');
    const printName = (character) => {
    };
    printName(wolverine);
})();
(() => {
})();
(() => {
    class Avenger {
        constructor(name, realName) {
            this.name = name;
            this.realName = realName;
        }
        getFullName() {
            return `${this.name} ${this.realName}`;
        }
    }
    class Xmen extends Avenger {
        constructor(name, realName, isMutant) {
            super(name, realName);
            this.isMutant = isMutant;
        }
        get fullName() {
            return `${this.name} - ${this.realName}`;
        }
        set fullName(name) {
            this.name = name;
        }
        getFullNameDesdeXmen() {
        }
    }
    const wolverine = new Xmen('Wolverine', 'Logan', true);
    wolverine.fullName = 'Fernando';
})();
(() => {
    class Apocalipse {
        constructor(name) {
            this.name = name;
        }
        static callApocalipse() {
            if (!Apocalipse.instance) {
                Apocalipse.instance = new Apocalipse('Soy apocalipsis');
            }
            return Apocalipse.instance;
        }
        changeName(newName) {
            this.name = newName;
        }
    }
    const apocalipsis = Apocalipse.callApocalipse();
    apocalipsis.changeName('Xavier');
    console.log(apocalipsis);
})();
//# sourceMappingURL=main.js.map