import { USER_ROLES } from 'src/app/auth/user-roles.enum';

export interface User {
  name: string;
  username: string;
  _id: string;
  email: string;
  role: USER_ROLES;
}