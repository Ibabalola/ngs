const theOneFunc = (initialDelay) => {
  const print = (delay) => {
    console.log(`Hello after ${delay} seconds`);
  }

  print(initialDelay);

  setTimeout(print, 4 * 1000, 8);
};

setTimeout(theOneFunc, 4 * 1000, 4);

// Hello after 4 seconds

// Hello after 8 seconds

// You can define only ONE function
