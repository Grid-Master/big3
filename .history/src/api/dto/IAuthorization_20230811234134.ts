export interface ISignUp {
  userName: string;
  login: string;
  password: string;
}

export interface ISignIn {
  login: string;
  password: string;
}

export interface IChange {
  userName: string;
  avatarUrl: string | null;
}

export interface IUser {
  name: string | null;
  token: string | null;
  avatarUrl: string | null;
}

export interface IIntitalState extends IUser {
  isLoading: boolean;
  error: number | null;
}
