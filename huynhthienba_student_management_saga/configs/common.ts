const formatDatePart = (
  timestamp: any,
  separator: string,
  reverse: boolean = false
) => {
  const date = new Date(timestamp);
  const day = date.getDate();
  const month = date.getMonth() + 1;
  const year = date.getFullYear();

  const formattedDay = day < 10 ? "0" + day : day;
  const formattedMonth = month < 10 ? "0" + month : month;

  if (reverse) {
    return `${year}${separator}${formattedMonth}${separator}${formattedDay}`;
  }
  return `${formattedDay}${separator}${formattedMonth}${separator}${year}`;
};

export const formatDateInput = (timestamp: any) => {
  return formatDatePart(timestamp, "-", true);
};

export const formatDate = (timestamp: any) => {
  return formatDatePart(timestamp, "/");
};

export const formatDateToISO8601 = (time: string) => {
  const parts = time.split("-");
  if (parts.length !== 3) {
    throw new Error("Invalid date format. Expected yyyy-mm-dd.");
  }
  const year = parseInt(parts[0], 10);
  const month = parseInt(parts[1], 10) - 1;
  const day = parseInt(parts[2], 10);

  if (isNaN(year) || isNaN(month) || isNaN(day)) {
    throw new Error(
      "Invalid date values. Year, month, and day must be numeric."
    );
  }

  const parsedDate = new Date(year, month, day);

  if (parsedDate.toString() === "Invalid Date") {
    throw new Error(
      "Invalid date values. Ensure year, month, and day are within valid ranges."
    );
  }

  return parsedDate.toISOString();
};
