// If statement 2 returns true, the loop will start over again, if it returns false, the loop will end.

// Statement 2 is also optional, but only if you put a break inside the loop. Otherwise, the loop will never end!

// Statement 3 is used to change the initial variable. It can do anything, including negative increment (i--), positive increment (i = i + 15).

// Statement 3 is also optional, but only if you increment your values inside the loop. Like this:

var i = 0;
for (; i < 10;) {
    document.write(i);
    i++;
}

// Fill in the blanks to print EVEN values from 0 to 20 using a for loop:

var x = 0;
for (; x <= 20; x += 2) {
    document.write(x);
}