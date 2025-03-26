// 22. Class Photos It's photo day at the local school, and you're the photographer assigned to take class photos. The class that you'll be photographing has an even number of students, and all these students are wearing red or blue shirts. In fact, exactly half of the class is wearing red shirts, and the other half is wearing blue shirts. You're responsible for arranging the students in two rows before taking the photo. Each row should contain the same number of students and should adhere to the following guidelines:
// 
// All students wearing red shirts must be in the same row.
// 
// All students wearing blue shirts must be in the same row.
// 
// Each student in the back row must be strictly taller than the student directly in front of them in the front row. Write a function that takes in two arrays and returns whether or not a class photo that follows these guidelines can be taken.
// You're given two input arrays: one containing the heights of all the students with red shirts and another one containing the heights of all the students with blue shirts. These arrays will always have the same length, and each height will be a positive integer. Write a function that returns whether or not a class photo that follows the stated guidelines can be taken.
// Sample input:redShirtHeights = [5, 8, 1, 3, 4], blueShirtHeights = [6, 9, 2, 4, 5] Sample output: true

const redShirtHeights = [5, 8, 1, 3, 4];
const blueShirtHeights = [6, 9, 2, 4, 4];

const classPhoto = (redShirt, blueShirt) => {
  const sortedRed = redShirt.sort((a, b) => a - b);
  const sortedBlue = blueShirt.sort((a, b) => a - b);
  let topRow = sortedRed[0] > sortedBlue[0] ? sortedRed : sortedBlue;
  let bottomRow = topRow === sortedRed ? sortedBlue : sortedRed;

  for (let i = 0; i < topRow.length; i++) {
    if (topRow[i] <= bottomRow[i]) return false;
  }
  return true;
};

console.log(classPhoto(redShirtHeights, blueShirtHeights)); // true
