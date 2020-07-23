// TODO: You are getting a `numbers` array. Return the sum of **negative** numbers only.

 sumOfNegative = (numbers) => {
  //let is my initializer
    let sumOfNegative = 0;
    numbers.forEach ((number) => {
      //if is my condition
      if (number < 0){
        sumOfNegative += number;
      }
    });
      console.log(sumOfNegative)
      //return is my final-expression
      return sumOfNegative;
}

sumOfNegative([-4, 5, -2, 9, 18]);
