export interface loginInput {
  email: string;
  password: string;
}

export interface registerInput {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
}

export interface editTableInput { 
    originalLink: string;
    status: string;
}