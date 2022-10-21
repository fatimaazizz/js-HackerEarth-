
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

let EXP=100000
function main(input) {
   // process.stdout.write("Hi, " + input + ".\n");       // Writing output to STDOUT
    
    let array=input.split("\n");
    let n=parseInt(array[0]);
    let newarr=array[1].split(" ")
    let intarray=newarr.map(a=>parseInt(a));
    radixsort(intarray,n);

}
function getMax(arr,n)
{
    let mx = arr[0];
        for (let i = 1; i < n; i++)
            if (arr[i] > mx)
                mx = arr[i];
        return mx;
}
 
// A function to do counting sort of arr[] according to
    // the digit represented by exp.
function countSort(arr,n,exp)
{
    let output = new Array(n); // output array
        let i;
        let count = new Array(10);
        for(let i=0;i<EXP;i++)
            count[i]=0;
  
        // Store count of occurrences in count[]
        for (i = 0; i < n; i++)
            count[Math.floor(arr[i] / exp) % EXP]++;
  
        // Change count[i] so that count[i] now contains
        // actual position of this digit in output[]
        for (i = 1; i < EXP; i++)
            count[i] += count[i - 1];
  
        // Build the output array
        for (i = n - 1; i >= 0; i--) {
             output[count[Math.floor(arr[i] / exp) % EXP] - 1] = arr[i];
            count[Math.floor(arr[i] / exp) % EXP]--;
        }
  
        // Copy the output array to arr[], so that arr[] now
        // contains sorted numbers according to current digit
        for (i = 0; i < n; i++)
           {arr[i] = output[i];
           if(i!=n-1)
           {  process.stdout.write(arr[i] + " ");}
           else
           {
            process.stdout.write(arr[i] +"\n");
           }
           }
            
}
 
// The main function to that sorts arr[] of size n using
    // Radix Sort
function radixsort(arr,n)
{
    // Find the maximum number to know number of digits
        let m = getMax(arr, n);
  
        // Do counting sort for every digit. Note that
        // instead of passing digit number, exp is passed.
        // exp is 10^i where i is current digit number
        for (let exp = 1; Math.floor(m / exp) > 0; exp *= EXP)
            countSort(arr, n, exp);
}
 




// Warning: Printing unwanted or ill-formatted data to output will cause the test cases to fail


// Write your code here
