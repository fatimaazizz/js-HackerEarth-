
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
    //process.stdout.write("Hi, " + input + ".\n");       // Writing output to STDOUT
    let array=input.split("\n")
    let testcaes=parseInt(array[0]);
    let rowno=1;

    while(testcaes--)
    {
       let ans = Number.MAX_VALUE;
       let n  =parseInt(array[rowno]);
        let aofst  =array[rowno+1].split(" ");
        let a=aofst.map(element=>parseInt(element));

        a.sort((a, b) => a - b);//js sort is sorting the string

 
  //process.stdout.write(a.join(" ") + "\n");
        for(let i=0;i<n-1;i++)
        {
        	ans = Math.min(ans, a[i]^a[i+1]);
        }
        process.stdout.write(ans + "\n"); 
        rowno+=2
    }
}

// Warning: Printing unwanted or ill-formatted data to output will cause the test cases to fail


// Write your code here
