const Manager = require('../lib/Manager');


        test('Creates an Manager object when called with the "new" keyword', () => {
            const manager = new Manager('jared', '1', 'jared@fakemail.com', '1');

            expect(typeof (manager)).toEqual('object');
        });

        test('Creates "officeNumber" property', () => {
            const manager = new Manager('jared', '1', 'jared@fakemail.com', '1');
            expect(manager.officeNumber).toEqual('1');
        });

       
            test('should return a "getOfficeNumber" property that has an updated value', () => {
                const manager = new Manager('jared', '1', 'jared@fakemail.com', '1');
                expect(manager.getOfficeNumber()).toEqual('1');
            });
        

      
            test('should return "Manager" value', () => {
                const manager = new Manager('jared', '1', 'jared@fakemail.com', '1');
                const role = 'Manager';

                expect(manager.getRole()).toEqual(role);
            });
        

    