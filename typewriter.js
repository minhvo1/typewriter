const sentence = "hello there from lighthouse labs";
for (const char of sentence) {
  process.stdout.write(char);
  let delay = 0;
  setTimeout(() => {

  }, delay)
  delay += 50;
};
process.stdout.write('\n');
