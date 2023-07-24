"use strict";
(function () {
    var fullName = function (firstName, lastName) {
        if (!firstName) {
            throw new Error('Nombre requerido');
        }
        return "".concat(firstName, " ").concat(lastName || 'no last name');
    };
    var name = fullName('Tony', 'Stark');
    console.log({ name: name });
})();
