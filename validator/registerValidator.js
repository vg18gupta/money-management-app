const validator = require('validator')

const validate = (user) => {
    let error = {}

    if(!user.name) {
        error.name = 'Please Provide Your Name'
    }

    if(!user.email) {
        error.email = 'Please Provide Your Name'
    }else if(!validator.isEmail(user.email)) {
        error.email = 'please provide a valid Email'
    }

    if(!user.password) {
        error.password = 'Please Provide Your password' 
    }else if(user.password < 6) {
        error.password = 'please provide atleast 6 character'
    }

    if(!user.confirmPassword) {
        error.confirmPassword = 'Please Provide Your correct password'
    }else if(user.password !== user.confirmPassword) {
        error.confirmPassword = 'password doesnot match'
    }

    return {
        error,
        isValid: Object.keys(error).length == 0
    }
}

module.exports = validate 