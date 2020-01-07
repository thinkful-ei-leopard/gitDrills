/* eslint-disable strict */
// const myTeam = 'Jose & Jorge';

// console.log(myTeam);

// function getYearOfBirth(age) {
//   if (age < 0) {
//     throw new Error('Age can not be negative');
//   }
//   return 2020 - age;
// }

// function createGreeting(name, age) {
//   const yob = getYearOfBirth(age);
//   return `'Hi, my name is ${name} and I'm ${age} years old.' 
//   'I was born in ${yob}'`;
// }


// try {
//   const greeting1 = createGreeting(24);
// } catch(e) {
//   console.error(e);
// }

// function jediName(firstName,lastName) {
// return lastName.split('').slice(0, 3).join('') + firstName.split('').slice(0, 2).join('')
// }
// console.log(jediName('Jorge','Espino'))

// function beyond(num) {
//   if(num === Infinity || num === -Infinity) {
//     console.log('And beyond');
//   } else if(num > 0) {
//     console.log('To infinity');
//   } else if(num < 0) {
//     console.log('To negative infinity');
//   } else if(num === 0) {
//     console.log('Staying home');
//   }
// }

function repeat(fn, n) {
    for(let i = 1; i <= n; i++) {
      fn()
    }
  }
  
  function hello() {
    console.log('Hello world')
  }
  
  function goodbye() {
    console.log('Goodbye world')
  }
  
  repeat(goodbye, 5)