import { Request, Response } from 'express';
import httpStatus from 'http-status';
import catchAsync from '../../../shared/catchAsync';
import sendResponse from '../../../shared/sendResponse';
import { UserService } from './user.service';
import pick from '../../../shared/pick';
import { userFilterableFields } from './user.constant';

const getAllUserFromDB = catchAsync(async (req: Request, res: Response) => {
  const filters = pick(req.query, userFilterableFields);

  const options = pick(req.query, ['limit', 'page', 'sortBy', 'sortOrder']);
  const result = await UserService.getAllUserFromDB(filters, options);

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'All User Fetched Successfully',
    data: result,
  });
});
const getSingleUserFromDB = catchAsync(async (req: Request, res: Response) => {
  const { id } = req.params;
  const result = await UserService.getSingleUserFromDB(id);

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Single User Fetched Successfully',
    data: result,
  });
});
const updateSingleUserFromDB = catchAsync(
  async (req: Request, res: Response) => {
    const { id } = req.params;
    const data = req.body;
    const result = await UserService.updateSingleUserFromDB(id, data);

    sendResponse(res, {
      statusCode: httpStatus.OK,
      success: true,
      message: 'Single User Updated Successfully',
      data: result,
    });
  }
);
const deleteSingleUserFromDB = catchAsync(
  async (req: Request, res: Response) => {
    const { id } = req.params;
    const result = await UserService.deleteSingleUserFromDB(id);

    sendResponse(res, {
      statusCode: httpStatus.OK,
      success: true,
      message: 'Delete User Successfully',
      data: result,
    });
  }
);

export const UserController = {
  getSingleUserFromDB,
  updateSingleUserFromDB,
  getAllUserFromDB,
  deleteSingleUserFromDB,
};
