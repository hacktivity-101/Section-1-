for(let i=0; i<10; i++){
    console.log(i);
}

let nums = [34, 85, 49, 45, 65, 41];

for(let i of nums){
    console.log(i);
}
console.log('----------');
for(let n of nums){
    if(n%2 !== 0){
        console.log(n);
    }
}