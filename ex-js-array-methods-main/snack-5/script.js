const nums = [2, 8, 4, 7, 12, 87];

// Crea un array a partire dall'array nums, che abbia solo i numeri pari

const newArr = nums.filter((el) => el % 2 === 0);

//versione estesa

// const newArr = nums.filter((num) => {
//   let isEven = num % 2 === 0;

//   if (isEven) {
//     return true;
//   }
// });
console.log(newArr);
// Risultato: [2, 8, 4, 12]