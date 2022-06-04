const Intern = require('../lib/Intern');


        test('Creates an Intern object when called with the "new" keyword', () => {
            const intern = new Intern('Dan', '001', 'test@gmail.com', 'CU Boulder');

            expect(typeof (intern)).toEqual('object');
        });

        test('Creates "school" property', () => {
            const intern = new Intern('Dan', '001', 'test@gmail.com', 'CU Boulder');

            expect(intern.school).toEqual('CU Boulder');
        });

        
            test('should return a "getSchool" property that has an updated value', () => {
                const intern = new Intern('Dan', '001', 'test@gmail.com', 'CU Boulder');

                expect(intern.getSchool()).toEqual('CU Boulder');
            });
        

        
            test('should return "Intern" value', () => {
                const intern = new Intern('Dan', '001', 'test@gmail.com', 'CU Boulder');
                const role = 'Intern';

                expect(intern.getRole()).toEqual(role);
            });
        

    
