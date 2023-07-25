"use strict";
(() => {
    let flash = {
        name: 'Barry Allen',
        age: 24,
        powers: ['Super speed', 'Time travelling'],
    };
    let superman = {
        name: 'Clark Kent',
        age: 60,
        powers: ['Super speed'],
        getName() {
            return this.name;
        },
    };
})();
(() => {
    class Mutant {
        mutantPower(id) {
            return this.name + ' ' + this.realName;
        }
    }
})();
(() => {
    const client = {
        name: 'Josema',
        age: 27,
        address: {
            id: 12345,
            zip: 23456,
            city: 'Beckingen',
        },
        getFullAddress(id) {
            return this.address.zip;
        },
    };
    const client2 = {
        name: 'Melisa',
        age: 30,
        address: {
            id: 1234,
            zip: 1234351,
            city: 'Beckingen',
        },
        getFullAddress(id) {
            return this.address.zip;
        },
    };
})();
(() => {
    let addNumbersFunction;
    addNumbersFunction = (a, b) => {
        return 10;
    };
})();
const conducirBatimovil = (auto) => {
    auto.encender = true;
    auto.velocidadMaxima = 100;
    auto.acelerar();
};
const batimovil = {
    encender: false,
    velocidadMaxima: 0,
    acelerar() {
        console.log('...... gogogo!!!');
    },
};
const guason = {
    reir: true,
    comer: true,
    llorar: false,
};
const reir = (guason) => {
    if (guason.reir) {
        console.log('JAJAJAJA');
    }
};
const ciudadGotica = (ciudadanos) => {
    return ciudadanos.length;
};
class Persona {
    imprimirBio() { }
}
//# sourceMappingURL=main.js.map