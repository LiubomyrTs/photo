import { of } from 'rxjs';

export class AuthServiceMock {
  registerUser() {
    return of({});
  }
}