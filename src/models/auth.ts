export interface User {
  id: string;
  name: string;
  email: string;
  createAt: Date;
}

export interface RegisterData {
    name:string;
    email:string;
    pass:string;
}

export interface Credentials {
    email:string;
    pass:string;
}

