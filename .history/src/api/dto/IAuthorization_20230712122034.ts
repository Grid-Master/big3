export interface ISignIn {
  login: string;
  password: string;
}

export interface IUser {
  name: string | null;
  token: string | null;
  avatarUrl: string | null;
}
