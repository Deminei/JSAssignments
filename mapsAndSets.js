// its-a map!
let fruitInventory = new Map([
    ['apple', 10],
    ['banana', 20],
    ['orange', 30]
  ]);

  // updated inventory of apple
  fruitInventory.set('apple', 15);

  // get inventory of banana and put in bananainventory
  let bananaInventory = fruitInventory.get('banana');

  // made a new set called uniquecolors, very unique
  let uniqueColors = new Set(['red', 'blue', 'green']);

  // added yellow to uniquecolors set
  uniqueColors.add('yellow');

  // check for blue in uniquecolors and store result in hasblue
  let hasBlue = uniqueColors.has('blue');