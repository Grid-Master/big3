export const calculateAge = (birthDateString: string) => {
  const birthDate = new Date(birthDateString);
  const currentDate = new Date();

  const diffInMilliseconds = currentDate.getTime() - birthDate.getTime();
  const diffInDays = diffInMilliseconds / (1000 * 60 * 60 * 24);

  const age = Math.floor(diffInDays / 365.25);
  return age;
};
