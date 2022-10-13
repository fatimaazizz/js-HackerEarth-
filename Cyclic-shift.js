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
        let nk=array[rowno].split(" ");
        let n=parseInt(nk[0]);
        let k=parseInt(nk[1]);
        let a=array[rowno+1];
        let b=a;
        let count=0;
        let p=-1
        max='';
        for(let i=0;i<n;i++)
        {
           
            if(b>max)
            {
                max=b;
                count=i;
            }
            else if(b==max)
            {
                p=i-count;
                break;
            }
             b=b.substring(1,n)+b[0];
        }
            if(p===-1)
            {
               //process.stdout.write("count" +rowno+"\n");  
            count=count+(k-1)*n;
            //process.stdout.write("row no. " +rowno+"\n");
            }
            else{
                count=count+(k-1)*p;
            }


        
         process.stdout.write(count+"\n");
         rowno+=2;
         
    }
}

// Warning: Printing unwanted or ill-formatted data to output will cause the test cases to fail

// Write your code here
