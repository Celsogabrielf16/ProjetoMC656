import { UserValidator } from '../validators/userValidator';

describe('UserValidator - validateLogin', () => {
    let validPayload;

    beforeEach(() => {
        validPayload = {
            email: 'usuario@dac.unicamp.br',
            password: 'senhaSegura123'
        };
    });

    describe('Valid cases', () => {
        it('should accept valid payload', () => {
            expect(() => UserValidator.validateLogin(validPayload)).not.toThrow();
        });

        it('should accept password with exactly 6 characters', () => {
            validPayload.password = '123456';
            expect(() => UserValidator.validateLogin(validPayload)).not.toThrow();
        });

        it('should accept emails with allowed domains', () => {
            const domains = ['dac.unicamp.br'];
            domains.forEach(domain => {
                validPayload.email = `usuario@${domain}`;
                expect(() => UserValidator.validateLogin(validPayload)).not.toThrow();
            });
        });
    });

    describe('Invalid cases - Email', () => {
        it('should reject when email is missing', () => {
            const { email, ...payloadWithoutEmail } = validPayload;
            expect(() => UserValidator.validateLogin(payloadWithoutEmail)).toThrow('The email field is required');
        });

        it('should reject when email is empty', () => {
            validPayload.email = '';
            expect(() => UserValidator.validateLogin(validPayload)).toThrow('The email field cannot be empty');
        });

        it('should reject invalid email (missing @)', () => {
            validPayload.email = 'invalidemail';
            expect(() => UserValidator.validateLogin(validPayload)).toThrow('The email must be a valid address');
        });

        it('should reject email with not allowed domain', () => {
            validPayload.email = 'usuario@exemplo.org';
            expect(() => UserValidator.validateLogin(validPayload)).toThrow('The email must be a valid address');
        });
    });

    describe('Invalid cases - Password', () => {
        it('should reject when password is missing', () => {
            const { password, ...payloadWithoutPassword } = validPayload;
            expect(() => UserValidator.validateLogin(payloadWithoutPassword)).toThrow('The password field is required');
        });

        it('should reject when password is empty', () => {
            validPayload.password = '';
            expect(() => UserValidator.validateLogin(validPayload)).toThrow('The password field cannot be empty');
        });

        it('should reject password with less than 6 characters', () => {
            validPayload.password = '12345';
            expect(() => UserValidator.validateLogin(validPayload)).toThrow('The password must be at least 6 characters long');
        });
    });
});