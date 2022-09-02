const sentence = "hello there from lighthouse labs";
let time = 50; //setting a time variable of 50ms
for (const char of sentence) { // loop through every character
  time = time + 50; // this takes the current time and adds it by 50 ms at each character
  setTimeout(() => {
    process.stdout.write(char); // the timeout which delays every character by 50ms
  }, time) 
}