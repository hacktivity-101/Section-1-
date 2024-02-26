const user = { name : 'raju', email : 'raju@gmail.com', password : 'abc26556'};

console.log(user.name);
console.log(user.email);
console.log(user['password']);

user.email = 'raju@hotmail.com';
console.log(user);

user.address = 'lucknow';
console.log(user);

console.log(Object.keys(user));
console.log(Object.values(user));

const smartphone = {
    brand :'samsung',
    model : 'Galaxy M31',
    price : 14999,
    color : [ 'blue', 'black', 'red' ]
};
console.log(smartphone.price);
console.log(smartphone.color[1]);

smartphone.color[2] = 'orange';
console.log(smartphone.color);

smartphone.color.push('Red');
console.log(smartphone.color)

const phonelist = [
    { brand :'samsung', model : 'Galaxy M31', price : 14999, color : [ 'blue', 'black', 'red' ] },
    { brand :'mi', model : 'A3', price : 19999, color : [ 'gray', 'black', 'red' ] },
    { brand :'Apple', model : 'iphone15', price : 85000, color : [ 'white', 'blue', 'black' ] },
    { brand :'Oneplus', model : '11T', price : 45000, color : [ 'green', 'red' ] },
];

console.log(phonelist.length);
console.log(phonelist[0].price);
console.log(phonelist[0].brand);
console.log(phonelist[0].color);
console.log(phonelist[0].color[1]);

// find price of 2nd phone
console.log(phonelist[1].price)

//replace 2nd color of last phone with 'blue'
phonelist[phonelist.length-1].color[1] = 'blue';
console.log(phonelist[3].color);










