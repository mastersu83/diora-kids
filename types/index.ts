export interface IImage {
  _id: string;
  type: number;
  typeOfClothing: string;
  imageUrl: string;
  createdAt: string;
  updatedAt: string;
  __v: number;
}

export interface IUser {
  avatarUrl: string;
  createdAt: string;
  email: string;
  fullName: string;
  updatedAt: string;
  __v: number;
  _id: string;
}

export interface IResponse {
  user: IUser;
  token: string;
}

export interface ISession {
  avatarUrl: string;
  createdAt: string;
  email: string;
  fullName: string;
  id: string;
  token: string;
  updatedAt: string;
  __v: number;
}
