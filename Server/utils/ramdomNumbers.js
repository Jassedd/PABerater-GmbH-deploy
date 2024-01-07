export const generateRandomNumberString = (length) => {
    const numbers = '0123456789';
    let randomNumberString = '';
    for (let i = 0; i < length; i++) {
      const randomIndex = Math.floor(Math.random() * numbers.length);
      randomNumberString += numbers.charAt(randomIndex);
    }
    return randomNumberString;
  };