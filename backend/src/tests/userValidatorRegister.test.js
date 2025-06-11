import { UserValidator } from '../validators/userValidator';

describe('UserValidator - validateRegister', () => {
    let validPayload;

    beforeEach(() => {
        validPayload = {
            name: 'João Silva',
            email: 'usuario@dac.unicamp.br',
            password: 'senhaSegura123'
        };
    });

    describe('Valid cases', () => {
        it('should accept valid register payload', () => {
            expect(() => UserValidator.validateRegister(validPayload)).not.toThrow();
        });

        it('should accept name with exactly 2 characters (lower limit)', () => {
            validPayload.name = 'Jo';
            expect(() => UserValidator.validateRegister(validPayload)).not.toThrow();
        });

        it('should accept name with 100 characters (upper limit)', () => {
            validPayload.name = 'A'.repeat(100);
            expect(() => UserValidator.validateRegister(validPayload)).not.toThrow();
        });
    });

    describe('Invalid cases - Name', () => {
        it('should reject when name is missing', () => {
            const { name, ...payloadWithoutName } = validPayload;
            expect(() => UserValidator.validateRegister(payloadWithoutName)).toThrow('The name field is required');
        });

        it('should reject when name is empty', () => {
            validPayload.name = '';
            expect(() => UserValidator.validateRegister(validPayload)).toThrow('The name field cannot be empty');
        });

        it('should reject name with less than 2 characters', () => {
            validPayload.name = 'A';
            expect(() => UserValidator.validateRegister(validPayload)).toThrow('The name must be at least 2 characters long');
        });

        it('should reject name with more than 100 characters', () => {
            validPayload.name = 'B'.repeat(101);
            expect(() => UserValidator.validateRegister(validPayload)).toThrow('The name must be at most 100 characters long');
        });
    });

    describe('Invalid cases - Email', () => {
        it('should reject when email is missing', () => {
            const { email, ...payloadWithoutEmail } = validPayload;
            expect(() => UserValidator.validateRegister(payloadWithoutEmail)).toThrow('The email field is required');
        });

        it('should reject when email is empty', () => {
            validPayload.email = '';
            expect(() => UserValidator.validateRegister(validPayload)).toThrow('The email field cannot be empty');
        });

        it('should reject invalid email (missing @)', () => {
            validPayload.email = 'invalidemail';
            expect(() => UserValidator.validateRegister(validPayload)).toThrow('The email must be a valid address');
        });

        it('should reject email with not allowed domain', () => {
            validPayload.email = 'usuario@exemplo.br';
            expect(() => UserValidator.validateRegister(validPayload)).toThrow('The email must belong to the @dac.unicamp.br domain');
        });
    });

    describe('Invalid cases - Password', () => {
        it('should reject when password is missing', () => {
            const { password, ...payloadWithoutPassword } = validPayload;
            expect(() => UserValidator.validateRegister(payloadWithoutPassword)).toThrow('The password field is required');
        });

        it('should reject when password is empty', () => {
            validPayload.password = '';
            expect(() => UserValidator.validateRegister(validPayload)).toThrow('The password field cannot be empty');
        });

        it('should reject password with less than 6 characters', () => {
            validPayload.password = '12345';
            expect(() => UserValidator.validateRegister(validPayload)).toThrow('The password must be at least 6 characters long');
        });
    });
});
