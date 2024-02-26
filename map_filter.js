const nums = [6, 2, 9, 5, 1, 2, 3];

for( let i=0; i<nums.length; i++){
    console.log(nums[i] ** 2);
}

console.log('-------------');

for(let n of nums){
    console.log(n ** 2);
}

console.log('-------------');

nums.forEach( (a, z,) => {console.log(a ** 2, z ) } );

let newarr = [];

for(let i of nums){
    newarr.push(i ** 2);
}

console.log(newarr);

const sqrtArr = nums.map( (n) => {return n**2} );
console.log(sqrtArr);

const fruits = ['apple', 'grapes', 'lichi', 'papaya', 'kiwi', 'strawberry'];

const upperFruits = fruits.map( (item) => { return item.toUpperCase()} );

console.log(upperFruits);

const prices = ['$56.325', '$1235.3', '$100.00', '45.325'];

const numprice = prices.map( (p) => {return parseInt(p.slice(1))});
console.log(numprice);

const prices2 = [1200, 5000, 3400, 9000, 300, 4999, 12000];

const bugetPrices = prices2.filter( (p) => {return p<5000;} )
console.log(bugetPrices);

const shortFruits = fruits.filter( (p) => {return p.length<=5} );
console.log(shortFruits);

const phonelist = [
    { brand :'samsung', model : 'Galaxy M31', price : 14999, color : [ 'blue', 'black', 'red' ] },
    { brand :'mi', model : 'A3', price : 19999, color : [ 'gray', 'black', 'red' ] },
    { brand :'Apple', model : 'iphone15', price : 85000, color : [ 'white', 'blue', 'black' ] },
    { brand :'Oneplus', model : '11T', price : 45000, color : [ 'green', 'red' ] },
    { brand :'Oneplus', model : 'J2', price : 45000, color : [ 'green', 'red' ] },
];

const midrangeSmartphone = phonelist.filter ( (s) => {return s.price<=20000} );
console.log (midrangeSmartphone);

const Brands = phonelist.map ( (b) => {return b.brand} )
console.log(Brands);

const blackColors = phonelist.filter ( (phone) => { return phone.color.includes('Black') } );
console.log(blackColors);


const samsungPhones = phonelist.filter ( (phone) => { return phone.brand === 'samsung' } );
console.log (samsungPhones);