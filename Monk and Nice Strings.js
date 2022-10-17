
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
        // Writing output to STDOUT
    let array=input.split("\n");
    let testCase=parseInt(array[0]);
    let rowno=1;
    while(testCase--)
    {
        let currentvalue=array[rowno];
        let nicestring=0
        let i=1;
        while(i<rowno)
        { // process.stdout.write(currentvalue+" array value "+array[i]+"\n");
            if(currentvalue>array[i])
            {
                nicestring+=1;
               // process.stdout.write((currentvalue<array[i])+"\n");  
            }
            i++;
        }
        process.stdout.write(nicestring+"\n");  
        rowno++;
    }
}

// Warning: Printing unwanted or ill-formatted data to output will cause the test cases to fail


// Write your code here
