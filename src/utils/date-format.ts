import { format, parseISO } from 'date-fns';

// date format
export const dateFormatYYMD = (date: string) => {
  if (!date) {
    return null;
  }
  return format(parseISO(date), 'yyyy-MM-dd');
};

export const dateFormatYYMDHm = (date: string) => {
  if (!date) {
    return null;
  }
  return format(parseISO(date), 'yyyy-MM-dd HH:mm');
};

export const dateFormatYYMDHms = (date: string) => {
  if (!date) {
    return null;
  }
  return format(parseISO(date), 'yyyy-MM-dd HH:mm:ss');
};

export const dateFormatYYMDHmsS = (date: string) => {
  if (!date) {
    return null;
  }
  return format(parseISO(date), 'yyyy-MM-dd HH:mm:ss.SSS');
};

// unix date format
export const unixDateFormatYYMD = (unixDate: string) => {
  if (!unixDate) {
    return null;
  }

  return format(new Date(unixDate), 'yyyy-MM-dd');
};

export const unixDateFormatYYMDHm = (unixDate: string) => {
  if (!unixDate) {
    return null;
  }

  return format(new Date(unixDate), 'yyyy-MM-dd HH:mm');
};

export const unixDateFormatYYMDHma = (unixDate: string) => {
  if (!unixDate) {
    return null;
  }

  return format(new Date(unixDate), 'yyyy-MM-dd HH:mm a');
};

export const numberFormatToLocaleString = (number: number) => {
  if (!number) {
    return null;
  }
  return number.toLocaleString();
};

export const dateFormatYYMDHma = (date: string) => {
  if (!date) {
    return null;
  }
  return format(parseISO(date), 'yyyy-MM-dd HH:mm a');
};
