import { Model, Types } from 'mongoose';
import { IUser } from '../user/user.interface';
import { IService } from '../service/service.interface';

export type IReview = {
  service: Types.ObjectId | IService; // reference _id
  reviewBy: Types.ObjectId | IUser; // reference _id
  reviewText: string;
  rating: number;
};

export type ReviewModel = Model<IReview, Record<string, unknown>>;
