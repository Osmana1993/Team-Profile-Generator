class Employee {
    constructor(firstName, id, email) {
        this.firstName = firstName;
        this.id = id;
        this.email = email;
    }

    getName() {
        const firstName = this.firstName;
        return firstName;
    }
    getId() {
        const id = this.id;
        return id;
    }
    getEmail() {
        const email = this.email;
        return email;
    }
    getRole() {
        const role = 'Employee';
        return role;
    }
}

module.exports = Employee;