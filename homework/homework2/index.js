class ArrayUtilities {
  /* Your magic here */
  static addZeros = () => {
    const add = numbers.map((zero) => `${zero}0`);
    const num = add.map(function (i) {
      return parseInt(i, 10);
    });
    return num;
  };

  static moreThanFifty = (addZeros) => {
    const biggerThanFifty = addZeros.filter((num) => num > 50);
    return biggerThanFifty;
  };

  static removeFirst = (moreThanFifty) => {
    const removeNumber = JSON.parse(JSON.stringify(moreThanFifty));
    removeNumber.shift();
    return removeNumber;
  };

  static sumAll = (noFirst) => {
    // noFirst배열 안에 ""를 지우기
    const stringToNumber = noFirst.map(function (i) {
      return parseInt(i, 10);
    });

    let sum = 0;
    let i;
    for (i = 0; i < stringToNumber.length; i++) {
      sum = sum + stringToNumber[i];
    }
    return sum;
  };

  static divide = (sumAll) => {
    const divide = String(sumAll).split("");
    return divide;
  };
}

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const addZeros = ArrayUtilities.addZeros(numbers);
console.log(addZeros);

const moreThanFifty = ArrayUtilities.moreThanFifty(addZeros);
console.log(moreThanFifty);

const noFirst = ArrayUtilities.removeFirst(moreThanFifty);
console.log(noFirst);

const sumAll = ArrayUtilities.sumAll(noFirst);
console.log(sumAll);

const divided = ArrayUtilities.divide(sumAll);
console.log(divided);
