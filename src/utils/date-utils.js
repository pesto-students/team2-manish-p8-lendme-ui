export const months2years = (months) => {
  let yearsMonths = "";
  const dur1 = Math.floor(months / 12);
  const dur3 = months % 12;
  if (dur1 === 1) {
    yearsMonths = `${dur1} year`;
  } else if (dur1 > 1) {
    yearsMonths = `${dur1} years`;
  }

  if (dur3 === 1) {
    yearsMonths += ` ${dur3} month`;
  } else if (dur3 > 1) {
    yearsMonths += ` ${dur3} months`;
  }
  return yearsMonths;
};
