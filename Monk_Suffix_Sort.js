
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
   // process.stdout.write("Hi, " + input + ".\n");       // Writing output to STDOUT
    let sarray=input.split(" ");
    let s=sarray[0];
    let n=parseInt(sarray[1]);
    let suffix=[];
    for(let k=0;k<s.length;k++)
    {

        suffix.push(s.slice(k,s.length));
    }
    suffix.sort();
     process.stdout.write(suffix[n-1] + "\n");

}

// Warning: Printing unwanted or ill-formatted data to output will cause the test cases to fail


// Write your code here
