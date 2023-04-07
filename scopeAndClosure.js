function outer() {//parent function
    const a = "Outer";
    const b = { value: 42 };
    console.log("outer function:", a, b);

    function inner(a, b) {
      a = "Inner";
      b.value = 10;   //children always have access to their parents!
      console.log("inner function:", a, b);
    }
    inner(a, b);
    console.log("after inner function:", a, b);
  }
  outer();