import { Request, Response } from 'express';
import httpStatus from 'http-status';
import catchAsync from '../../../shared/catchAsync';
import sendResponse from '../../../shared/sendResponse';
import { bookingService } from './booking.service';

const booking = catchAsync(async (req: Request, res: Response) => {
  const data = req.body;
  const result = await bookingService.booking(data);
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Service Booked Successfully',
    data: result,
  });
});
const getAllbooking = catchAsync(async (req: Request, res: Response) => {
  const result = await bookingService.getAllbooking();
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Service Booked Successfully',
    data: result,
  });
});
const getSinglebooking = catchAsync(async (req: Request, res: Response) => {
  const { id } = req.params;
  const result = await bookingService.getSinglebooking(id);
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Service Booked Successfully',
    data: result,
  });
});
const updateSingleBooking = catchAsync(async (req: Request, res: Response) => {
  const data = req.body;
  const { id } = req.params;
  const result = await bookingService.updateSingleBooking(id, data);
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Service Booked Successfully',
    data: result,
  });
});

const deleteSingleBooking = catchAsync(async (req: Request, res: Response) => {
  const { id } = req.params;
  const result = await bookingService.deleteSingleBooking(id);
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Service Booked Successfully',
    data: result,
  });
});

export const bookingController = {
  booking,
  getAllbooking,
  getSinglebooking,
  updateSingleBooking,
  deleteSingleBooking,
};
