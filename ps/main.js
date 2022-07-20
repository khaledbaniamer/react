const arr = [5,6,2,4,1,5,1,2];
const arr1=[];
let k =0;
for (let i = 0; i < arr.length; i++) {
    const element = arr[i];
    let flag = true;
    for (let j = i+1; j < arr.length; j++) {
        if(element ==arr[j]){
            flag=false;
        }
        
    }
    if(flag){
        
        arr1[k]=element;
        k++;
    }
    flag=true;
}
console.log(arr1)