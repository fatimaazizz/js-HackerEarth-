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
    let array=input.split("\n")
    let testcaes=parseInt(array[0]);
    let rowno=1;
    var cache={};
    var cache1={};
    let MOD=1000000009;
    while(testcaes--)
    {    let n=parseInt(array[rowno]);
         process.stdout.write(ans(n) + "\n");
         rowno+=1;
    }
    function  ans(n)
    {   
        if (n < 50000000)
       {
        if (n in cache)
        return cache[n];
        else if(n===0)
        return 1;
        else if(n===1)
        return 10;
        let temp1=ans(parseInt(n/2));
        let  temp2=ans(parseInt(n/2-1));
        let temp3;
        if(n%2===0)
        {
            
            cache[n]=(temp1*temp1-temp2*temp2) % MOD;
        }
        if(n%2===1)
        {    
           temp3 =ans(parseInt(n/2+1));
           cache[n]=(temp1*(temp3- temp2))% MOD;
        }
        
        return cache[n];
        }
        else
        {

             if (n in cache1)
             return cache1[n];
              let temp1=ans(parseInt(n/2));
              let temp2=ans(parseInt(n/2-1));
              let temp3 ;
             if(n%2===0)
            {
                
                cache1[n]=(temp1*temp1-temp2*temp2) % MOD;
            }
            if(n%2===1)
            {
              
                temp3 =ans(parseInt(n/2+1));
                cache1[n]=(temp1*(temp3- temp2))% MOD;
            }
        return cache1[n];
        }
    }
 
}
 
// Warning: Printing unwanted or ill-formatted data to output will cause the test cases to fail

// Write your code here
