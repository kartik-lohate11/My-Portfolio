/**
 * Calculates experience in years and months from a starting date
 * @param {string} startDate - Format 'YYYY-MM-DD'
 * @returns {{ years: number, months: number, display: string }}
 */
export const calculateExperience = (startDate) => {
  const start = new Date(startDate);
  const now = new Date();

  let years = now.getFullYear() - start.getFullYear();
  let months = now.getMonth() - start.getMonth();

  if (months < 0) {
    years--;
    months += 12;
  }

  const display = years === 0 
    ? `${months} mo` 
    : months === 0 
      ? `${years} yr` 
      : `${years}.${months} yrs`;

  return { years, months, display };
};
