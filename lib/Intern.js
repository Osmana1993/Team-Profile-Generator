const Employee = require('./Employee');

class Intern extends Employee {
    constructor (firstName, id, email, school) {
        super (firstName, id, email);
        this.school = school;
    }
    getRole() {
        return 'Intern';
    }
    getSchool() {
        return this.school;
    }
}

module.exports = Intern;