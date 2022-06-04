const Engineer = require('../lib/Engineer');


        test('Creates an Engineer object when called with the "new" keyword', () => {
            const engineer = new Engineer('Dan', '001', 'test@gmail.com', 'dan1234');

            expect(typeof (engineer)).toEqual('object');
        });

        test('Creates "github" property', () => {
            const engineer = new Engineer('Alec', '2', 'alec@fakemail.com', 'ibealec');

            expect(engineer.github).toEqual('ibealec');
        });

      
            test('should return a "getGithub" property that has an updated value', () => {
                const engineer = new Engineer('Alec', '2', 'alec@fakemail.com', 'ibealec');

                expect(engineer.getGithub()).toEqual('ibealec');
            });
    

  
            test('should return "Engineer" value', () => {
                const engineer = new Engineer('Alec', '2', 'alec@fakemail.com', 'ibealec');
                const role = 'Engineer';

                expect(engineer.getRole()).toEqual(role);
            });
        