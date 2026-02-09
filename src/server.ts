// console.log('Welcome to full stack development with Node.js and Express!')

function welcome(name: string) {
    // console.log(`Welcome, ${name}!`)
    const user = {
        name: 'Manikandan',
    }
    const lastName = user.name
    return `Welcome, ${name} + ${lastName}!`
}

welcome('Abhishek Karthik')
