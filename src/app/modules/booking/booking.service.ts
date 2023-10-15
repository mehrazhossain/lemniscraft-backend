import { Booking } from '@prisma/client';
import prisma from '../../../shared/prisma';

const booking = async (data: Booking) => {
  const result = await prisma.booking.create({
    data,
  });
  return result;
};
const getAllbooking = async () => {
  const result = await prisma.booking.findMany({
    include: {
      service: true,
      slot: true,
      user: true,
    },
  });
  return result;
};
const getSinglebooking = async (id: string) => {
  const result = await prisma.booking.findUnique({
    where: {
      id: id,
    },
    include: {
      service: true,
      slot: true,
      user: true,
    },
  });
  return result;
};
const updateSingleBooking = async (id: string, data: Partial<Booking>) => {
  const result = await prisma.booking.update({
    where: {
      id: id,
    },
    data,
    include: {
      service: true,
      slot: true,
      user: true,
    },
  });
  return result;
};

const deleteSingleBooking = async (id: string) => {
  const result = await prisma.booking.delete({
    where: {
      id: id,
    },
    include: {
      service: true,
      slot: true,
      user: true,
    },
  });
  return result;
};

export const bookingService = {
  booking,
  getAllbooking,
  getSinglebooking,
  updateSingleBooking,
  deleteSingleBooking,
};
