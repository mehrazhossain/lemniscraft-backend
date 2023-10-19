import { Prisma, Service } from '@prisma/client';
import httpStatus from 'http-status';
import ApiError from '../../../errors/ApiError';
import { paginationHelpers } from '../../../helpers/paginationHelper';
import { IGenericResponse } from '../../../interfaces/common';
import { IPaginationOptions } from '../../../interfaces/pagination';
import prisma from '../../../shared/prisma';
import { serviceSearchAbleFields } from './service.constant';
import { IServiceFilters } from './service.interface';

const insertIntoDB = async (data: Service) => {
  const result = await prisma.service.create({
    data,
  });
  return result;
};

const getAllServiceFromDB = async (
  filters: IServiceFilters,
  options: IPaginationOptions
): Promise<IGenericResponse<Service[]>> => {
  const { page, limit, skip } = paginationHelpers.calculatePagination(options);
  const { searchTerm, ...filtersData } = filters;
  const andConditions = [];

  if (searchTerm) {
    andConditions.push({
      OR: serviceSearchAbleFields.map(field => ({
        [field]: {
          contains: searchTerm,
          mode: 'insensitive',
        },
      })),
    });
  }

  if (Object.keys(filtersData).length > 0) {
    andConditions.push({
      AND: Object.keys(filtersData).map(key => ({
        [key]: {
          // eslint-disable-next-line @typescript-eslint/no-explicit-any
          equals: (filtersData as any)[key],
        },
      })),
    });
  }

  const whereCondition: Prisma.ServiceWhereInput =
    andConditions.length > 0 ? { AND: andConditions } : {};
  const result = await prisma.service.findMany({
    where: whereCondition,
    skip,
    take: limit,
    orderBy:
      options.sortBy && options.sortBy
        ? {
            [options.sortBy]: options.sortOrder,
          }
        : {
            createdAt: 'desc',
          },
  });
  const total = await prisma.service.count();
  return {
    meta: {
      total,
      page,
      limit,
    },
    data: result,
  };
};
// * 🚀🚀 Get By Id service
const getSingleService = async (id: string) => {
  const result = await prisma.service.findUnique({
    where: {
      id,
    },
  });
  if (!result) {
    throw new ApiError(httpStatus.NOT_FOUND, 'Service Not Found');
  }
  return result;
};
// * 🚀🚀 Update by Id
const updateService = async (id: string, data: Partial<Service>) => {
  const result = await prisma.service.update({
    where: {
      id,
    },
    data,
  });
  if (!result) {
    throw new ApiError(httpStatus.NOT_FOUND, 'Service Not Found');
  }
  return result;
};
// * 🚀🚀 Delete By Id service
const deleteService = async (id: string) => {
  const result = await prisma.service.delete({
    where: {
      id,
    },
  });
  if (!result) {
    throw new ApiError(httpStatus.NOT_FOUND, 'Service Not Found');
  }
  return result;
};

export const serviceService = {
  insertIntoDB,
  getSingleService,
  getAllServiceFromDB,
  deleteService,
  updateService,
};
