const user = {
    firstName: 'Adam',
    lastName: 'Nowak',
    born: {
        day: '14',
        month: '04',
        year: '1985'
    }
}

user.checkBirth = function() {
    const now = new Date()

    const day = now.getUTCDate()
    const month = now.getMonth()

    const userBirthDay = parseInt(this['born']['day'])
    const userBirthMonth = parseInt(this['born']['month'])

    if(userBirthDay === day || userBirthMonth === month){
        return true
    } else {
        return false
    }

    
}

console.log( user.checkBirth()); 
