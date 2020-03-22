
import readLineSync from 'readline-sync';

export const acquaintance = () => {
  const getUserName = readLineSync.question('May I know your name? ');
  console.log(`Hello, ${getUserName}!`);    
};
