import { Request, Response } from 'express';
import httpStatus from 'http-status';
import { paginationFields } from '../../../constants/pagination';
import catchAsync from '../../../shared/catchAsync';
import pick from '../../../shared/pick';
import sendResponse from '../../../shared/sendResponse';
import { RequestHandler } from 'express-serve-static-core';
import { ServiceListsService } from './service.service';
import { IService } from './service.interface';
import { serviceFilterableFields } from './service.constant';

const createService: RequestHandler = catchAsync(
  async (req: Request, res: Response) => {
    const { ...serviceData } = req.body;
    const result = await ServiceListsService.createService(
      serviceData,
      req?.user?._id
    );

    sendResponse<IService>(res, {
      statusCode: httpStatus.OK,
      success: true,
      message: 'Service created successfully!',
      data: result,
    });
  }
);

const getAllServices = catchAsync(async (req: Request, res: Response) => {
  const filters = pick(req.query, serviceFilterableFields);
  const paginationOptions = pick(req.query, paginationFields);

  const result = await ServiceListsService.getAllServices(
    filters,
    paginationOptions
  );

  sendResponse<IService[]>(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Service retrieved successfully !',
    meta: result.meta,
    data: result.data,
  });
});

const getSingleService = catchAsync(async (req: Request, res: Response) => {
  const id = req.params.id;

  const result = await ServiceListsService.getSingleService(id);

  sendResponse<IService>(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Service retrieved successfully !',
    data: result,
  });
});

const updateService = catchAsync(async (req: Request, res: Response) => {
  const id = req.params.id;

  const updatedData = req.body;

  const result = await ServiceListsService.updateService(id, updatedData);

  sendResponse<IService>(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Service updated successfully !',
    data: result,
  });
});

const deleteService = catchAsync(async (req: Request, res: Response) => {
  const id = req.params.id;

  const result = await ServiceListsService.deleteService(id);

  sendResponse<IService>(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Service deleted successfully !',
    data: result,
  });
});

export const ServiceController = {
  createService,
  getAllServices,
  getSingleService,
  updateService,
  deleteService,
};
