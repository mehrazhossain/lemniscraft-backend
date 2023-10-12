import { Model, Types } from 'mongoose';
import { IUser } from '../user/user.interface';

export type IService = {
  title: string;
  category:
    | 'Digital Marketing'
    | 'Web Development and Design'
    | 'Creative Services'
    | 'Analytics and Reporting'
    | 'Cybersecurity and Support';
  desc: string;
  price: number;
  location: 'Bangladesh' | 'Worldwide';
  addedBy: Types.ObjectId | IUser; // reference _id
  serviceImage?: string;
};

export type ServiceModel = Model<IService, Record<string, unknown>>;

export type IServiceFilters = {
  searchTerm?: string;
  title?: string;
  category?: string;
  location?: string;
};
