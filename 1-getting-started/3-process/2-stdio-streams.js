// process.stdin.on('readable', () => {
//   const chunk = process.stdin.read();
//   if (chunk !== null) {
//     process.stdout.write(chunk);
//   }
// });

process.stdin.pipe(process.stdout);
