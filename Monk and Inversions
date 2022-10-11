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
    let splitarrayonendline=input.split("\n")
    let testcases=parseInt(splitarrayonendline[0]);
    //process.stdout.write("testcases, " + testcases + ".\n");
    let jumpvalue=1;
    let value=1;
    while(value<=testcases)
    { let newMatrix=[];
      let n=parseInt(splitarrayonendline[jumpvalue]);
      //process.stdout.write("n, " + n + ".\n");
       for(let k=1;k<=n;k++)
       {
          let array=splitarrayonendline[jumpvalue+k].split(" ")
          if (k===1)
          {newMatrix=[...array];
          }
          else{
             newMatrix=[newMatrix,...array]
          }
       }
      let nextmatix= newMatrix.join(",");
      nextmatix=nextmatix.split(",");
      nextmatix=nextmatix.map(elemenet=>parseInt(elemenet));
       //process.stdout.write( nextmatix.length+" Hi, " + nextmatix + ".\n");
       let count=0;
 /*      for(let i=0;i<n*n;i++)
       {
           process.stdout.write( nextmatix.length+" Hi, " + nextmatix[i] + ".\n");
       }
*/
       for(let i=0;i<n;i++)
       { 
          
         for(let j=0;j<n;j++)
         {
             for(let p=i;p<n;p++)
            { 
               
               for(let q=j;q<n;q++)
               {
                 if(nextmatix[(n*i)+j]>nextmatix[(n*p)+q])
                 {count+=1;}
               }
             }
         
         }

       }
       //process.stdout.write(count);
       value=value+1;
       process.stdout.write(count+"\n");

       jumpvalue=jumpvalue+n+1;

    }
}

// Warning: Printing unwanted or ill-formatted data to output will cause the test cases to fail

// Write your code here
