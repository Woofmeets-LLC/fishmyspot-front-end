import { addDays } from "date-fns";

export const bookingTimeFormatter = (date, { startTime, endTime }) => {
  const [startHour] = startTime.split(":").map((t) => +t);
  const [endHour] = endTime.split(":").map((t) => +t);

  const bookingTime = {
    bookingStart: null,
    bookingEnd: null,
  };

  let endDate;
  let startDate = new Date(date);

  if (startHour > endHour) {
    endDate = addDays(new Date(date), 1);
  } else {
    endDate = new Date(date);
  }

  // calculate date string for end date
  const endDay = endDate.getDate();
  const endMonth = endDate.getMonth() + 1;
  const endYear = endDate.getFullYear();
  const addLeadingZero = (value) => (value <= 9 ? `0${value}` : value);

  bookingTime.bookingEnd = `${endYear}-${addLeadingZero(
    endMonth
  )}-${addLeadingZero(endDay)}T${addLeadingZero(endHour)}:00:00.000-04:00`;

  // calculate date string for start date
  const startDay = startDate.getDate();
  const startMonth = startDate.getMonth() + 1;
  const startYear = startDate.getFullYear();

  bookingTime.bookingStart = `${startYear}-${addLeadingZero(
    startMonth
  )}-${addLeadingZero(startDay)}T${addLeadingZero(startHour)}:00:00.000-04:00`;

  return bookingTime;
};
