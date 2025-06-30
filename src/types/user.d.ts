export interface IToken {
  IdToken: string;
  AccessToken: string;
  RefreshToken: string;
}

export interface IUser {
  _id: string;
  username: string;
  email: string;
  name: string;
  dateCreated: string;
}

export interface ILoginResponse {
  token: IToken;
  user: IUser;
}
