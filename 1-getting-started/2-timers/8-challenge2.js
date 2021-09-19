// Print "Hello World"
// Every second
// And stop after 5 times

// After 5 times. Print "Done" and let Node exit.

const interval = 1000;
let counter = 0;
const limit = 5
const print = () => {
  console.log('Hello World');
}


const timerId = setInterval(() => {
  print();
  counter += 1;

  if (counter >= limit) {
    clearInterval(timerId);
  }
}, interval);