"use strict";
(function () {
    var flash = {
        name: 'Barry Allen',
        age: 24,
        powers: ['Super speed', 'Time travelling'],
    };
    flash = {
        name: 'Clark Kent',
        /*   age: 60, */
        powers: ['Super strength'],
        getName: function () {
            return this.name;
        },
    };
    console.log(flash);
})();
