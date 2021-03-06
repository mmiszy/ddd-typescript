import { UserEmail, userEmailToString } from '@modules/users/1-domain-and-entities/userEmail';

export class EmailAlreadyExistsError extends Error {
  constructor(userEmail: UserEmail) {
    super(`User with email ${userEmailToString(userEmail)} already exists!`);
    this.name = 'EmailAlreadyExistsError';
  }
}
