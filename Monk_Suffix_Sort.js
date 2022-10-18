
// Sample code to perform I/O:

process.stdin.resume();
process.stdin.setEncoding("utf-8");
var stdin_input = "";

process.stdin.on("data", function (input) {
    stdin_input += input;                               // Reading input from STDIN
});

process.stdin.on("end", function () {
   main(stdin_input);
});

function main(input) {
    process.stdout.write("Hi, " + input + ".\n");       // Writing output to STDOUT
    let sarray=input.split(" ");
    let s=sarray[0];
    let n=parseInt(sarray[1]);
    let sufix;
    for(let i=0;i<s.length;i++);
    {
        suffix[i]=s[1:];
    }
    suffix.sort();
     process.stdout.write(suffix[n] + "\n");

}

// Warning: Printing unwanted or ill-formatted data to output will cause the test cases to fail


// Write your code here
