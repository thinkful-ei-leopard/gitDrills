/* eslint-disable strict */
const myTeam = 'Jose & Jorge';

console.log(myTeam);

function getYearOfBirth(age) {
    return 2020 - age;
}

function createGreeting(age) {
    const yob = getYearOfBirth(age);
    return `'I was born in ${yob}'`
}

console.log(createGreeting(23))