const Employee = require('./Employee');

class Engineer extends Employee {
    constructor (firstName, id, email, github) {
        super(firstName, id, email);
        this.github = github;
    }
    getRole() {
        const role = 'Engineer';
        return role;
    }
    getGithub() {
        const github = this.github;
        return github;
    }
}

module.exports = Engineer;