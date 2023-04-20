//user objects array
const users = [
    { id: 1, name: 'Eric', email: 'thewarden@superjail.com' },
    { id: 2, name: 'Hector', email: 'misskobayashi@awesomedude.com' },
    { id: 3, name: 'Erin', email: 'warryhizard@slytherin.com' }
];

//function to fetch user by id
function fetchUserById(userId) {
    return new Promise((resolve, reject) => {
        //simulates asynchronous request with setTimeout
        setTimeout(() => {
            const user = users.find(user => user.id === userId);//finds user by ID
            if (user) {
                resolve(user);//resolve with user object if found
            } else {
                reject(`User with ID ${userId} not found`);//reject with error message if not found
            }
        }, 1000);//delayed by 1 second aka 1000 milisegundos
    });
}

//fetch user with id 1
fetchUserById(1)
    .then(user => {
        console.log('User:', user);//logs user object if promise is fulfilled
    })
    .catch(error => {
        console.error('Error:', error);//logs error message if promise is rejected
    });

//fetch user with id 2
fetchUserById(2)
    .then(user => {
        console.log('User:', user);//logs user object if promise is fulfilled
    })
    .catch(error => {
        console.error('Error:', error);//logs error message if promise is rejected
    });

//MY BRAIN HURTS!!! ╰(ಥдಥ)ノ