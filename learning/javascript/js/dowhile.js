// it's a variant of the while loop but with one important difference.

// This loop will execute the code block once, before checking if the condition is true, and then it will repeat the loop as long as the condition is true.

do {
    code block
}
while (condition);

// Note the semicolon used at the end of the do...while loop. This is important.

// This example prints out numbers from 20 to 25.

var i = 20;
do {
    document.write(i + "<br />");
    i++;
}
while (i <= 25);

// Apply the "do" and "while" keywords in their corresponding positions.

var count = 1;
do {
    document.write("hello <br />");
    count++;
}
while (count <= 10);

// break
// We've met the break statement earlier in this module, we use it to "jump out" of a loop and continue executing the code after the loop.

// In this example, once i reaches 5, it will break out of the loop.
for (i = 0; <= 10; i++) {
    if (i == 5) {
        break;
    }
    document.write(i + "<br />");
}

// continue
// Unlike the break statement, the continue statement breaks only one iteration in the loop, and continues with the next iteration.

for (i = 0; <= 10; i++) {
    if (i == 5) {
        continue;
    }
    document.write(i + "<br />");
}

// The value 5 is not printed, because continue skips that iteration of the loop.


 