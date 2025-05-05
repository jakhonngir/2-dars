// 1
const nums = [10, 15, 20, 25];

const [firstvalue, ...othervalues] = nums;
console.log(firstvalue);
console.log(othervalues);

// 2
const user = {
    name: 'Jahongir',
    lastname: 'Xolmirzayev',
    age: 16,
}

const {name, lastname} = user;
console.log(name, lastname);


// 3
const total = (...numbers) => {
    return numbers.reduce((num, num2) => num + num2, 0);
}

console.log(total(10, 19, 24, 40));

// 4
const person = {name: 'Jahongir', age: 16 };
const userWithTraining = { ...person, training: 'playing football'};

console.log(userWithTraining);
