const Employee = require('../lib/Employee');


    test('Creates an Employee object when called with the "new" keyword', () => {
      const employee = new Employee('Dan', '001', 'test@gmail.com');

      expect(typeof (employee)).toEqual('object');
    });

    test('Creates "firstName" property', () => {
      const employee = new Employee('Dan', '001', 'test@gmail.com');

      expect(employee.firstName).toEqual('Dan');
    });

    test('Creates "id" property', () => {
      const employee = new Employee('Dan', '001', 'test@gmail.com');

      expect(employee.id).toEqual('001');
    });

    test('Creates "email" property', () => {
      const employee = new Employee('Dan', '001', 'test@gmail.com');

      expect(employee.email).toEqual('test@gmail.com');
    });

   
      test('should return a "firstName" property that has an updated value', () => {
        const employee = new Employee('Dan', '001', 'test@gmail.com');

        expect(employee.getName()).toEqual('Dan');
      });
    

    
      test('should return a "id" property that has an updated value', () => {
        const employee = new Employee('Dan', '001', 'test@gmail.com');

        expect(employee.getId()).toEqual('001');
      });
    

   
      test('should return a "email" property that has an updated value', () => {
        const employee = new Employee('Dan', '001', 'test@gmail.com');

        expect(employee.getEmail()).toEqual('test@gmail.com');
      });
    

  
      test('should return "Employee" value', () => {
        const employee = new Employee('Dan', '001', 'test@gmail.com');
        const role = 'Employee';

        expect(employee.getRole()).toEqual(role);
      });
    

  
