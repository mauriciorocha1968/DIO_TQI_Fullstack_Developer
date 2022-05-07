// Comentário em uma linha  CTRL+/

/*
Comentário em mais
de uma 
linha
*/

function soma(a, b) {
  console.log(`Somando (${a}+${b})`);
  const total = a + b;
  console.log("Resultado: ", total);
  return total;
}
function returnEvenValues(array) {
  let evenNums = [];
  for (let i = 0; i < array.length; i++) {
    if (array[i] % 2 === 0) {
      evenNums.push(array[i]);
    }
  }
  console.log("Os números pares são:", evenNums);
}

soma(10, 20);

returnEvenValues([1, 2, 3, 4, 5, 6, 7, 8, 9, 0]);
