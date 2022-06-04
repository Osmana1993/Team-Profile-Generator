const Employee = require ('./Employee');

class Manager extends Employee {
    constructor (firstName, id, email, officeNumber) {
        super (firstName, id, email);
        this.officeNumber = officeNumber;
    }
    getRole() {
        return 'Manager';
    }
    getOfficeNumber() {
        return this.officeNumber;
    }
}

module.exports = Manager;