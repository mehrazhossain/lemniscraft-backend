/* eslint-disable no-unused-vars */

export type IUser = {
  _id: string;
  email: string;
  password: string;
  name: string;
  phone: string;
  role: string;
};

export type IUserFilters = {
  searchTerm?: string;
  name?: string;
  email?: string;
};
