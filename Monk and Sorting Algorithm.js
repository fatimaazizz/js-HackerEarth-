
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
    let array=input.split("\n");
    let chunk=parseInt(array[0]);
    let iteration=0;
    let newarr=array[1].split(" ")
    let newarray;
    let ac=0
    while(chunk--)
    {   
        let comapare=[];
      for(let i=0;i<newarr.length;i++)
      
      { 
          let n=newarr[i].length;

          if (n<iteration*5)
           break;
           
          let obj={value:'',weight:'',times:iteration};
          let lower=n-ac-5;
          let highest=n-ac;
          if(lower<0 && highest>-5)
          {
            lower=0;
            breakit=false;

          }
          if((highest<=0)&& highest>-5)
          {
              highest=1;
          }
         
         obj.value=parseInt(newarr[i].slice(lower,highest));
         obj.weight=newarr[i];
        // process.stdout.write(obj.value + "\n"); 
         comapare[i]=obj;
        
      }
       iteration++;
      ac+=5;
      
      
       //process.stdout.write(comapare+"\n"); 
      // let array2=comapare.sort((a,b)=>(a.value>b.value) ? 1 : -1);
       let array2=comapare.sort((a,b)=>(a.value>b.value) ? 1 : ((a.value === b.value)&& (a.times===0)) ? 1 : ((a.value === b.value)&& (a.times!=0)) ?);
      for(let i=0;i<array2.length;i++)
      {  if(array2!=undefined)
        {
          if(i!==array2.length-1)
          process.stdout.write(array2[i].weight + " ");  
          else
          process.stdout.write(array2[i].weight + "\n");  
        }
      }
    }
}

// Warning: Printing unwanted or ill-formatted data to output will cause the test cases to fail


// Write your code here
