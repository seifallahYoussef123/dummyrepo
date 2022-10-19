const os = require('os')

// info abvout user
const user = os.userInfo()
console.log(user);

// method returns the system uptime in seconds

console.log(`the uptime ${os.uptime} seconds`)

const currentOS = {
    name:os.type(),
    release: os.release(),
    freemem: os.freemem(),
}

console.log(currentOS)