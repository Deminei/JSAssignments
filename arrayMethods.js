const users = [
    {id: 1232, firstName: 'Cam', lastName: 'Danvers', logins: 35, isPremiumMember: false},
    {id: 3283, firstName: 'Elijah', lastName: 'Hawkings', logins: 3, isPremiumMember: true},
    {id: 9283, firstName: 'Ragupathy', lastName: 'Bodem', logins: 12, isPremiumMember: false},
    {id: 6972, firstName: 'Jamilla', lastName: 'Johnson', logins: 5, isPremiumMember: true},
    {id: 3998, firstName: 'Jose', lastName: 'Rivera', logins: 16, isPremiumMember: false},
    {id: 4982, firstName: 'Ted', lastName: 'Witherspoon', logins: 53, isPremiumMember: true},
    {id: 6929, firstName: 'Igor', lastName: 'Silenski', logins: 23, isPremiumMember: false},
    {id: 3879, firstName: 'Ira', lastName: 'Bolislovitz', logins: 9, isPremiumMember: false}
];

const userJose = users.find(user => user.firstName === 'Jose');//find a user Jose in the array

const premiumMembers = users.filter(user => user.isPremiumMember);//gets an array of all the premium members

const lastNames = users.map(user => user.lastName);//gets an array of all user last names

const fullNames = users
  .filter(user => user.logins > 10)
  .map(user => `${user.firstName} ${user.lastName}`);//array of the full names that have logged in more than 10x

const totalLogins = users.reduce((acc, user) => acc + user.logins, 0);//total number of logins for all users

console.log(userJose);
console.log(premiumMembers);
console.log(lastNames);
console.log(fullNames);
console.log(totalLogins);//console-logged all array methods to see results
"(\ /)"
"(O.o)"
"(> <)"