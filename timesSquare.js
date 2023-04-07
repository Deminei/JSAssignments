function power(base, exponent) {
    if (exponent === 0) {// if exponent is 0 will return 1
      return 1;     //since any number to the power of 0 is 1, weirdly enough.
    } else {
      return base * power(base, exponent - 1);  //multiplies base by the result of power function recursively
    }                                        //with the same base and an exponent that is 1 less than the current exponent till exp reaches 0.
  }
  console.log(power(2, 5));
  console.log(power(7, 3));
  console.log(power(12, 2));
  console.log(power(9, 4));
  //I could not wrap my head around an iterative version of this...