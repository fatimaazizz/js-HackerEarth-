
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
    let arrayofinput=input.split("\n");
    let testCase=parseInt(arrayofinput[0]);
   
   // process.stdout.write("TestCase " + testCase + " N "+ n +" k "+ k+".\n");
   let arrayofavlueofNK,n,k,arrayofElement,arrayofNumbers,index;
   //let output=[];
for(let value=1;value<=testCase*2;value=value+2)
{
   
     arrayofavlueofNK=arrayofinput[value].split(" ");
     n=parseInt(arrayofavlueofNK[0]);
     k=parseInt(arrayofavlueofNK[1]);
    // process.stdout.write( n +" n & K " +k +arrayofinput[value]) ;
     arrayofNumbers=arrayofinput[value+1].split(" ");
     //let output=[];
     //arrayofNumbers=arrayofElement.map(element=>parseInt(element));
    if((k!==0 && k<=1000000 )&& (n>=1 && n<=100000))
    {   
        index=n-(k%n);
        
        
            for(let i=index;i<n;i++)
            process.stdout.write(arrayofNumbers[i] +" ");
        
            for(let i=0;i<index;i++)
            { if(i<index-1)
                {
                process.stdout.write(arrayofNumbers[i] +" ");

                }
                else
                {
                    process.stdout.write(arrayofNumbers[i] +"\n");
                }
            }
    }
    if(k===0)
    { 
            for(let i=0;i<n;i++)
            { 
                if(i<n-1)
                {
                process.stdout.write(arrayofNumbers[i] +" ");
                }
                else
                {
                    process.stdout.write(arrayofNumbers[i] +"\n");
                }
            }
    }

   
   }
  

}

