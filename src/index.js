
import readLineSync from 'readline-sync';

export default () => {
  const getUserName = readLineSync.question('May I know your name? ');
  console.log(`Hello, ${getUserName}!`);
};
