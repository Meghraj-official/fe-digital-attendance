/**
 * Compares two lists of dates and returns a result array.
 * @param {Array} dateList1 - The first list of dates to compare.
 * @param {Array} dateList2 - The second list of dates for comparison.
 * @returns {Array} - An array of objects containing each date from dateList1 and its comparison result.
 */
export function CompareDates(dateList1, dateList2) {
  const result = [];

  dateList1.forEach((date2) => {
    const currentDate = new Date();
    const parsedDate2 = new Date(date2);

    // Check if the date from dateList1 is less than the current date
    if (parsedDate2 > currentDate) {
      result.push({
        date: date2,
        status: "-",
      });
    } else {
      const foundDate = dateList2.find(
        (date1) => new Date(date1).toISOString() === parsedDate2.toISOString()
      );

      // Add an object to the result array based on the comparison result
      if (foundDate) {
        result.push({
          date: date2,
          status: "PRESENT",
        });
      } else {
        result.push({
          date: date2,
          status: "ABSENT",
        });
      }
    }
  });

  return result;
}
