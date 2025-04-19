export interface User {
  firstName: string;
  lastName: string;
  email: string;
  password?: string;
  id?: string;
}

export interface registerUser extends User {
  loader?: boolean;
  error?: string | null;
}
