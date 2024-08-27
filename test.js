const array = [1, 2, 3, 4, 5, 6];

// const newArray = array.map((item) => {
//   if (item > 3) {
//     return item * 2;
//   }
// });
const newFilterArray = array.filter((item) => item > 3 && item);

//8,10,12
//map return fixed length & new Array
//
// console.log(newFilterArray);

const newArray = array.forEach((item, index, array) => console.log(item));

console.log(array);
