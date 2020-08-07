const age = [23, 34, 34, 67,45];
const age2 = [ 23 ,13, 34];

//const allAges = age.concat(age2);
const allAges = [...age,...age2]
console.log(allAges);

const taka = [345,675,456];
const maximum = Math.max(...taka);
console.log (maximum);