import { Request, Response } from 'express';
import httpStatus from 'http-status';
import { paginationFields } from '../../../constants/pagination';
import catchAsync from '../../../shared/catchAsync';
import pick from '../../../shared/pick';
import sendResponse from '../../../shared/sendResponse';
import { serviceFilterableFields } from './service.constant';
import { serviceService } from './service.service';

const insertIntoDB = catchAsync(async (req: Request, res: Response) => {
  const data = req.body;
  const result = await serviceService.insertIntoDB(data);

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Service Created Successfully',
    data: result,
  });
});
const getAllService = catchAsync(async (req: Request, res: Response) => {
  const filter = pick(req.query, serviceFilterableFields);
  const pagination = pick(req.query, paginationFields);

  const result = await serviceService.getAllServiceFromDB(filter, pagination);

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'All Service Fetched Successfully',
    data: result,
  });
});
const getSingleService = catchAsync(async (req: Request, res: Response) => {
  const { id } = req.params;
  const result = await serviceService.getSingleService(id);

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Service Fetched Successfully',
    data: result,
  });
});
const updateService = catchAsync(async (req: Request, res: Response) => {
  const { id } = req.params;
  const data = req.body;
  const result = await serviceService.updateService(id, data);

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Service Fetched Successfully',
    data: result,
  });
});

const deleteService = catchAsync(async (req: Request, res: Response) => {
  const { id } = req.params;
  const result = await serviceService.deleteService(id);

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Service Deleted Successfully',
    data: result,
  });
});

export const ServiceController = {
  insertIntoDB,
  getAllService,
  getSingleService,
  updateService,
  deleteService,
};
