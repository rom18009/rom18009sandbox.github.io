// for (statement 1; statement 2; statement 3;) {
//     code block to be executed
// }

// Statement 1 is executed before the loop (the code block) starts.
// Statement 2 defines the condition for running the loop (the code block).
// Statement 3 is executed each time after the loop (the code block) has been executed.

for (1=1; 1<5; i++) {
    document.write(i + "<br />");
}

// In this example, Statement 1 sets a variable before the loop starts (var i = 1).
// Statement 2 defines the condition for the loop to run (it must be less than or equal to 5).
// Statement 3 increases a value (i++) each time the code block in the loop has been executed.

// Statement 1 is optional, and can be left out, if your values are set before the loop starts.

var i = 1;
for (; i<=5; i++) {
    document.write(i + "<br />");
}

// You can also initiate more than one value in statement 1, using commas to separate them.

for (i=1, text=""; i<=5; i++) {
    text = i;
    document.write(i + "<br />");
}

// example

var i = 1;
for (k=1; k<10; k++) {
    i += k;
}