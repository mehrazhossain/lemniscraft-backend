import { Schema, model } from 'mongoose';
import { IService, ServiceModel } from './service.interface';
import { category, location } from './service.constant';

export const ServiceSchema = new Schema<IService, ServiceModel>(
  {
    title: {
      type: String,
      required: true,
    },
    price: {
      type: Number,
      required: true,
    },
    category: {
      type: String,
      enum: category,
    },
    desc: {
      type: String,
      required: true,
    },
    location: {
      type: String,
      enum: location,
    },
    addedBy: {
      type: Schema.Types.ObjectId,
      ref: 'User',
      required: true,
    },
    serviceImage: {
      type: String,
    },
  },
  {
    timestamps: true,
    toJSON: {
      virtuals: true,
    },
  }
);

export const Service = model<IService, ServiceModel>('Service', ServiceSchema);
