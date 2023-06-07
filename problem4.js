let people = [{name: "mary", contact: 0881999000},
              {name: "paul", contact: 0881999600},
              {name: "peter", contact: 0881999400},
              {name: "sara", contact: 0881999300}];

console.log( (people[0].name) );

people[0].gender = 'female';
people[1].gender = 'male';
people[2].gender = 'male';
people[3].gender = 'female';

people[people.length] = {name: 'Sam', contact: 0880442708, gender: 'male'}

console.log( (people[3].contact) );
console.table(people);

